HTMLWidgets.widget({

    name: "treemapNetwork",
    type: "output",

    initialize: function(el, width, height) {

	// var diameter = Math.min(parseInt(width),parseInt(height));
	var div = d3.select(el).append("div")
		.attr("width", width + "px")
		.attr("height", height + "px")
		.append("g");
	        // .attr("position", "absolute");
	div.append("svg")
	    .attr("width", width)
	    .attr("height", height);

	return d3.layout.treemap();

    },

    resize: function(el, width, height, treemap) {
	var s = d3.select(el).selectAll("div");
	s.attr("width", width + "px").attr("height", height + "px");
	// s.attr("position", "relative");
	treemap.size([width, height])
            .value(function(d) {return d.size});

	var div = d3.select(el).selectAll("div").select("g");
	// div.attr("position", "relative");

    },

    renderValue: function(el, x, treemap) {
	// x is a list with two elements, options and root; root must already be a
	// JSON array with the d3Tree root data

	var s = d3.select(el).selectAll("div");
	s.style("position", "relative");

	// var width = 960,
	//     height = 500;
	// // var diameter = Math.min(parseInt(s.attr("width")),parseInt(s.attr("height")));
	// // s.attr("margin", x.options.margin);
	treemap.size([parseInt(s.attr("width")), parseInt(s.attr("height"))]) // 360, diameter/2 - parseInt(s.attr("margin"))])
            // .sort(null)
            .value(function(d) {return d.size});

	// select the svg group element and remove existing children
	s.attr("pointer-events", "all").selectAll("*").remove();
	s.append("g");
	    // .attr("position", "relative");
	    // .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")"
            //       + " scale("+diameter/800+","+diameter/800+")");

	var div = d3.select(el).selectAll("g");
	// div.attr("position", "relative");


	var classes = JSON.parse(x.classes);
	var nodes = treemap.nodes(packageHierarchy(classes)),
            links = packageImports(nodes);

	var bundle = d3.layout.bundle();

	var fill = d3.scale.ordinal()
	    .range(["#f0f0f0", "#d9d9d9", "#bdbdbd"]);

	var stroke = d3.scale.linear()
	    .domain([0, 1e4])
	    .range(["brown", "steelblue"]);

	var line = d3.svg.line()
	    .interpolate("bundle")
	    .tension(.85)
	    .x(function(d) { return d.x + d.dx / 2; })
	    .y(function(d) { return d.y + d.dy / 2; });

	var cell = div.selectAll(".cell")
	    .data(nodes)
	    .enter().append("div")
	    .attr("class", "cell")
	    .style("background-color", function(d) { return d.children ? fill(d.key) : null; })
	//   border: solid 1px white;
	//   font: 10px sans-serif;
	//   line-height: 12px;
	//   overflow: hidden;
	//   position: absolute;
	//   text-indent: 2px;
	    .style("border-style", "solid")
	    .style("border-width", "1px")
	    .style("border-color", "white")
	    .style("font-size", "10px")
	    .style("font-family", "sans-serif")
	    .style("line-height", "12px")
	    .style("overflow", "hidden")
	    .style("position", "absolute") // necessary!!
	    .style("text-indent", "2px")
	//
	    .call(cell)
	    .text(function(d) { return d.children ? null : d.key; });

	// div.append("svg")
	//     .attr("width", width)
	//     .attr("height", height)
	div.append("svg")
	    .attr("width", parseInt(s.attr("width")))
	    .attr("height", parseInt(s.attr("height")))
	    .style("position", "absolute")
	    .selectAll(".link")
	    .data(bundle(links))
	    .enter().append("path")
	    .attr("class", "link")
	    .attr("d", line)
	//   stroke: #000;
	//   stroke-opacity: .5;
	//   fill: none;
	    .style("stroke-color", "#000")
	    .style("stroke-opacity", ".5")
	    .style("fill", "none")
	//
	    .style("stroke", function(d) { return stroke(d[0].value); })
	;

	function cell() {
	    this.style("left", function(d) { return d.x + "px"; })
		.style("top", function(d) { return d.y + "px"; })
		.style("width", function(d) { return d.dx - 1 + "px"; })
		.style("height", function(d) { return d.dy - 1 + "px"; });
	}

	// Lazily construct the package hierarchy from class names.
	function packageHierarchy(classes) {
	    var map = {};

	    function find(name, data) {
		var node = map[name], i;
		if (!node) {
		    node = map[name] = data || {name: name, children: []};
		    if (name.length) {
			node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
			node.parent.children.push(node);
			node.key = name.substring(i + 1);
		    }
		}
		return node;
	    }

	    classes.forEach(function(d) {
		find(d.name, d);
	    });

	    return map[""];
	}

	// // Return a list of imports for the given array of nodes.
	// function packageImports(nodes) {
	//     var map = {},
	//         imports = [];

	//     // Compute a map from name to node.
	//     nodes.forEach(function(d) {
	// 	map[d.name] = d;
	//     });

	//     // For each import, construct a link from the source to target node.
	//     nodes.forEach(function(d) {
	// 	if (d.imports) d.imports.forEach(function(i) {
	// 	    imports.push({source: map[d.name], target: map[i]});
	// 	});
	//     });

	//     return imports;
	// }

	// Return a list of imports for the given array of nodes.
	function packageImports(nodes) {
	    var map = {},
	        imports = [];

	    // Compute a map from name to node.
	    nodes.forEach(function(d) {
		map[d.name] = d;
	    });

	    // For each import, construct a link from the source to target node.
	    nodes.forEach(function(d) {
		if (d.imports) {
		    // if (d.imports.constructor===Array) {
			d.imports.forEach(function(i) {
			    imports.push({source: map[d.name], target: map[i]});
			});
		    // } else {
		    // 	[d.imports].forEach(function(i) {
		    // 	    imports.push({source: map[d.name], target: map[i]});
		    // 	});
		    // }
		}
	    });

	    return imports;
	}


    },
});


