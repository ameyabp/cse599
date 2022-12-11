const initViewportWidth = Math.round(window.innerWidth * 0.9);
const initViewportHeight = Math.round(window.innerHeight * 0.8);

const earth_border = {
    "type": "MultiLineString",
    "coordinates": [
        [
            [
                -180,
                -89.999999
            ],
            [
                -180,
                9.999999974752427e-7
            ],
            [
                -180,
                89.999999
            ],
            [
                -180,
                90
            ],
            [
                -177.5,
                90
            ],
            [
                -175,
                90
            ],
            [
                -172.5,
                90
            ],
            [
                -170,
                90
            ],
            [
                -167.5,
                90
            ],
            [
                -165,
                90
            ],
            [
                -162.5,
                90
            ],
            [
                -160,
                90
            ],
            [
                -157.5,
                90
            ],
            [
                -155,
                90
            ],
            [
                -152.5,
                90
            ],
            [
                -150,
                90
            ],
            [
                -147.5,
                90
            ],
            [
                -145,
                90
            ],
            [
                -142.5,
                90
            ],
            [
                -140,
                90
            ],
            [
                -137.5,
                90
            ],
            [
                -135,
                90
            ],
            [
                -132.5,
                90
            ],
            [
                -130,
                90
            ],
            [
                -127.5,
                90
            ],
            [
                -125,
                90
            ],
            [
                -122.5,
                90
            ],
            [
                -120,
                90
            ],
            [
                -117.5,
                90
            ],
            [
                -115,
                90
            ],
            [
                -112.5,
                90
            ],
            [
                -110,
                90
            ],
            [
                -107.5,
                90
            ],
            [
                -105,
                90
            ],
            [
                -102.5,
                90
            ],
            [
                -100,
                90
            ],
            [
                -97.5,
                90
            ],
            [
                -95,
                90
            ],
            [
                -92.5,
                90
            ],
            [
                -90,
                90
            ],
            [
                -87.5,
                90
            ],
            [
                -85,
                90
            ],
            [
                -82.5,
                90
            ],
            [
                -90,
                90
            ],
            [
                -77.5,
                90
            ],
            [
                -75,
                90
            ],
            [
                -72.5,
                90
            ],
            [
                -70,
                90
            ],
            [
                -67.5,
                90
            ],
            [
                -65,
                90
            ],
            [
                -62.5,
                90
            ],
            [
                -60,
                90
            ],
            [
                -57.5,
                90
            ],
            [
                -55,
                90
            ],
            [
                -52.5,
                90
            ],
            [
                -50,
                90
            ],
            [
                -47.5,
                90
            ],
            [
                -45,
                90
            ],
            [
                -42.5,
                90
            ],
            [
                -40,
                90
            ],
            [
                -37.5,
                90
            ],
            [
                -35,
                90
            ],
            [
                -32.5,
                90
            ],
            [
                -30,
                90
            ],
            [
                -27.5,
                90
            ],
            [
                -25,
                90
            ],
            [
                -22.5,
                90
            ],
            [
                -20,
                90
            ],
            [
                -17.5,
                90
            ],
            [
                -15,
                90
            ],
            [
                -12.5,
                90
            ],
            [
                -10,
                90
            ],
            [
                -7.5,
                90
            ],
            [
                -5,
                90
            ],
            [
                -2.5,
                90
            ],
            [
                0,
                90
            ],
            [
                2.5,
                90
            ],
            [
                5,
                90
            ],
            [
                7.5,
                90
            ],
            [
                10,
                90
            ],
            [
                12.5,
                90
            ],
            [
                15,
                90
            ],
            [
                17.5,
                90
            ],
            [
                20,
                90
            ],
            [
                22.5,
                90
            ],
            [
                25,
                90
            ],
            [
                27.5,
                90
            ],
            [
                30,
                90
            ],
            [
                32.5,
                90
            ],
            [
                35,
                90
            ],
            [
                37.5,
                90
            ],
            [
                40,
                90
            ],
            [
                42.5,
                90
            ],
            [
                45,
                90
            ],
            [
                47.5,
                90
            ],
            [
                50,
                90
            ],
            [
                52.5,
                90
            ],
            [
                55,
                90
            ],
            [
                57.5,
                90
            ],
            [
                60,
                90
            ],
            [
                62.5,
                90
            ],
            [
                65,
                90
            ],
            [
                67.5,
                90
            ],
            [
                70,
                90
            ],
            [
                72.5,
                90
            ],
            [
                75,
                90
            ],
            [
                77.5,
                90
            ],
            [
                90,
                90
            ],
            [
                82.5,
                90
            ],
            [
                85,
                90
            ],
            [
                87.5,
                90
            ],
            [
                90,
                90
            ],
            [
                92.5,
                90
            ],
            [
                95,
                90
            ],
            [
                97.5,
                90
            ],
            [
                100,
                90
            ],
            [
                102.5,
                90
            ],
            [
                105,
                90
            ],
            [
                107.5,
                90
            ],
            [
                110,
                90
            ],
            [
                112.5,
                90
            ],
            [
                115,
                90
            ],
            [
                117.5,
                90
            ],
            [
                120,
                90
            ],
            [
                122.5,
                90
            ],
            [
                125,
                90
            ],
            [
                127.5,
                90
            ],
            [
                130,
                90
            ],
            [
                132.5,
                90
            ],
            [
                135,
                90
            ],
            [
                137.5,
                90
            ],
            [
                140,
                90
            ],
            [
                142.5,
                90
            ],
            [
                145,
                90
            ],
            [
                147.5,
                90
            ],
            [
                150,
                90
            ],
            [
                152.5,
                90
            ],
            [
                155,
                90
            ],
            [
                157.5,
                90
            ],
            [
                160,
                90
            ],
            [
                162.5,
                90
            ],
            [
                165,
                90
            ],
            [
                167.5,
                90
            ],
            [
                170,
                90
            ],
            [
                172.5,
                90
            ],
            [
                175,
                90
            ],
            [
                177.5,
                90
            ],
            [
                180,
                90
            ],
            [
                180,
                89.999999
            ],
            [
                180,
                9.999999974752427e-7
            ],
            [
                180,
                -89.999999
            ],
            [
                180,
                -90
            ],
            [
                177.5,
                -90
            ],
            [
                175,
                -90
            ],
            [
                172.5,
                -90
            ],
            [
                170,
                -90
            ],
            [
                167.5,
                -90
            ],
            [
                165,
                -90
            ],
            [
                162.5,
                -90
            ],
            [
                160,
                -90
            ],
            [
                157.5,
                -90
            ],
            [
                155,
                -90
            ],
            [
                152.5,
                -90
            ],
            [
                150,
                -90
            ],
            [
                147.5,
                -90
            ],
            [
                145,
                -90
            ],
            [
                142.5,
                -90
            ],
            [
                140,
                -90
            ],
            [
                137.5,
                -90
            ],
            [
                135,
                -90
            ],
            [
                132.5,
                -90
            ],
            [
                130,
                -90
            ],
            [
                127.5,
                -90
            ],
            [
                125,
                -90
            ],
            [
                122.5,
                -90
            ],
            [
                120,
                -90
            ],
            [
                117.5,
                -90
            ],
            [
                115,
                -90
            ],
            [
                112.5,
                -90
            ],
            [
                110,
                -90
            ],
            [
                107.5,
                -90
            ],
            [
                105,
                -90
            ],
            [
                102.5,
                -90
            ],
            [
                100,
                -90
            ],
            [
                97.5,
                -90
            ],
            [
                95,
                -90
            ],
            [
                92.5,
                -90
            ],
            [
                90,
                -90
            ],
            [
                87.5,
                -90
            ],
            [
                85,
                -90
            ],
            [
                82.5,
                -90
            ],
            [
                90,
                -90
            ],
            [
                77.5,
                -90
            ],
            [
                75,
                -90
            ],
            [
                72.5,
                -90
            ],
            [
                70,
                -90
            ],
            [
                67.5,
                -90
            ],
            [
                65,
                -90
            ],
            [
                62.5,
                -90
            ],
            [
                60,
                -90
            ],
            [
                57.5,
                -90
            ],
            [
                55,
                -90
            ],
            [
                52.5,
                -90
            ],
            [
                50,
                -90
            ],
            [
                47.5,
                -90
            ],
            [
                45,
                -90
            ],
            [
                42.5,
                -90
            ],
            [
                40,
                -90
            ],
            [
                37.5,
                -90
            ],
            [
                35,
                -90
            ],
            [
                32.5,
                -90
            ],
            [
                30,
                -90
            ],
            [
                27.5,
                -90
            ],
            [
                25,
                -90
            ],
            [
                22.5,
                -90
            ],
            [
                20,
                -90
            ],
            [
                17.5,
                -90
            ],
            [
                15,
                -90
            ],
            [
                12.5,
                -90
            ],
            [
                10,
                -90
            ],
            [
                7.5,
                -90
            ],
            [
                5,
                -90
            ],
            [
                2.5,
                -90
            ],
            [
                0,
                -90
            ],
            [
                -2.5,
                -90
            ],
            [
                -5,
                -90
            ],
            [
                -7.5,
                -90
            ],
            [
                -10,
                -90
            ],
            [
                -12.5,
                -90
            ],
            [
                -15,
                -90
            ],
            [
                -17.5,
                -90
            ],
            [
                -20,
                -90
            ],
            [
                -22.5,
                -90
            ],
            [
                -25,
                -90
            ],
            [
                -27.5,
                -90
            ],
            [
                -30,
                -90
            ],
            [
                -32.5,
                -90
            ],
            [
                -35,
                -90
            ],
            [
                -37.5,
                -90
            ],
            [
                -40,
                -90
            ],
            [
                -42.5,
                -90
            ],
            [
                -45,
                -90
            ],
            [
                -47.5,
                -90
            ],
            [
                -50,
                -90
            ],
            [
                -52.5,
                -90
            ],
            [
                -55,
                -90
            ],
            [
                -57.5,
                -90
            ],
            [
                -60,
                -90
            ],
            [
                -62.5,
                -90
            ],
            [
                -65,
                -90
            ],
            [
                -67.5,
                -90
            ],
            [
                -70,
                -90
            ],
            [
                -72.5,
                -90
            ],
            [
                -75,
                -90
            ],
            [
                -77.5,
                -90
            ],
            [
                -80,
                -90
            ],
            [
                -82.5,
                -90
            ],
            [
                -85,
                -90
            ],
            [
                -87.5,
                -90
            ],
            [
                -90,
                -90
            ],
            [
                -92.5,
                -90
            ],
            [
                -95,
                -90
            ],
            [
                -97.5,
                -90
            ],
            [
                -100,
                -90
            ],
            [
                -102.5,
                -90
            ],
            [
                -105,
                -90
            ],
            [
                -107.5,
                -90
            ],
            [
                -110,
                -90
            ],
            [
                -112.5,
                -90
            ],
            [
                -115,
                -90
            ],
            [
                -117.5,
                -90
            ],
            [
                -120,
                -90
            ],
            [
                -122.5,
                -90
            ],
            [
                -125,
                -90
            ],
            [
                -127.5,
                -90
            ],
            [
                -130,
                -90
            ],
            [
                -132.5,
                -90
            ],
            [
                -135,
                -90
            ],
            [
                -137.5,
                -90
            ],
            [
                -140,
                -90
            ],
            [
                -142.5,
                -90
            ],
            [
                -145,
                -90
            ],
            [
                -147.5,
                -90
            ],
            [
                -150,
                -90
            ],
            [
                -152.5,
                -90
            ],
            [
                -155,
                -90
            ],
            [
                -157.5,
                -90
            ],
            [
                -160,
                -90
            ],
            [
                -162.5,
                -90
            ],
            [
                -165,
                -90
            ],
            [
                -167.5,
                -90
            ],
            [
                -170,
                -90
            ],
            [
                -172.5,
                -90
            ],
            [
                -175,
                -90
            ],
            [
                -177.5,
                -90
            ],
            [
                -180,
                -90
            ]
        ]
    ]
}

const species = ['Unknown', 'Pilot', 'Bottlenose', 'Killer', 'Blue', 'Fin', 'Sperm', 'Humpback', 'Sei', 'Common Minke',
                "Bryde''s", 'Right', 'Gray', "Baird''s Beaked", 'Baleen', 'Pygmy Blue', 'Pygmy Right', "Cuvier''s Beaked",
                'Bowhead', 'Beaked (unspecified)', 'Antarctic Minke', "Sei/Bryde''s", "Dolphin"];

const dataTimeRangeBegin = 1850;
const dataTimeRangeEnd = 2020;

var svgMap = d3.select(".kyrix-panel")
                // .attr("width", initViewportWidth)
                // .attr("height", initViewportHeight)
                .append("svg")
                .attr("id", "map")
                // .attr("width", "100%")
                // .attr("height", "100%")
                .attr("viewBox", [0, 0, initViewportWidth, initViewportHeight])
                .append("g");

function zoomed(event) {
    svgMap.attr("transform", event.transform);
}

var zoom = d3.zoom()
            .extent([[0,0], [initViewportWidth, initViewportHeight]])
            .scaleExtent([1,8]) // how deep to zoom-in (8) and how far to zoom-out (1)
            .translateExtent([[0,0], [initViewportWidth, initViewportHeight]])  // how far to pan top and left [0,0], and bottom and right [initViewportWidth, initViewportHeight]
            .on("zoom", zoomed);

svgMap.call(zoom);

var projection = d3.geoNaturalEarth1()
                .scale(280)
                .translate([initViewportWidth/2, initViewportHeight/2]);
                // .rotate([-11,0,0]);   // shift part of Russia from west of the map to the east

var path = d3.geoPath().projection(projection);

// Append Div for tooltip to BODY and not to SVG!!!
var tt = d3.select("body").append("div")   
                .attr("class", "tooltip")           
                .style("opacity", 0);

// get radio choices
var lod = d3.select('input[name="lod"]:checked').node().value;
d3.selectAll(".lod")
    .on("change", function() {
        lod = d3.select('input[name="lod"]:checked').node().value;
        fetchAndRenderData();
});

var encoding = d3.select('input[name="encoding"]:checked').node().value;;
d3.selectAll(".encoding")
    .on("change", function() {
        encoding = d3.select('input[name="encoding"]:checked').node().value;
        fetchAndRenderData();
});

// setup species selection list
d3.select("#species")
    .selectAll("option")
    .data(species)
    .enter()
    .append("option")
    .attr("value", (d) => {return d})
    .text((d) => {return d});

var species_select = d3.select('#species').property('value');
d3.select("#species")
    .on("change", function() {
        species_select = d3.select('#species').property("value");
        fetchAndRenderData();
});

// setup time range slider
var rangeBegin = dataTimeRangeBegin;
var rangeEnd = dataTimeRangeEnd;
var slider = createD3RangeSlider(rangeBegin, rangeEnd, ".slider-control");
slider.range(rangeBegin, rangeEnd);
d3.select("#slider-text").text(rangeBegin + " - " + rangeEnd);

slider.onChange(function(newRange) {
    d3.select("#slider-text").text(newRange.begin + " - " + newRange.end);
});

slider.onTouchEnd(function(newRange) {
    if (newRange.begin != rangeBegin || newRange.end != rangeEnd) {
        rangeBegin = newRange.begin;
        rangeEnd = newRange.end;

        // call fetchAndRenderData() only when the slider movement has stopped i.e. onTouchEnd
        fetchAndRenderData();
    }
});

function reset() {
    // reset viewport
    svgMap.transition()
            .duration(500)
            .call(zoom.transform, d3.zoomIdentity);

    // reset time slider to span the entire duration
    rangeBegin = dataTimeRangeBegin;
    rangeEnd = dataTimeRangeEnd;
    slider.range(rangeBegin, rangeEnd);
}

var size_range = [4,900];

function setupSvgMap() {
    // setup map visualization
    d3.json("./countries-110m.json")
    .then(function(world_map) {

        svgMap.append("g")
            .attr("class", "earth-borders")
            .selectAll("path")
            .data([earth_border])
            .enter()
            .append("path")
            .attr("d", path)
            .attr("stroke", "black")
            .attr("stroke-witdth", 0.5)
            .style("fill", "#d6ffff");

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
            .on("mouseover", function(event, d) {
                d3.select(this)
                .transition().duration(200)
                .style("fill", "rgba(107, 194, 81, 0.5)");
                
                tt.html(d.properties.name)
                .style("left", event.clientX + 15 + "px")     
                .style("top", event.clientY + 15 + "px");

                tt.transition()        
                .duration(200)      
                .style("opacity", 1)
                .style("width", "120px")
                .style("height", "60px");
            
            })
            .on("mousemove", function(event, d) {   
                tt.html(d.properties.name)
                .style("left", event.clientX + 15 + "px")     
                .style("top", event.clientY + 15 + "px"); 
            })
            .on("mouseout", function() {
                d3.select(this)
                .transition().duration(200)
                .style("fill", "white");
                
                tt.transition()        
                .duration(200)      
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

    fetchAndRenderData();
}

function changeTooltipContentAndPosition(event, d) {
    var yrs = Math.floor(d.time_spent/365);
    var mns = Math.floor((d.time_spent % 365)/30);
    var days = (d.time_spent % 365) % 30;

    tt.html(function() {
        switch (lod) {
            case "ocean":
                switch (encoding) {
                    case "whale-count":
                        return d.ocean + "<br />" + "Number of whales: " + d3.format(",")(Number(d.count)) + "<br />" + "Time spent: " + yrs + "Y " + mns + "M " + days + "D";
                    case "time-normalized-whale-count":
                        return d.ocean + "<br />" + "Whales per day: " + d3.format(",.2f")(Number(d.count)/Number(d.time_spent));
                }
            case "area":
                switch (encoding) {
                    case "whale-count":
                        return d.area + "<br />" + "Number of whales: " + d3.format(",")(Number(d.count)) + "<br />" + "Time spent: " + yrs + "Y " + mns + "M " + days + "D";
                    case "time-normalized-whale-count":
                        return d.area + "<br />" + "Whales per day: " + d3.format(",.2f")(Number(d.count)/Number(d.time_spent));
                }
            case "grid":
            case "raw":
            case "heatmap":
                switch (encoding) {
                    case "whale-count":
                        return "(lon, lat): (" + d.lon + "," + d.lat + ")<br />" + "Number of whales: " + d3.format(",")(Number(d.count)) + "<br />" + "Time spent: " + yrs + "Y " + mns + "M " + days + "D";
                    case "time-normalized-whale-count":
                        return "(lon, lat): (" + d.lon + "," + d.lat + ")<br />" + "Whales per day: " + d3.format(",.2f")(Number(d.count)/Number(d.time_spent));
                }
        }
    })
    .style("left", event.clientX + 15 + "px")     
    .style("top", event.clientY + 15 + "px"); 
}

function clearOldElements() {
    d3.select("g.ocean-data").remove();
    d3.select("g.area-data").remove();
    d3.select("g.grid-data").remove();
    d3.select("g.raw-data").remove();
    d3.select("g.heatmap-data").remove();
    d3.select("div.color-legend").remove();
    d3.select("div.size-legend").remove();
}

function addColorLegend(color_scale, significant_digits) {
    var color_legend_canvas = d3.select(".kyrix-panel")
                                .append("div")
                                .attr("class", "color-legend")
                                .style("position", "relative")
                                .style("width", "100%")
                                .style("height", "100%")
                                .append("canvas")
                                .style("width", "100%")
                                .style("height", "100%");

    var ctx = color_legend_canvas.node().getContext('2d');
    color_legend_canvas.node().width = color_legend_canvas.node().offsetWidth;
    color_legend_canvas.node().height = color_legend_canvas.node().offsetHeight;
    var canvas_width = color_legend_canvas.node().width;
    var canvas_height = color_legend_canvas.node().height;

    color_legend_canvas.style.imageRendering = "-moz-crisp-edges";
    color_legend_canvas.style.imageRendering = "pixelated";
    var ramp_height = Math.round(canvas_height * 0.8);
    for (let i = Math.round(canvas_height * 0.1); i < Math.round(canvas_height * 0.9); ++i) {
        ctx.fillStyle = d3.interpolateYlOrRd((ramp_height-i) / (ramp_height - 1));
        ctx.fillRect(Math.round(canvas_width * 0.1), i, Math.round(canvas_width * 0.3), 1);
    }

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(Math.round(canvas_width * 0.42), Math.round(canvas_height * 0.1));
    ctx.lineTo(Math.round(canvas_width * 0.42), Math.round(canvas_height * 0.9));
    ctx.stroke();

    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.lineWidth = 1;
    var numTicks = 9;
    var domain = color_scale.domain();

    for (let i=0; i<=numTicks; i++) {
        ctx.moveTo(Math.round(canvas_width * 0.42), Math.round(canvas_height * 0.1) + i/numTicks * ramp_height);
        ctx.lineTo(Math.round(canvas_width * 0.45), Math.round(canvas_height * 0.1) + i/numTicks * ramp_height);

        var label = d3.format(",.0f")(i * (domain[1] - domain[0])/numTicks + domain[0]);
        if (significant_digits > 0)
            label = d3.format(",." + (significant_digits+1) + "f")(i * (domain[1] - domain[0])/numTicks + domain[0]);
        ctx.fillText(label, Math.round(canvas_width * 0.5), Math.round(canvas_height * 0.1) + (numTicks - i)/numTicks * ramp_height, Math.round(canvas_width * 0.5));
        ctx.stroke();
    }
}

function addSizeLegend(size_scale, significant_digits) {
    // size legend
    var size_legend_canvas = d3.select(".kyrix-panel")
                                .append("div")
                                .attr("class", "size-legend")
                                .style("position", "relative")
                                .style("width", "100%")
                                .style("height", "100%")
                                .append("canvas")
                                .style("width", "100%")
                                .style("height", "100%");

    var ctx = size_legend_canvas.node().getContext('2d');
    size_legend_canvas.node().width = size_legend_canvas.node().offsetWidth;
    size_legend_canvas.node().height = size_legend_canvas.node().offsetHeight;
    var canvas_width = size_legend_canvas.node().width;
    var canvas_height = size_legend_canvas.node().height;

    ctx.lineWidth = 1;
    var domain = size_scale.domain();
    var numTicks = 9;
    var ramp_height = Math.round(canvas_height * 0.8);

    for (let i=0; i<=numTicks; i++) {
        ctx.beginPath();
        ctx.arc(Math.round(canvas_width * 0.3), Math.round(canvas_height * 0.1) + (numTicks - i)/numTicks * ramp_height, Math.sqrt(size_scale(domain[0] + i * (domain[1] - domain[0])/numTicks)), 0, 2 * Math.PI);
        ctx.stroke();
    }

    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";

    for (let i=0; i<=numTicks; i++) {
        var label = d3.format(",.0f")(i * (domain[1] - domain[0])/numTicks + domain[0]);
        if (significant_digits > 0)
            label = d3.format(",." + (significant_digits+1) + "f")(i * (domain[1] - domain[0])/numTicks + domain[0]);
        ctx.fillText(label, Math.round(canvas_width) * 0.6, Math.round(canvas_height) * 0.1 + (numTicks - i)/numTicks * ramp_height, Math.round(canvas_width * 0.5));
        ctx.stroke();
    }
}

function fetchAndRenderData() {
    d3.json("/data", {
        method: "POST",
        body: JSON.stringify({
            lod: lod,
            encoding: encoding,
            species: species_select,
            begin: rangeBegin,
            end: rangeEnd
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(data) {
        renderData(data);
    });
}

function renderData(data=null) {
    clearOldElements();

    var size_scale, color_scale;

    if (lod === "heatmap") {
        const width = d3.select(".kyrix-panel").node().getBoundingClientRect().width;
        const height = d3.select(".kyrix-panel").node().getBoundingClientRect().height;
        const densityData = d3.contourDensity()
                                .x(function(d) {
                                    return projection([Number(d.lon), Number(d.lat)])[0];
                                })
                                .y(function(d) {
                                    return projection([Number(d.lon), Number(d.lat)])[1];
                                })
                                .size([width, height])
                                .bandwidth(10)
                                (data)

        // color_scale = d3.scaleSequential(d3.interpolateYlOrRd)
        //                 .domain(d3.extent(densityData, function(d) {
        //                     return d.value;
        //                 }));

        color_scale = d3.scaleSequential(d3.interpolate(d3.color("rgba(255, 255, 0, 0.3)"), d3.color("rgba(255, 0, 0, 0.3)")))
                        .domain(d3.extent(densityData, function(d) {
                            return d.value;
                        }));

        svgMap.append("g")
                .attr("class", "heatmap-data")
                .insert("g", "g")
                .selectAll("path")
                .data(densityData)
                .enter()
                .append("path")
                .attr("d", d3.geoPath())
                .attr("fill", function(d) {
                    return color_scale(d.value); 
                });
        
        if (color_scale.domain()[1] < 1)
            significant_digits = Math.ceil(-Math.log10(color_scale.domain()[1]));
        else
            significant_digits = 0;

        addColorLegend(color_scale, significant_digits);
    }
    else {
        size_scale = d3.scaleLinear()
                        .domain([0, d3.max(data, function(d) {
                            switch (encoding) {
                                case "whale-count": return Number(d.count);
                                case "time-normalized-whale-count": return Number(d.count)/Number(d.time_spent);
                            }
                        })])
                        .range(size_range);
    
        color_scale = d3.scaleSequential(d3.interpolate(d3.color("rgba(255, 255, 0, 0.8)"), d3.color("rgba(255, 0, 0, 0.8)")))
                        .domain(d3.extent(data, function(d) {
                            switch (encoding) {
                                case "whale-count": return Number(d.count);
                                case "time-normalized-whale-count": return Number(d.count)/Number(d.time_spent);
                            }
                        }));

        svgMap.append("g")
                .attr("class", function() {
                    switch (lod) {
                        case "ocean":    return "ocean-data";
                        case "area":    return "area-data";
                        case "grid":    return "grid-data";
                        case "raw":    return "raw-data";
                    }
                })
                .selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function(d) {
                    return projection([Number(d.lon), Number(d.lat)])[0];
                })
                .attr("cy", function(d) {
                    return projection([Number(d.lon), Number(d.lat)])[1];
                })
                .attr("r", function(d) {
                    switch (encoding) {
                        case "whale-count": return Math.sqrt(size_scale(Number(d.count)));
                        case "time-normalized-whale-count": return Math.sqrt(size_scale(Number(d.count)/Number(d.time_spent)));
                    }
                })
                .style("fill", function(d) {
                    switch (encoding) {
                        case "whale-count":    return color_scale(Number(d.count));
                        case "time-normalized-whale-count": return color_scale(Number(d.count)/Number(d.time_spent));
                    }
                })
                // .style("opacity", 0.8)
                .style("stroke-width", 1)
                .style("stroke", "black")
                .on("mouseover", function(event, d) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .style("stroke-width", 4);

                    changeTooltipContentAndPosition(event, d);

                    tt.transition()
                        .duration(200)
                        .style("opacity", 1)
                        .style("width", "200px")
                        .style("height", "100px");
                })
                .on("mousemove", function(event, d) {
                    changeTooltipContentAndPosition(event, d);
                })
                .on("mouseout", function(event, d) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .style("stroke-width", 1);

                    tt.transition()
                        .duration(200)
                        .style("opacity", 0);
                });

        if (size_scale.domain()[1] < 1)
            significant_digits = Math.ceil(-Math.log10(size_scale.domain()[1]));
        else
            significant_digits = 0
        addSizeLegend(size_scale, significant_digits);

        if (color_scale.domain()[1] < 1)
            significant_digits = Math.ceil(-Math.log10(color_scale.domain()[1]));
        else
            significant_digits = 0;
            
        addColorLegend(color_scale, significant_digits);
    }
}

setupSvgMap();