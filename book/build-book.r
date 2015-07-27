## install.packages("devtools")
## library(devtools)

## install.packages("httpuv")
## install_github("shiny" , username = "rstudio")
## install_github("rmarkdown" , username = "rstudio")

## devtools::install_github("hadley/bookdown")
## install.packages("inline")
## install_github("pryr" , username = "hadley")
## install.packages("microbenchmark")
## install_github("dplyr", "hadley")
## install_github("bigrquery", "hadley")
## install.packages("png")
## install_github("lineprof", "hadley")
## install.packages("RMySQL")
## RPostgreSQL

library(bookdown)
library(rmarkdown)

# Render chapters into tex  ----------------------------------------------------
needs_update <- function(src, dest) {
  if (!file.exists(dest)) return(TRUE)
  mtime <- file.info(src, dest)$mtime
  mtime[2] < mtime[1]
}

## getwd()
render_chapter <- function(src) {
  ## dest <- file.path("book", "tex", gsub("\\.rmd", "\\.tex", src))
  dest <- file.path("book", "tex", gsub("\\.md", "\\.tex", src))
  ## dest <- file.path(gsub("\\.rmd", "\\.tex", src))
  ## dest <- file.path(gsub("github.io", file.path("github.io", "book", "tex"), dest))
  if (!needs_update(src, dest)) return()

  message("Rendering ", src)

  command <- bquote(rmarkdown::render(.(src), bookdown::tex_chapter(),
                                      ## output_dir = "book/tex",
                                      ## output_dir = file.path("book", "tex", "_posts", "professional"),
                                      output_dir = file.path(dbpath, "GitHub", "jekyll", "bowerth.github.io", "book", "tex"),
                                      ## output_dir = file.path(dbpath, "GitHub", "jekyll", "bowerth.github.io", "book", "tex", dirname(.(src))),
                                      quiet = TRUE, env = globalenv()))


  ## rmarkdown::render("_posts/professional/2015-05-18-Curriculum.rmd",
  ##   bookdown::tex_chapter(),
  ##                   ## output_dir = file.path("book", "tex",  "_posts", "professional"),
  ##                   output_dir = file.path(dbpath, "GitHub", "jekyll", "bowerth.github.io", "book", "tex", "_posts", "professional"),
  ##                   quiet = TRUE, env = globalenv())

  writeLines(deparse(command), "run.r")
  on.exit(unlink("run.r"))
  source_clean("run.r")
}

source_clean <- function(path) {
  r_path <- file.path(R.home("bin"), "R")
  cmd <- paste0(shQuote(r_path), " --quiet --file=", shQuote(path))

  out <- system(cmd, intern = TRUE)
  status <- attr(out, "status")
  if (is.null(status)) status <- 0
  if (!identical(as.character(status), "0")) {
    stop("Command failed (", status, ")", call. = FALSE)
  }
}


## setwd("/mnt/Windows/Users/werth_b/LocalData/Dropbox/GitHub/adv-r")
## setwd(file.path(dbpath, "GitHub", "jekyll", "bowerth.github.io"))
chapters <- dir(".", pattern = "\\.rmd$")
## chapters <- file.path("_posts", "professional", "2015-05-18-Curriculum.md")
## chapters <- file.path(dbpath, "GitHub", "jekyll", "bowerth.github.io", "_posts", "professional", "Introduction.rmd")
## chapters <- file.path(dbpath, "GitHub", "jekyll", "bowerth.github.io", "_posts", "professional", "2015-05-18-Curriculum.rmd")
chapters <- c(file.path("_posts", "professional", "2015-05-18-Curriculum.md"),
              file.path("_posts", "professional", "application", "2015-05-20-Research-Statement.md"))
## getwd()
## src <- chapters[1]
## chapters <- chapters[30]
lapply(chapters, render_chapter)


# Apply regular expressions to files -------------------------------------------
apply_regexp <- function(file, regexps) {
  lines <- readLines(file)
  for (i in seq_along(regexps)) {
    lines <- gsub(escape(names(regexps)[i]), escape(regexps[[i]]), lines)
  }

  writeLines(lines, file)
}
apply_regexps <- function(regexps) {
  files <- dir("book/tex/", "\\.tex$", full.names = TRUE)
  lapply(files, apply_regexp, regexps = regexps)
}
escape <- function(x) {
  x <- gsub("\\\\", "\\\\\\\\", x)
  gsub("([{}])", "\\\\\\1", x)
}

apply_regexps(c(
  "\\begin{SIDEBAR}" =    "\\begin{shortbox}\\Boxhead{",
  "\\end{SIDEBAR}"   = "}",
  "\\begin{ENDSIDEBAR}\\end{ENDSIDEBAR}" = "\\end{shortbox}"
))

# Copy across additional files -------------------------------------------------
file.copy("book/application.tex", "book/tex/", recursive = TRUE)
file.copy("book/krantz.cls", "book/tex/", recursive = TRUE)
file.copy("assets/images/photographs", "book/tex/", recursive = TRUE)
# file.copy("diagrams/", "book/tex/", recursive = TRUE)
# file.copy("screenshots/", "book/tex/", recursive = TRUE)
# file.copy("figures", "book/tex/", recursive = TRUE)

# Build tex file ---------------------------------------------------------------
# (build with Rstudio to find/diagnose errors)
old <- setwd("book/tex")
# system("xelatex advanced-r -interaction=batchmode")
# system("xelatex advanced-r -interaction=batchmode")
system("xelatex application -interaction=batchmode")
system("xelatex application -interaction=batchmode")
setwd(old)

# file.copy("book/tex/advanced-r.pdf", "book/advanced-r.pdf", overwrite = TRUE)

file.copy("book/tex/application.pdf", "book/application.pdf", overwrite = TRUE)
