var initViewportWidth = 1980;
var initViewportHeight = 1080;

// consider canvas instead of svg
var svgMap = d3.select(".kyrix-panel")
                .append("svg")
                .attr("id", "map")
                .attr("width", initViewportWidth)
                .attr("height", initViewportHeight);

// var context = d3.select(".kyrix-panel")
//                 .append("canvas")
//                 .attr("id", "map")
//                 .attr("width", initViewportWidth)
//                 .attr("height", initViewportHeight)
//                 .node()
//                 .getContext("2d");

var projection = d3.geoNaturalEarth1()
                .scale(380)
                .translate([initViewportWidth/2, initViewportHeight/2])
                .rotate([-11,0,0]);   // shift part of Russia from west of the map to the east

var path = d3.geoPath().projection(projection);

// Append Div for tooltip to BODY and not to SVG!!!
var tt = d3.select("body").append("div")   
                .attr("class", "tooltip")           
                .style("opacity", 0);

// setup map visualization
d3.json("/first", {
    method: "POST",
    body: JSON.stringify({
        top_left_x: 0,
        top_left_y: 0,
        top_right_x: 0,
        top_right_y: 0,
        bottom_right_x: 0,
        bottom_right_y: 0,
        bottom_left_x: 0,
        bottom_left_y: 0,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(function(data) {
    d3.json("./countries-110m.json")
    .then(function(world_map) {

        svgMap.append("g")
            .attr("class", "countries")
            .selectAll("path")
            .data(topojson.feature(world_map, world_map.objects.countries).features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "white")
            .attr("stroke", "black")
            .attr("stroke-width", 0.5)
            .on("mouseover", function(d) {
                d3.select(this)
                    .transition().duration(200)
                    .style("fill", "red");
                tt.transition()        
                    .duration(200)      
                    .style("opacity", .9);   
    
                tt.html(d.properties.name)
                .style("left", (d3.event.pageX + 10) + "px")     
                .style("top", (d3.event.pageY + 10) + "px"); 
            })
            .on("mousemove", function(d) {
                tt.html(d.properties.name)
                .style("left", (d3.event.pageX + 10) + "px")     
                .style("top", (d3.event.pageY + 10) + "px"); 
            })
            .on("mouseout", function() {
                d3.select(this)
                    .transition().duration(200)
                    .style("fill", "white");
                tt.transition()        
                    .duration(500)      
                    .style("opacity", 0); 
            });

        svgMap.append("g")
            .attr("class", "graticule")
            .selectAll("path")
            .data([d3.geoGraticule10()])
            .enter()
            .append("path")
            .attr("d", path)
            .attr("stroke", "black")
            .attr("stroke-width", 0.1)
            .style("fill", "None");
    })
});

