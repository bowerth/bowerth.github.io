---
layout  : page
title   : Notebook
tagline : 
---
{% include JB/setup %}

## Posts

<!-- 
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
-->

<!-- from https://gist.github.com/carlo/2870636 -->

<ul class="posts">
  {% for post in site.posts %}
    {% unless post.draft %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
