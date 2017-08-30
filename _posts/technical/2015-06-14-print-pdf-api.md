---
layout   : post
category : technical
tagline  :
tags     : ruby
---
{% include JB/setup %}


## Mozilla Gecko

- [developer.mozilla.org: Gecko](https://developer.mozilla.org/en-US/docs/Mozilla/Gecko)


## PDFKit

- [pdfkit.org](http://pdfkit.org/)

### Usage

~~~ruby
require 'pdfkit'
kit = PDFKit.new('http://localhost:4000/professional/2015/05/18/Curriculum')
file = kit.to_file('/home/z930/Dropbox/Latex_Files/Application/University/Hochschule_Aalen/pdfkit/Curriculum.pdf')
~~~
