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

# Get data for display
Display proteins and there links.
```
MATCH p=()-[r:DOMAIN_LINK]->()
WHERE r.similarity >= 0.8
RETURN p LIMIT 200
```

Display links from one protein
```
MATCH p=(:Protein {proteinId:'Q6RUV5'})-[r:DOMAIN_LINK]->()
WHERE r.similarity >= 0.8
RETURN p LIMIT 200
```

Display proteins not linked to any other
```
MATCH (prot:Protein)
OPTIONAL MATCH p=(prot)-[r:DOMAIN_LINK]-()
WITH prot, p, collect(r) AS links
WHERE SIZE(links) = 0
RETURN prot LIMIT 10
```

# Propagate labels
```
MATCH (p:Protein)
WHERE SIZE(p.labels) <> 0
SET p.propagLabels = p.labels;
```

```
MATCH (p:Protein)-[r:DOMAIN_LINK]-(target)
WHERE SIZE(p.propagLabels) = 0
AND SIZE(target.propagLabels) > 0
//AND r.similarity > 0.5
WITH p, max(r.similarity) as maxi, collect(r) as links, collect(target) as targets
WITH p, maxi, links, targets, range(0, size(links)) AS idx
UNWIND idx AS i
WITH p, maxi, links, targets, i
WHERE links[i].similarity = maxi
AND size(targets[i].propagLabels) > 0 
UNWIND targets[i].propagLabels as label
WITH p, collect(distinct label) AS propagLabels
SET p.propagLabels = propagLabels
```

```
MATCH (p:Protein)
WHERE SIZE(p.labels) <> 0
DELETE p.propagLabels;
```

# Extras
To delete all the nodes and relationships run.
```
MATCH (n)
DETACH DELETE n;
```

To add colors to 'classes' of proteins
```
MATCH (p:Protein)
WHERE SIZE(p.labels) > 0
UNWIND p.labels as label
WITH p, collect(DISTINCT SUBSTRING(label,0,1)) as topLevels
SET p.topLevels = topLevels;
```
```
MATCH (p:Protein)
WHERE SIZE(p.labels) = 0
SET p.topLevels = [];
```

To propagate colors (usually 4 iterations)
```
MATCH (p:Protein)-[r:DOMAIN_LINK]-(target)
WHERE SIZE(p.topLevels) = 0
AND SIZE(target.topLevels) > 0
//AND r.similarity > 0.5
WITH p, max(r.similarity) as maxi, collect(r) as links, collect(target) as targets
WITH p, maxi, links, targets, range(0, size(links)) AS idx
UNWIND idx AS i
WITH p, maxi, links, targets, i
WHERE links[i].similarity = maxi
AND size(targets[i].topLevels) > 0
UNWIND targets[i].topLevels as topLevel
WITH p, collect(DISTINCT topLevel) as topLevels
SET p.topLevels = topLevels
```

To remove color data
```
MATCH (p:Protein)
REMOVE p.topLevels
```
