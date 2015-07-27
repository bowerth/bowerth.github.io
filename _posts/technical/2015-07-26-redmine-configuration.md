---
layout   : post
category : technical
tagline  :
tags     :
---
{% include JB/setup %}

## Usage

start session
:   `bundle exec rails server webrick -e production`

login
:   user: `admin`, password: `admin`

## Download

- [github: redmine](https://github.com/redmine/redmine)

## Installation

- [redmine wiki: RedmineInstall](http://www.redmine.org/projects/redmine/wiki/RedmineInstall)

### Database setup

#### sqlite3

- copy `/config/database.yml.example` to `/config/database.yml`
- comment `production` and `test` section for MySQL
- uncomment `production` section for sqlite3

### Install OS dependencies (Fedora 22)

`rmagick` gem
- `imageMagick-devel`

`sqlite3` gem
- `sqlite-devel`

### Install Ruby dependencies

install bundler
:   `gem install bundler`

install gems required by redmine
:   `bundle install --without development test`

### Configure redmine

secret token generation
:   `bundle exec rake generate_secret_token`

create database structure (schema objects in `/db/redmine.sqlite3`)
:   `RAILS_ENV=production bundle exec rake db:migrate`

insert default configuration data set in database
:   `RAILS_ENV=production bundle exec rake redmine:load_default_data`
