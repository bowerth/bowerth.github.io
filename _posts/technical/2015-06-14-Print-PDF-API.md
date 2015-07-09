---
layout   : post
category : technical
tagline  :
tags     : ruby
---
{% include JB/setup %}

PDFKit homepage
:   [pdfkit.org](http://pdfkit.org/)

usage example
:   `require 'pdfkit'`  
    `kit = PDFKit.new('http://localhost:4000/professional/2015/05/18/Curriculum')`
    `file = kit.to_file('/home/z930/Dropbox/Latex_Files/Application/University/Hochschule_Aalen/pdfkit/Curriculum.pdf')`
