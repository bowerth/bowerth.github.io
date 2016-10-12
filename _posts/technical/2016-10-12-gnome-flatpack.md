---
layout   : post
category : technical
tagline  : 
tags     : 
---
{% include JB/setup %}

install flatpack
:   `$ sudo dnf install flatpak`

add repositories
:   `$ wget https://sdk.gnome.org/keys/gnome-sdk.gpg`  
	`$ flatpak remote-add --gpg-import=gnome-sdk.gpg gnome https://sdk.gnome.org/repo/`  
	`$ flatpak remote-add --gpg-import=gnome-sdk.gpg gnome-apps https://sdk.gnome.org/repo-apps/`

install stable gnome
:   `$ flatpak install gnome org.gnome.Platform 3.20`

list apps
:   `$ flatpak remote-ls gnome-apps --app`

add nightly repositories
:   `$ wget https://sdk.gnome.org/nightly/keys/nightly.gpg`  
	`$ flatpak remote-add --gpg-import=nightly.gpg gnome-nightly-apps https://sdk.gnome.org/nightly/repo-apps/`  
    `$ flatpak remote-add --gpg-import=nightly.gpg gnome-nightly https://sdk.gnome.org/nightly/repo/`  

install nightly gnome
:   `$ flatpak install gnome-nightly org.gnome.Platform master`

list nightly apps
:   `$ flatpak remote-ls gnome-nightly-apps --app`

install nightly apps
:   `$ flatpak install gnome-nightly-apps org.gnome.gedit master`

update nightly apps
:   `$ flatpak update org.gnome.gedit master`

run app
:   `$ flatpak run org.gnome.gedit`
