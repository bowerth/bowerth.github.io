---
layout   : post_networkD3
category : datascience
tagline  : 
tags     : [R, d3.js]
---
{% include JB/setup %}

{% include rmarkdown_fragment/createNetwork.html %}

## Links

- [hafen.github.io: htmlwidgetsgallery](http://hafen.github.io/htmlwidgetsgallery/)
- [github: haven: htmlwidgets gallery](https://github.com/hafen/htmlwidgetsgallery)

### Highcharts

- [jkunst.com: highcharter](http://jkunst.com/highcharter/)

### Plotly

 - [Plotly Book: Designing an htmlwidget interface](https://cpsievert.github.io/plotly_book/designing-an-htmlwidget-interface.html)

JavaScript graphing libraries usually have strong requirements about the JSON structure used to create a plot. In some cases, the R interface needs to know about these requirements in order to faithfully translate R objects to JSON. For example, in plotly.js some attributes must always be an array (e.g. x/y), even if they are length 1, while other attributes cannot be an array must be a literal constant (e.g. name). This leads to a situation where the translation rules from R to JSON cannot be simply "box all vectors of length 1 into an array (or not)":
