HTMLWidgets.widget({

    name: "chordNetwork",
    type: "output",

    initialize: function(el, width, height) {

	var diameter = Math.min(parseInt(width),parseInt(height));
	d3.select(el).append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .append("g")
	    .attr("id", "circle")
	    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")"
                  + " scale("+diameter/800+","+diameter/800+")");
	return d3.layout.chord();

    },

    resize: function(el, width, height, layout) {
	var diameter = Math.min(parseInt(width),parseInt(height));
	var s = d3.select(el).selectAll("svg");
	s.attr("width", width).attr("height", height);

	layout.size([360, diameter / 2 - parseInt(s.attr("margin"))]); // check again

	var svg = d3.select(el).selectAll("svg").select("g");
	svg.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")"
                 + " scale(" + diameter / 800 + "," + diameter / 800 + ")");

    },

    renderValue: function(el, x, layout) {
	// x is a list with two elements, options and root; root must already be a
	// JSON array with the d3Tree root data

	var s = d3.select(el).selectAll("svg");
	var diameter = Math.min(parseInt(s.attr("width")),parseInt(s.attr("height"))),
	    outerRadius = diameter / 2 - 10, // replace with "margin"
	    innerRadius = outerRadius - 24;

	s.attr("margin", x.options.margin);
	layout.padding(.04) // parseInt(s.attr("margin"))
	    .sortSubgroups(d3.descending)
	    .sortChords(d3.ascending);

	// select the svg group element and remove existing children
	s.attr("pointer-events", "all").selectAll("*").remove();
	s.append("g")
	    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")"
                  + " scale(" + diameter / 800 + "," + diameter / 800 + ")");

	var svg = d3.select(el).selectAll("g");

	// load data
	var matrix = JSON.parse(x.matrix); // matrix
	var table = d3.csv.parse(x.table);

	// Compute the chord layout.
	layout.matrix(matrix);

	// other definitions
	var formatPercent = d3.format(".1%");

	var arc = d3.svg.arc()
		.innerRadius(innerRadius)
		.outerRadius(outerRadius);

	var path = d3.svg.chord()
		.radius(innerRadius);

	// Add a group per neighborhood.
	var group = svg.selectAll(".group")
		.data(layout.groups)
		.enter().append("g")
		.attr("class", "group")
		.on("mouseover", mouseover);

	// Add a mouseover title.
	group.append("title").text(function(d, i) {
	    return table[i].name + ": " + formatPercent(d.value) + " of origins";
	});

	// Add the group arc.
	var groupPath = group.append("path")
		.attr("id", function(d, i) { return "group" + i; })
		.attr("d", arc)
		.style("fill", function(d, i) { return table[i].color; });

	// Add a text label.
	var groupText = group.append("text")
		.attr("x", 6)
		.attr("dy", 15);

	groupText.append("textPath")
	    .attr("xlink:href", function(d, i) { return "#group" + i; })
	    .text(function(d, i) { return table[i].name; });

	// Remove the labels that don't fit. :(
	groupText.filter(function(d, i) { return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength(); })
	    .remove();

	// Add the chords.
	var chord = svg.selectAll(".chord")
		.data(layout.chords)
		.enter().append("path")
		.attr("class", "chord")
		.style("fill", function(d) { return table[d.source.index].color; })
		.attr("d", path);

	// Add an elaborate mouseover title for each chord.
	chord.append("title").text(function(d) {
	    return table[d.source.index].name
		+ " -> " + table[d.target.index].name
		+ ": " + formatPercent(d.source.value)
		+ "\n" + table[d.target.index].name
		+ " -> " + table[d.source.index].name
		+ ": " + formatPercent(d.target.value);
	});

	function mouseover(d, i) {
	    chord.classed("fade", function(p) {
		return p.source.index != i
		    && p.target.index != i;
	    });
	}

    },
});


