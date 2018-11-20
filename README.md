# Loading the data into Neo4j

Install the apoc plugin. <br>
Download latest release at: https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases <br>
Place jar file in the plugin folder of your neo4j install.

Use this command to load the sample_labels.json files into neo4j.
```
CALL apoc.load.json("file:///Path/to/file") YIELD value AS protein
CREATE (p:Protein {proteinId: protein.code, labels: protein.labels})
```

Use this command to load the sample_domains.json files into neo4j.
```
CALL apoc.load.json("file:///Path/to/file") YIELD value AS protein
CREATE (p:Protein {proteinId: protein.code, domains: protein.domains})
```