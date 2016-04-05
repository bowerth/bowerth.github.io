---
layout   : post
category : datascience
tagline  : 
tags     : 
---
{% include JB/setup %}

## Telephone D. Gohel 2016-03-25

- C++ driver close to powerpoint 
- send into xml worksheet
- entry into java api of reporters
- fork, cran
- ggplot color numerical gradient cannot be vector -> ggtools, svg light -> png -> xml, ide update all the document, writexl, xlconnect
- github.com/davidgohel/rvg: `src`, `test`, `R`
- xml unfold
- reporters low-level architecture

## Problem

link DrawingML to data in a spreadsheet

### [DrawingML: Overview](http://officeopenxml.com/drwOverview.php)

explains differences across document types

main drawingML namespace
:   `xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"`

`<a:graphic>` element
:   DrawingML objects such as charts and diagrams in any document type are all placed within a `<a:graphic>` element

`<a:graphicData>`
:   defines object types such as charts, diagrams, locked canvas, table, ole, etc.; usually undefined; *uri* attribute which is used to specify the type of data and/or "server" that can process the contents of the element

Spreadsheet > Charts
:   A chart is placed within a worksheet by a <drawing> element, which merely references a separate drawing1.xml (or drawing2.xml, etc.) part. Placement or anchoring of the chart is specified with the desired anchor (e.g., <xdr:twoCellAnchor> element) within the drawing part using the xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/speadsheetDrawing" namespace.  
    The drawing part in turn contains the typical <a:graphicData> element noted above, which contains a <c:chart> element. That element references a separate part chart1.xml (or chart2.xml, etc) which defines the chart.  
    The namespace (and uri attribute value of <a:graphicData>) for the chart specification is xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart".

## Approach

- create simple xlsx file containing line chart created from two numbers
- write file contents to folder
- modify files
- put files back into new zip archive with xlsx file extension

![chart object](/assets/graphics/reporters-excel-drawingml-spreadsheet.svg)

### chart objects

- `xl/chart/chart1.xml`
  - `[Content_Types].xml`: `<Override PartName="/xl/charts/chart1.xml" ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>`
    - `xl/drawings/_rels/drawing1.xml.rels`: `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart" Target="../charts/chart1.xml"/>`

- `xl/drawing/drawing1.xml`
  - `[Content_Types].xml`: `<Override PartName="/xl/drawings/drawing1.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/>`
    - `xl/worksheets/_rels/sheet1.xml.rels`: `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/drawing1.xml"/>`

- `rId1`
  - `xl/drawings/drawing1.xml`: `<c:chart xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:id="rId2"/>`

### modifications after adding second chart using calc

- new line for chart2 in `[Content_Types].xml` and `xl/drawings/_rels/drawing1.xml.rels`
- updated dimension of `xl/worksheets/sheet1.xml`: `<dimension ref="A1:B23"/>`

### adding a third chart without using calc

- data range: `$A$43:$B$44`
  - update dimension of `xl/worksheets/sheet1.xml`: `<dimension ref="A1:B44"/>` and add to `<sheetData>...</sheetData>`

```xml
  <sheetData>
    [...]
    <row r="43" customFormat="false" ht="12.8" hidden="false" customHeight="false" outlineLevel="0" collapsed="false">
      <c r="A43" s="0" t="n">
        <v>2.5</v>
      </c>
      <c r="B43" s="0" t="n">
        <v>3</v>
      </c>
    </row>
    <row r="44" customFormat="false" ht="12.8" hidden="false" customHeight="false" outlineLevel="0" collapsed="false">
      <c r="A44" s="0" t="n">
        <v>2.9</v>
      </c>
      <c r="B44" s="0" t="n">
        <v>2.2</v>
      </c>
    </row>
  </sheetData>
```

- add to drawing1.xml: `rId2`
  - 

```xml

<xdr:wsDr ...>
  <xdr:twoCellAnchor editAs="oneCell">
    <xdr:from>
      <xdr:col>2</xdr:col>
      <xdr:colOff>36360</xdr:colOff>
      <xdr:row>21</xdr:row>
      <xdr:rowOff>36000</xdr:rowOff>
    </xdr:from>
    <xdr:to>
      <xdr:col>11</xdr:col>
      <xdr:colOff>395280</xdr:colOff>
      <xdr:row>41</xdr:row>
      <xdr:rowOff>24480</xdr:rowOff>
    </xdr:to>
    <xdr:graphicFrame>
      <xdr:nvGraphicFramePr>
        <xdr:cNvPr id="1" name=""/>
        <xdr:cNvGraphicFramePr/>
      </xdr:nvGraphicFramePr>
      <xdr:xfrm>
        <a:off x="1236240" y="3449520"/>
        <a:ext cx="5759640" cy="3239640"/>
      </xdr:xfrm>
      <a:graphic>
        <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/chart">
          <c:chart xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:id="rId2"/>
        </a:graphicData>
      </a:graphic>
    </xdr:graphicFrame>
    <xdr:clientData/>
  </xdr:twoCellAnchor>
</xdr:wsDr>
```


- `<a:off ...>`: Bounding Box Location and Size: http://officeopenxml.com/drwSp-size.php

### display file using dropbox website

- [102015091P1G001.XLS](https://www.dropbox.com/home/oecd/eco/CS3-SWE/statlink?preview=102015091P1G001.XLS)
- [linechart.xlsx](https://www.dropbox.com/home/programming/r/packages/Rcpp?preview=linechart.xlsx)

### alternative display

- https://onedrive.live.com Excel Online
- Microsoft Excel for Android
- use Gnumeric for interactive navigation through chart layers

# Microsoft

- [Reading Excel Files from Linux](https://blogs.office.com/2008/08/15/reading-excel-files-from-linux/)

# R

## ReporteRs

functions in `R` folder

- `addPlot.R`
- `01_tools.R`: `checkHasSlide()`
- `java_description.R`: `class.DrawingML`
- `parProperties.R`: `.jParProperties()`
- `format.properties.R`: `borderNone()`
- `borderProperties.R`
- `is.color.R`
- `colorProperties.R`
- `writeDoc.R`

docx
:   `docx()`, `addPlot()`, `writeDoc()`

pptx
:   `pptx()`, `addSlide()`, `addPlot()`, `writeDoc()`  
    using `R/addSlide.R` and `R/pptx.graphic.R`

xlsx
:   ?

## rvg

`R/dml_doxc.R`
:   `write_docx(file = "my_plot.docx", code = print( gg ))` does not show graphic in output (tested with LibreOffice writer, Google Drive, Android MS Office compatibility mode)

`R/dml_pptx.R`
:   `write_pptx()`

xlsx
:   ?

### C++ functions

docx
:   `sourceCpp(file = file.path(dbpath, "GitHub", "rvg", "src", "docx.cpp"))`

pptx
:   `sourceCpp(file = file.path(dbpath, "GitHub", "rvg", "src", "pptx.cpp"))`

### differences pptx.cpp, docx.cpp

#### pptx.cpp

- offx, offy
- obj.p_tag().c_str()
- fputs("<a:t>", pptx_obj->file );
- fputs("<p:txBody>", pptx_obj->file );
- fprintf(pptx_obj->file, "%s", body_pr::a_tag().c_str() );
- fprintf( pptx_obj->file, "%s", main_tree::a_closing_tag().c_str() );
- int i; for(i = 0 ; i < x.size() ; i++ ){ x[i] += pptx_obj->offx; y[i] += pptx_obj->offy; }
- fputs("<p:sp>", pptx_obj->file);
- for(i = 0 ; i < y__.size() ; i++ ){ x__[i] += pptx_obj->offx; y__[i] += pptx_obj->offy; }
- Rcpp::NumericVector x_(4);
- y_[1] = y0;
- x_[2] = x1; y_[2] = y1; x_[3] = x0; y_[3] = y1;
- xfrm xfrm_(pptx_obj->offx + x -r, pptx_obj->offy + y - r, r * 2, r * 2 , 0.0 );
- if( fs*100 < 1.0 ) return;
- double offx, double offy, int pointsize,
- editable, offx*72, offy*72, id,

#### docx.cpp

- obj.wps_tag().c_str()
- fputs("<w:t>", docx_obj->file );
- fputs("<wps:txbx>", docx_obj->file );
- fputs("<w:txbxContent>", docx_obj->file );
- fprintf( docx_obj->file, "%s", main_tree::w_closing_tag().c_str() );
- fputs("<wps:wsp>", docx_obj->file);
- Rcpp::NumericVector x_(2);
- y_[1] = y1;
- xfrm xfrm_(x - r, y - r, r * 2, r * 2 , 0.0 );
- if( fs*2 < 1.0 ) return;
- int pointsize,
- editable, id,

### lines 680-714

#### pptx.cpp

fputs("<p:pic>", pptx_obj->file);

    fputs("<p:nvPicPr>", pptx_obj->file);
      fprintf(pptx_obj->file,
        "<p:cNvPr id=\"%d\" name=\"pic%d\"/>",
        idx, idx );
      fputs("<p:cNvPicPr/>", pptx_obj->file);
      fputs("<p:nvPr/>", pptx_obj->file);
    fputs("</p:nvPicPr>", pptx_obj->file);
    fputs("<p:blipFill>", pptx_obj->file);
    fprintf(pptx_obj->file,
      "<a:blip r:embed=\"rId%d\" cstate=\"print\"/>",
      id_img_rel);
    fputs("<a:stretch><a:fillRect/></a:stretch>", pptx_obj->file);
    fputs("</p:blipFill>", pptx_obj->file);

    fputs("<p:spPr>", pptx_obj->file);

    fprintf(pptx_obj->file, "%s", xfrm_.xml().c_str());

    fprintf(pptx_obj->file,"%s", a_prstgeom::a_tag("rect").c_str());

    fputs("</p:spPr>", pptx_obj->file);

  fputs("</p:pic>", pptx_obj->file);

#### docx.cpp

fputs("<wps:wsp>", docx_obj->file);
  write_nv_pr_docx(dd, "rs");

  fputs("<wps:spPr>", docx_obj->file);

  fprintf(docx_obj->file, "%s", xfrm_.xml().c_str());

  fprintf(docx_obj->file,"%s", a_prstgeom::a_tag("rect").c_str());
  fputs("<a:blipFill rotWithShape=\"1\">", docx_obj->file);
  fprintf(docx_obj->file,
          "<a:blip r:embed=\"rId%d\"/>",
          id_img_rel);
  fputs("<a:stretch><a:fillRect/></a:stretch>", docx_obj->file);
  fputs("</a:blipFill>", docx_obj->file);
  fprintf(docx_obj->file, "%s", line_style_.a_tag().c_str());

  fputs("</wps:spPr>", docx_obj->file);
  fprintf(docx_obj->file, "%s",empty_body_text::wps_tag().c_str());

  fputs("</wps:wsp>", docx_obj->file);

