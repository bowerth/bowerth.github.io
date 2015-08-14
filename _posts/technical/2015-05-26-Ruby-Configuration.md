---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

## Fedora 22

basic installation
:   `sudo dnf -y install ruby ruby-devel nodejs`

install Jekyll gem
:   `gem install jekyll`

### pdfkit

- install wkhtmltopdf: `sudo dnf install wkhtmltopdf`
- install `pdfkit` gem

```ruby
require 'pdfkit'
kit = PDFKit.new('http://google.com')
file = kit.to_file('google.pdf')
```

## Windows

### Install Jekyll gem

#### Install DevKit

- donwload from [rubyinstaller.org](http://rubyinstaller.org/downloads/)
- follow instructions on [github](https://github.com/oneclick/rubyinstaller/wiki/development-kit)
- run `ruby dk.rb init` and `ruby dk.rb install`

#### Install gems behind proxy / firewall

update CA certificates
:   `sudo update-ca-trust`

manually download from https://rubygems.org/ (Links -> Download)
:   `gem install rdiscount.gem`

## Manage gems using [bundler.io](http://bundler.io/gemfile.html)

- [Gemfile manual](http://bundler.io/v1.5/man/gemfile.5.html)

## Install rvm (see [rvm.io](https://rvm.io/rvm/install))

install mpapis public key
:   `gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`

install RVM stable with ruby
:   `curl -sSL https://get.rvm.io | bash -s stable --ruby --auto-dotfiles`  
    Option 1: If you'd like to turn off curl's verification of the certificate, use the -k (or --insecure) option.
    Option 2: To continue in insecure mode run `echo insecure >> ~/.curlrc`

re-install ruby
:   `rvm reinstall ruby-2.2.1`

