var w = 500;
var h = 300;

//dataset 1
var dataset1 = {
  nodes:[
    {name:"Adam"},
    {name:"Bob"},
    {name:"Kate"},
    {name:"Jerry"},
    {name:"George"},
    {name:"Mary"},
    {name:"Peter"}
  ],
  edges:[
    {source:0,target:1},
    {source:0,target:1},
    {source:2,target:3},
    {source:2,target:3},
    {source:1,target:4},
    {source:3,target:4},
    {source:4,target:5},
    {source:5,target:6}
  ]
};

var force = d3.forceSimulation(dataset1.nodes)
               .force("charge", d3.forceManyBody())
               .force("link", d3.forceLink(dataset1.edges))
               .force("center",d3.forceCenter().x(w/2).y(h/2));

var colors = d3.scaleOrdinal(d3.schemeCategory10);

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

               //Create edges as lines
               var edges = svg.selectAll("line")
                 .data(dataset1.edges)
                 .enter()
                 .append("line")
                 .style("stroke", "#ccc")
                 .style("stroke-width", 1);

               //Create nodes as circles
               var nodes = svg.selectAll("circle")
                 .data(dataset1.nodes)
                 .enter()
                 .append("circle")
                 .attr("r", 10)
                 .style("fill", function(d, i) {
                   return colors(i);
                 });

               //Add a simple tooltip
               nodes.append("title")
                    .text(function(d) {
                   return d.name;
                  });

               //Every time the simulation "ticks", this will be called
               force.on("tick", function() {

                 edges.attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                 nodes.attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });

               });
