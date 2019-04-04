var w = 500;
var h = 300;

//dataset 1: character relation/family tree
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

//dataset 2: network
var dataset2 = {
  nodes:[
    {name:"Internet"},
    {name:"Modem"},
    {name:"Router/Firewall"},
    {name:"iPhone"},
    {name:"Server"},
    {name:"Switch"},
    {name:"Workstation"},
    {name:"WiFi"},
    {name:"Laptop Computer"},
    {name:"Desktop PC"},
    {name:"Smartphone"}
  ],
  edges:[
    {source:0,target:1},
    {source:1,target:2},
    {source:2,target:5},
    {source:2,target:6},
    {source:2,target:7},
    {source:5,target:4},
    {source:5,target:9},
    {source:7,target:3},
    {source:7,target:8},
    {source:7,target:10}
  ]
};

//dataset3: college major
var dataset3 = {
  nodes:[
    {name:"Majors"},
    {name:"Aesthetic Context"},
    {name:"Scientific Context"},
    {name:"Social Context"},
    {name:"Language"},
    {name:"Sociology"},
    {name:"Biology"},
    {name:"Religion"},
    {name:"Computer Science"},
    {name:"Japanese"},
    {name:"French"},
    {name:"History"},
    {name:"Art"},
    {name:"Music"}
  ],
  edges:[
    {source:0,target:1},
    {source:0,target:2},
    {source:0,target:3},
    {source:0,target:4},
    {source:1,target:12},
    {source:1,target:13},
    {source:2,target:6},
    {source:2,target:8},
    {source:3,target:5},
    {source:3,target:11},
    {source:4,target:9},
    {source:4,target:10}
  ]
};
//dataset1
var force1 = d3.forceSimulation(dataset1.nodes)
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
               var edges1 = svg.selectAll("line")
                 .data(dataset1.edges)
                 .enter()
                 .append("line")
                 .style("stroke", "#ccc")
                 .style("stroke-width", 1);

//Create nodes as circles
               var nodes1 = svg.selectAll("circle")
                 .data(dataset1.nodes)
                 .enter()
                 .append("circle")
                 .attr("r", 10)
                 .style("fill", function(d, i) {
                   return colors(i);
                 });

//Add a simple tooltip
               nodes1.append("title")
                     .text(function(d) {
                   return d.name;
                 });

//Every time the simulation "ticks", this will be called
              force1.on("tick", function() {

              edges1.attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

              nodes1.attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });

               });
//dataset2
         var force2 = d3.forceSimulation(dataset2.nodes)
                        .force("charge", d3.forceManyBody())
                        .force("link", d3.forceLink(dataset2.edges))
                        .force("center",d3.forceCenter().x(w/2).y(h/2));

         var colors = d3.scaleOrdinal(d3.schemeCategory10);

//Create SVG element
         var svg = d3.select("body")
                     .append("svg")
                     .attr("width", w)
                     .attr("height", h);

//Create edges as lines
          var edges2 = svg.selectAll("line")
                          .data(dataset2.edges)
                          .enter()
                          .append("line")
                          .style("stroke", "#ccc")
                          .style("stroke-width", 1);

//Create nodes as circles
          var nodes2 = svg.selectAll("circle")
                          .data(dataset2.nodes)
                          .enter()
                          .append("circle")
                          .attr("r", 10)
                          .style("fill", function(d, i) {
                            return colors(i);
                    });

                              //Add a simple tooltip
                              nodes2.append("title")
                                   .text(function(d) {
                                  return d.name;
                                 });

//Every time the simulation "ticks", this will be called
          force2.on("tick", function() {

          edges2.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

          nodes2.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

          });
//dataset3
var force3 = d3.forceSimulation(dataset3.nodes)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(dataset3.edges))
            .force("center",d3.forceCenter().x(w/2).y(h/2));

var colors = d3.scaleOrdinal(d3.schemeCategory10);

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

//Create edges as lines
var edges3 = svg.selectAll("line")
               .data(dataset3.edges)
               .enter()
               .append("line")
               .style("stroke", "#ccc")
               .style("stroke-width", 1);

//Create nodes as circles
var nodes3 = svg.selectAll("circle")
               .data(dataset3.nodes)
               .enter()
               .append("circle")
               .attr("r", 10)
               .style("fill", function(d, i) {
               return colors(i);
               });

//Add a simple tooltip
       nodes3.append("title")
            .text(function(d) {
                 return d.name;
          });

//Every time the simulation "ticks", this will be called
      force3.on("tick", function() {

      edges3.attr("x1", function(d) { return d.source.x; })
           .attr("y1", function(d) { return d.source.y; })
           .attr("x2", function(d) { return d.target.x; })
           .attr("y2", function(d) { return d.target.y; });

      nodes3.attr("cx", function(d) { return d.x; })
           .attr("cy", function(d) { return d.y; });

          });
