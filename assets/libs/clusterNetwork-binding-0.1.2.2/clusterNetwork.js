HTMLWidgets.widget({

    name: "clusterNetwork",
    type: "output",

    initialize: function(el, width, height) {

	var diameter = Math.min(parseInt(width),parseInt(height));
	d3.select(el).append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .append("g")
	    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")"
                  + " scale("+diameter/800+","+diameter/800+")");
	return d3.layout.cluster();

    },

    resize: function(el, width, height, cluster) {
	var diameter = Math.min(parseInt(width),parseInt(height));
	var s = d3.select(el).selectAll("svg");
	s.attr("width", width).attr("height", height);
	cluster.size([360, diameter/2 - parseInt(s.attr("margin"))]);
	var svg = d3.select(el).selectAll("svg").select("g");
	svg.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")"
                 + " scale("+diameter/800+","+diameter/800+")");

    },

    renderValue: function(el, x, cluster) {
	// x is a list with two elements, options and root; root must already be a
	// JSON array with the d3Tree root data

	var s = d3.select(el).selectAll("svg");
	var diameter = Math.min(parseInt(s.attr("width")),parseInt(s.attr("height")));
	s.attr("margin", x.options.margin);
	cluster.size([360, diameter/2 - parseInt(s.attr("margin"))])
            .sort(null)
            .value(function(d) {return d.size});

	// select the svg group element and remove existing children
	s.attr("pointer-events", "all").selectAll("*").remove();
	s.append("g")
	    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")"
                  + " scale("+diameter/800+","+diameter/800+")");

	var svg = d3.select(el).selectAll("g");

	var classes = JSON.parse(x.classes);
	var nodes = cluster.nodes(packageHierarchy(classes)),
            links = packageImports(nodes);

	var bundle = d3.layout.bundle();

	var line = d3.svg.line.radial()
		.interpolate("bundle")
		.tension(.85)
		.radius(function(d) { return d.y; })
		.angle(function(d) { return d.x / 180 * Math.PI; });

	// draw links
	var link = link = svg.append("g").selectAll(".link");
	link = link
	    .data(bundle(links))
	    .enter().append("path")
	    .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
	    .attr("class", "link")
	    .attr("d", line);

	// draw nodes
	var node = svg.selectAll(".node");
	node = node
	    .data(nodes.filter(function(n) { return !n.children; }))
	    .enter().append("text")
	    .attr("class", "node")
	    .attr("dy", ".31em")
	    .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
	    .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
	    .text(function(d) { return d.key; })
	    .on("mouseover", mouseovered)
	    .on("mouseout", mouseouted);

	function mouseovered(d) {
	    node
		.each(function(n) { n.target = n.source = false; });

	    link
		.classed("link--target", function(l) { if (l.target === d) return l.source.source = true; })
		.classed("link--source", function(l) { if (l.source === d) return l.target.target = true; })
		.filter(function(l) { return l.target === d || l.source === d; })
		.each(function() { this.parentNode.appendChild(this); });

	    node
		.classed("node--target", function(n) { return n.target; })
		.classed("node--source", function(n) { return n.source; });
	}

	function mouseouted(d) {
	    link
		.classed("link--target", false)
		.classed("link--source", false);

	    node
		.classed("node--target", false)
		.classed("node--source", false);
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


