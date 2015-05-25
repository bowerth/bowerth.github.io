---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

### Install rvm (see [rvm.io](https://rvm.io/rvm/install))

install mpapis public key
:   `gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`

install RVM stable with ruby
:   `curl -sSL https://get.rvm.io | bash -s stable --ruby --auto-dotfiles`

re-install ruby
:   `rvm reinstall ruby-2.2.1`
