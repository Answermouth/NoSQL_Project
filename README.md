# Setting up Neo4j
Download the neo4j community edition here https://neo4j.com/download-center/

# Loading the data into Neo4j
Install the apoc and algo plugins. <br>
Download latest apoc release at: https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases <br>
Download latest algo release at: https://github.com/neo4j-contrib/neo4j-graph-algorithms/releases <br>
Place jar files in the plugin folder of your neo4j install.

Run the following command to load the json containing all of the protein data.
```
CALL apoc.load.json("file:///Path/to/Clean_Data.json") YIELD value AS protein
MERGE (p:Protein {
        proteinId: protein.code, 
        domains: protein.domains, 
        labels: protein.EC_numbers, 
        goTerms: protein.GO_terms, 
        entryName: protein.Entry_name, 
        proteinName: protein.Protein_names, 
        geneName: protein.Gene_names 
    })
WITH protein, p
UNWIND protein.domains as domain
MERGE (d:Domain {domain: domain})
MERGE (p)-[:IN]->(d);
```

Run the following command to add the domain nodes ids to the protein node (this will be used to calculate the jaccard similarity).
```
MATCH (p1:Protein)-[:IN]->(d1:Domain)
WITH p1, collect(ID(d1)) AS ids
SET p1.domainsIDs = ids;
```

Run this command to link the proteins together that have a jaccard similarity higher than 0.
```
MATCH (p1:Protein)
WITH p1
MATCH (p2:Protein)
WHERE p1 <> p2
AND algo.similarity.jaccard(p1.domainsIDs, p2.domainsIDs)>0
MERGE (p1)-[:DOMAIN_LINK {similarity: algo.similarity.jaccard(p1.domainsIDs, p2.domainsIDs)}]-(p2);
```


# Propagate labels
```
MATCH (p:Protein)-[r:DOMAIN_LINK]-(target)
WHERE SIZE(p.labels) = 0
//AND SIZE(target.labels) > 0
//AND r.similarity > 0.5
WITH p, max(r.similarity) as maxi, collect(r) as links, collect(target) as targets
WITH p, maxi, links, targets, range(0, size(links)) AS idx
UNWIND idx AS i
WITH p, maxi, links, targets, i
WHERE links[i].similarity = maxi
AND size(targets[i].labels) > 0
UNWIND targets[i].labels as label
RETURN p.proteinId, collect(DISTINCT label), collect(DISTINCT SUBSTRING(label,0,1)) LIMIT 20
```
