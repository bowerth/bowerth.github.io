---
layout   : post
category : professional
tagline  :
tags     :
draft    : true
---
{% include JB/setup %}

- [github: jekyll-table-of-contents](https://github.com/ghiculescu/jekyll-table-of-contents)

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Objectives 2015</a>
<ul>
<li><a href="#sec-1-1">1.1. ICIO</a>
<ul>
<li><a href="#sec-1-1-1">1.1.1. icioapp2015</a></li>
<li><a href="#sec-1-1-2">1.1.2. National Accounts ISIC Rev. 3 34 industries (stani3Estimate)</a></li>
</ul>
</li>
<li><a href="#sec-1-2">1.2. National Accounts ISIC Rev. 4</a>
<ul>
<li><a href="#sec-1-2-1">1.2.1. Data Sources</a></li>
<li><a href="#sec-1-2-2">1.2.2. Estimation (stani4Estimate)</a></li>
<li><a href="#sec-1-2-3">1.2.3. Export</a></li>
<li><a href="#sec-1-2-4">1.2.4. Validation</a></li>
<li><a href="#sec-1-2-5">1.2.5. Data Publication</a></li>
<li><a href="#sec-1-2-6">1.2.6. Documentation</a></li>
<li><a href="#sec-1-2-7">1.2.7. Frequently Asked Questions</a></li>
</ul>
</li>
<li><a href="#sec-1-3">1.3. Scoreboard</a>
<ul>
<li><a href="#sec-1-3-1">1.3.1. .Stat Cube</a></li>
<li><a href="#sec-1-3-2">1.3.2. HTML version</a></li>
</ul>
</li>
<li><a href="#sec-1-4">1.4. R Graphics</a>
<ul>
<li><a href="#sec-1-4-1">1.4.1. Trainig (A/S seminars, DKI)</a></li>
<li><a href="#sec-1-4-2">1.4.2. Implementation</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
</div>

# Objectives 2015<a id="sec-1" name="sec-1"></a>

## ICIO<a id="sec-1-1" name="sec-1-1"></a>

### icioapp2015<a id="sec-1-1-1" name="sec-1-1-1"></a>

1.  DONE create ICIO App

2.  DONE create repository for external collaboration on ICIO App

3.  DONE update server with ICIO App

4.  create and publish hompepage for ICIO App

### National Accounts ISIC Rev. 3 34 industries (stani3Estimate)<a id="sec-1-1-2" name="sec-1-1-2"></a>

1.  integrate ISIC Rev. 4 estimates

## National Accounts ISIC Rev. 4<a id="sec-1-2" name="sec-1-2"></a>

### Data Sources<a id="sec-1-2-1" name="sec-1-2-1"></a>

1.  Format

    1.  TODO fix data format of sources (currecy: million USD etc.)

    2.  TODO fix source for USD exchange rates

2.  Harmnonised Data Sources

    1.  TODO communicate existence and usage of STANi4 Provisional 2013 to internal and external users

3.  National Data Sources

    1.  TODO detailed list for national sources (coverage: industry, variable, time)

    2.  TODO design repository with industry and variable converters for national sources

    3.  TODO prioritise data sources available from direct URLs or APIs

    4.  TODO develop APIs connectors in coordination with STD/SIMS and STD/NAD

### Estimation (stani4Estimate)<a id="sec-1-2-2" name="sec-1-2-2"></a>

1.  load data

    1.  TODO load harmonised sources from files

2.  error handling

    1.  TODO enhance error messages to facilitate debugging

3.  training and continuation

    1.  TODO create training materials and demonstrate usage

### Export<a id="sec-1-2-3" name="sec-1-2-3"></a>

1.  from Shiny to SQL

    1.  TODO set up Cerberos configuration (Linux to MS SQL)

2.  from SQL to .Stat

    1.  TODO facilitaty workflow to export data from R to OECD.Stat

### Validation<a id="sec-1-2-4" name="sec-1-2-4"></a>

1.  TODO define hard and soft edits

2.  TODO implement hard edits in R

3.  TODO design Excel dashboards for soft edits

### Data Publication<a id="sec-1-2-5" name="sec-1-2-5"></a>

1.  TODO make underlying source data available to users

### Documentation<a id="sec-1-2-6" name="sec-1-2-6"></a>

1.  TODO publish stan-icio homepage on external server

### Frequently Asked Questions<a id="sec-1-2-7" name="sec-1-2-7"></a>

1.  TODO develop textfile-based content management system

## Scoreboard<a id="sec-1-3" name="sec-1-3"></a>

### .Stat Cube<a id="sec-1-3-1" name="sec-1-3-1"></a>

1.  DONE guidelines for data cube (with Brunella Bosselli)

2.  DONE create data cube example

3.  TODO routines to check, enhance and combine contributed file format

### HTML version<a id="sec-1-3-2" name="sec-1-3-2"></a>

1.  TODO expand demo at 10.101.26.220 "Reports"

2.  TODO showcase JavaScript examples for interactive charts

3.  TODO develop interface to create visualisations from .Stat cube

## R Graphics<a id="sec-1-4" name="sec-1-4"></a>

### Trainig (A/S seminars, DKI)<a id="sec-1-4-1" name="sec-1-4-1"></a>

1.  DONE 13.02.2015 R Graphics

2.  DONE 25.05.2015 R Graphics

### Implementation<a id="sec-1-4-2" name="sec-1-4-2"></a>

1.  TODO R graphics system POC (ECO)

2.  TODO R graphics for online and print publishing (PAC)
