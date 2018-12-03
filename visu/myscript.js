$(document).ready(function() {
    const url = "http://localhost:7474/";
    const username = "neo4j";
    const password = "pwd18";
    const statement = "{\"statements\":[{\"statement\":\"\
        MATCH p=()-[r:DOMAIN_LINK]->()\
        WHERE r.distance >= 0.8\
        RETURN p LIMIT 500\",\"resultDataContents\":[\"graph\"]}]}";
    
    //const statement = "{\"statements\":[{\"statement\":\"MATCH path = (n)-[r]->(m) RETURN path LIMIT 25\",\"resultDataContents\":[\"graph\"]}]}";
    
    $.ajax({
        url: url + "db/data/transaction/commit",
        type: "POST",
        beforeSend: function(xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password))
        },
        dataType: "json",
        data: statement,
        contentType: "application/json",
        success: convertResults,
        error: function(error) {
            console.log(`Error ${error}`);
        }  
    })
})

function convertResults(result) {
    function idIndex(a,id) {
        for (var i=0;i<a.length;i++) {
          if (a[i].id == id) return i;}
        return null;
    }
    var nodes=[], links=[];
    result.results[0].data.forEach(function (row) {
        row.graph.nodes.forEach(function (n) {            
            if (idIndex(nodes,n.id) == null) {                                
                nodes.push({id:n.id,labels:n.properties.labels,title:n.properties.proteinId});
            }
        });        
        links = links.concat( row.graph.relationships.map(function(r) {            
            return {source:idIndex(nodes,r.startNode),target:idIndex(nodes,r.endNode),type:r.type,weight:r.properties.distance};
        }));
    });
    viz = {nodes:nodes, links:links};
    console.log(viz);
    createGraph(viz);
}

function createGraph(json) {
    var width = 800, height = 800;

    var svg = d3.select("#graph")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .call(d3.behavior.zoom().on("zoom", function () {
                svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
            }))
            .append("g");

    var force = d3.layout.force()
        .gravity(0.05)
        .distance(100)
        .charge(-100)
        .size([width, height]);

    console.log(force);
    console.log(json.nodes);
    console.log(json.links);
    force.nodes(json.nodes)
        .links(json.links)
        .start();

    var link = svg.selectAll(".link")
        .data(json.links)
        .enter().append("line")
        .attr("class", "link");    

    var node = svg.selectAll(".node")
        .data(json.nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(force.drag);

    node.append("circle")
            .attr("class", function (d) { return "node "+d.label })
            .attr("r", 10);

    node.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.title });

    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    
    });
}