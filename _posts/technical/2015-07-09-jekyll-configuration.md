---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## Github Pages

- [jekyll 3.0](https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0)

## Org Mode

- [Jekyll with org-mode and twitter bootstrap](http://cinsk.github.io/jekyll-org/articles/jekyll-org.html)
- [github: cinsk: jekyll-org](https://github.com/cinsk/jekyll-org)

## Themes

- [jekyllbootstrap.com](http://jekyllbootstrap.com)
- [jekyllbootstrap.com: hooligan theme](http://themes.jekyllbootstrap.com/preview/hooligan)

change theme
:   `$ rake theme:switch name="twitter"`

install theme
:   `$ rake theme:install git="https://github.com/dhulihan/hooligan.git"`

## Include dygraphs in Jekyll-run site from R

- [stackoverflow: 31988717](https://stackoverflow.com/questions/30175567/include-dygraphs-in-jekyll-run-site-from-r/31988717)

- generate with YAML: 
```
output:
  rmarkdown::html_fragment:
    self_contained: false
    lib_dir: lib
    fig.width: ..
    fig.height: ..
```

1. render with `rmarkdown::html_output`, copy dygraph dependencies from header
2. create a new jekyll layout in `_layouts/` with the dygraphs dependencies (changing `libs` to `/libs` as mentioned before)
3. run rmarkdown again, this time with `rmarkdown::html_fragment` to generate html without header
4. copy html fragment to `_includes/`
5. create a new blog post using layout specified in [2]
6. include html fragment in body of blog post using `{{ {% include html_fragment.html }}%}`

## markdown-cv

- [github: elipapa: markdown-cv](https://github.com/elipapa/markdown-cv)
- [github: blmoore: markdown cv / résumé built with jekyll](https://github.com/blmoore/md-cv)
- [blm.io: cv](http://blm.io/cv/)

## Plugins

### ditaa

- [github: matze: jekyll-ditaa](https://github.com/matze/jekyll-ditaa)
- [ASCIIFlow Infinity: create ascii diagrams](http://asciiflow.com/)

#### Installation

install ditaa
:   `sudo dnf install ditaa`

place the `ditaa.rb` plugin in your sites `_plugins` directory
:   [github: matze: jekyll-ditaa/ditaa.rb](https://raw.githubusercontent.com/matze/jekyll-ditaa/master/ditaa.rb)

{{ {% ditaa }}%}
/----+  DAAP /-----+-----+ Audio  /--------+
| PC |<------| RPi | MPD |------->| Stereo |
+----+       +-----+-----+        +--------+
   |                 ^ ^
   |     ncmpcpp     | | mpdroid /---------+
   +--------=--------+ +----=----| Nexus S |
                                 +---------+
{{ {% endditaa }}%}

## PHP Markdown integration

- [php-markdown](https://michelf.ca/projects/php-markdown/extra/#table)
- [GitHub: redcarpet](https://github.com/vmg/redcarpet)
- [George Hawkins: Redcarpet Configuration](https://george-hawkins.github.io/basic-gfm-jekyll/redcarpet-extensions.html)
- [MultiMarkdown syntax](https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide)

### Flavours using the Markdown Extra syntax for definition lists:

- Markdown Extra3
- MultiMarkdown2
- Pandoc6 (interestingly there is a compact_definition_lists parser option)
- Python Markdown3
- Kramdown2
- Discount (uses = for main syntax though)
- Lunamark1

### Flavours that do not support definition lists:

- GitHub Flavored Markdown
- Redcarpet
