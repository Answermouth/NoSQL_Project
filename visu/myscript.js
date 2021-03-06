const blues = ["#f7fbff", "#deebf7", "#c6dbf7", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"];
const nodeColors = color = d3.scale.linear().domain([1,49])
    .interpolate(d3.interpolateHcl)
    .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);
const unwantedAttributes = ['id', 'class', 'transform', 'proteinID', 'topLevels'];

const url = "http://localhost:7474/";
const username = "neo4j";
const password = "pwd18";

var nodeClicked = false, nodeLongClicked = false, play = true;
var sliderEditTimer, nodeClickedTimer;
var getInputFromSliders = false;

$(document).ready(function() {
    $('body,html').css("overflow","hidden");
    // slider
    var thresholdSlider = document.getElementById("threshold");
    var limitSlider = document.getElementById("limit");

    // Update the current slider value (each time you drag the slider handle)
    thresholdSlider.oninput = sliderHandler
    limitSlider.oninput = sliderHandler  
    updateGraph();
})

function sliderHandler(event) {
    var sliderId = event.srcElement.id;
    var label = document.getElementById(sliderId + "-label");
    label.innerHTML = event.srcElement.value;    
    if (getInputFromSliders) { // function was being called 2 times at creation thus creating 2 graphs        
        clearTimeout(sliderEditTimer);
        sliderEditTimer = window.setTimeout(function() {            
            updateGraph();
        },1000);
    }
}

function centerOnProtein() {
    var proteinId = document.getElementById("proteinDetailTitle").innerHTML;
    document.getElementById("search").value = proteinId;
    updateGraph();
}

function updateGraph() {
    getInputFromSliders = true;
    var myNode = document.getElementById("graph");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var threshold = document.getElementById("threshold").value / 100;
    var limit = document.getElementById("limit").value;    
    var proteinId = document.getElementById("search").value;

    neo4jConnection(proteinId, threshold, limit);
}

function neo4jConnection(proteinID, threshold, limit) {
    var query;
    if (proteinID === null || proteinID === "") {
        query = "MATCH p=()-[r:DOMAIN_LINK]->() \
        WHERE r.similarity >= " + threshold + " \
        RETURN p LIMIT " + limit;
    } else if (proteinID === "singles") {
        query = "MATCH (prot:Protein)\
        OPTIONAL MATCH p=(prot)-[r:DOMAIN_LINK]-()\
        WITH prot, p, collect(r) AS links\
        WHERE SIZE(links) = 0\
        RETURN prot LIMIT " + limit;                
    } else {
        query = "MATCH p=(:Protein {proteinId:\'" + proteinID + "\'})-[r:DOMAIN_LINK]->() \
        WHERE r.similarity >= " + threshold + " \
        RETURN p LIMIT " + limit;
    }

    const statement = "{\"statements\":[{\"statement\":\"" + query + "\",\"resultDataContents\":[\"graph\"]}]}";
    
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
}

function idIndex(a,id) {
    for (var i=0;i<a.length;i++) {
      if (a[i].id == id) return i;}
    return null;
}

function convertResults(result) {    
    var nodes=[], links=[];
    result.results[0].data.forEach(function (row) {
        row.graph.nodes.forEach(function (n) {            
            if (idIndex(nodes,n.id) == null) {                    
                nodes.push(
                    {
                        id:n.id,
                        labels: n.properties.labels,
                        propagLabels: n.properties.propagLabels,
                        title: n.properties.proteinId,
                        domains: n.properties.domains,
                        goTerms: n.properties.goTerms,
                        proteinName: n.properties.proteinName,
                        entryName: n.properties.entryName,
                        geneName: n.properties.geneName,
                        topLevels: n.properties.topLevels
                    }
                );
            }
        });        
        links = links.concat( row.graph.relationships.map(function(r) {
            return {source:idIndex(nodes,r.startNode),target:idIndex(nodes,r.endNode),type:r.type,weight:r.properties.similarity};
        }));
    });
    viz = {nodes:nodes, links:links};
    //labelPropag(viz);
    console.log(viz);
    createGraph(viz);    
}


function createGraph(json) {
    var width = window.innerWidth, height = window.innerHeight;
    
    var svg = d3.select("#graph")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")                      
        .call(d3.behavior.zoom().on("zoom", function () {
            if (nodeClicked == false)
            svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
        }))            
        .append("g");        
    
    var force = d3.layout.force()
        .gravity(0.03)
        .distance(100)
        .charge(-100)
        .size([width, height]);
    
    force.linkDistance(function(link) {
        return 100/Math.sqrt(link.weight);
    });
    
    force.nodes(json.nodes)
        .links(json.links)
        .start();
    
    var link = svg.selectAll(".link")
        .data(json.links)
        .enter().append("line")
        .attr("class", "link")
        .attr("stroke", function(d){            
            return blues[Math.ceil(d.weight*9-1)];
        });    
    
    var node = svg.selectAll(".node")
        .data(json.nodes)
        .enter().append("g")
        .attr("class", "node")
        .attr("proteinID", function (d) { return d.title })  
        .attr("labels", function (d) { return d.labels })
        .attr("propagLabels", function (d) { return d.propagLabels })
        .attr("domains", function (d) { return d.domains })
        .attr("entryName", function (d) { return d.entryName })
        .attr("geneName", function (d) { return d.geneName })
        .attr("goTerms", function (d) { return d.goTerms })
        .attr("proteinName", function (d) { return d.proteinName })
        .attr("topLevels", function (d) { return d.topLevels })
        .attr("id", function (d) { return "node-"+d.index})        
        .call(force.drag);
    
    node.append("circle")
        .attr("style",function (d) {
            if (typeof(d.topLevels) != 'undefined') {
                colorClassString = "";
                d.topLevels.sort().forEach(topLevel => {
                    colorClassString += parseInt(topLevel)-1;
                })
                var colorClass = parseInt(colorClassString,7);            
                if (!isNaN(colorClass)) {                
                    return 'fill: ' + color(colorClass);
                }
            }
            return 'fill: #ccc';
          })
        .attr("class", function (d) { return "node circle"})
        .attr("id", function (d) { return "circle-"+d.index})
        .attr("r", 10)
        .on("mousedown", function() {                                
            nodeClicked = true;
            nodeClickedTimer = window.setTimeout(function() {
                nodeLongClicked = true;
            },200);                
        })
        .on("mouseup", function() {
            clearTimeout(nodeClickedTimer);
            if (nodeLongClicked != true) {                        
                handleShortClickedNode(this);
            } else {
                nodeLongClicked = false;
            }
            nodeClicked = false;
        });
    
    node.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.title });
    
    
    var edgepaths = svg.selectAll(".edgepath")
        .data(json.links)
        .enter()
        .append('path')
        .attr({'d': function(d) {return 'M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y},
        'class':'edgepath',
        'fill-opacity':0,
        'stroke-opacity':0,
        'fill':'blue',
        'stroke':'red',
        'id':function(d,i) {return 'edgepath'+i}})
        .style("pointer-events", "none");
    
    var edgelabels = svg.selectAll(".edgelabel")
        .data(json.links)
        .enter()
        .append('text')
        .style("pointer-events", "none")
        .attr({'class':'edgelabel',
            'id':function(d,i){return 'edgelabel'+i},
            'dx':80,
            'dy':0,
            'font-size':10,
            'fill':function(d){            
                return blues[Math.ceil(d.weight*9-1)];
            }
        });

    edgelabels.append('textPath')
        .attr('xlink:href',function(d,i) {return '#edgepath'+i})
        .style("pointer-events", "none")
        .text(function(d,i){             
            return d.weight.toFixed(2);
        });

    force.on("tick", function() {
        if (play) {
            link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
            
            node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
            
            edgepaths.attr('d', function(d) { var path='M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y;                                           
            return path});       
    
                edgelabels.attr('transform',function(d,i){
                    if (d.target.x<d.source.x){
                        bbox = this.getBBox();
                        rx = bbox.x+bbox.width/2;
                        ry = bbox.y+bbox.height/2;
                        return 'rotate(180 '+rx+' '+ry+')';
                        }
                    else {
                        return 'rotate(0)';
                        }
            });
        }
    });
}

function togglePlay() {
    play = !play;
}

function handleShortClickedNode(element) {
    var id = element.id.split('-')[1]    
    var nodeId = "node-"+id;
    var node = document.getElementById(nodeId);

    var attr = node.attributes;    
    
    var modalBody = document.getElementById('proteinDetailBody');
    modalBody.innerHTML = "";

    for (var i = 0; i < attr.length; i++) {
        if (unwantedAttributes.indexOf(attr[i].name) < 0 && attr[i].value.length > 0) {
            modalBody.innerHTML += "<strong>" + attr[i].name + ":</strong> " + attr[i].value.replace(/,/g, ', ') + "<br>";
        }
    }

    document.getElementById('proteinDetailTitle').innerHTML = node.getAttribute('proteinID');
    
    
    $("#proteinDetail").modal('show');    
}

function propagate() {

    var query1 = "MATCH (p:Protein)-[r:DOMAIN_LINK]-(target) \
    WHERE SIZE(p.propagLabels) = 0 \
    AND SIZE(target.propagLabels) > 0 \
    WITH p, max(r.similarity) as maxi, collect(r) as links, collect(target) as targets \
    WITH p, maxi, links, targets, range(0, size(links)) AS idx \
    UNWIND idx AS i \
    WITH p, maxi, links, targets, i \
    WHERE links[i].similarity = maxi \
    AND size(targets[i].propagLabels) > 0 \
    UNWIND targets[i].propagLabels as label \
    WITH p, collect(distinct label) AS propagLabels \
    SET p.propagLabels = propagLabels;"

    var query2 = "MATCH (p:Protein) \
    WHERE SIZE(p.propagLabels) > 0 \
    UNWIND p.propagLabels as label \
    WITH p, collect(DISTINCT SUBSTRING(label,0,1)) as topLevels \
    SET p.topLevels = topLevels;"

    const statements = "{\"statements\":[{\"statement\":\"" + query1 + "\"}, {\"statement\":\"" + query2 + "\"}]}";
    //const statements = "{\"statements\":[{\"statement\":\"" + query1 + "\"}]}";

    $.ajax({
        url: url + "db/data/transaction/commit",
        type: "POST",
        beforeSend: function(xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password))
        },
        dataType: "json",
        data: statements,
        contentType: "application/json",
        success: function(r) {
            console.log(r);
            updateGraph();
        },
        error: function(error) {
            console.log(`Error ${error}`);
        }  
    }) 
}

function clearPropagatedLabels() {
    var query1 = "MATCH (p:Protein) \
        REMOVE p.propagLabels\
        REMOVE p.topLevels;"

    var query2 = "MATCH (p:Protein)\
        WHERE SIZE(p.labels) <> 0\
        SET p.propagLabels = p.labels;"

    var query3 = "MATCH (p:Protein)\
        WHERE SIZE(p.labels) = 0\
        SET p.propagLabels = [];"

    var query4 = "MATCH (p:Protein) \
        WHERE SIZE(p.propagLabels) > 0 \
        UNWIND p.propagLabels as label \
        WITH p, collect(DISTINCT SUBSTRING(label,0,1)) as topLevels \
        SET p.topLevels = topLevels;"

    const statements = "{\"statements\":[{\"statement\":\"" + query1 + "\"}, \
        {\"statement\":\"" + query2 + "\"}, {\"statement\":\"" + query3 + "\"}, {\"statement\":\"" + query4 + "\"}]}";

    $.ajax({
        url: url + "db/data/transaction/commit",
        type: "POST",
        beforeSend: function(xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password))
        },
        dataType: "json",
        data: statements,
        contentType: "application/json",
        success: function(r) {
            console.log(r);
            updateGraph();
        },
        error: function(error) {
            console.log(`Error ${error}`);
        }  
    });    
}