---
title: как добавить rss в eleventy-блог
description:
date: 2021-03-20
tags:
  - another-tag
layout: layouts/post.njk
---

Добавила к этому блогу rss! Или правильно говорить "добавила этот блог в rss" 🤔
Теперь на него можно подписаться через рсс-читалки, ура 🎉 (однажды я напишу свою)

### Инструкция

Нам понадобятся:
- [eleventy-блог](https://github.com/11ty/eleventy-base-blog)
- плагин [eleventy-plugin-rss](https://github.com/11ty/eleventy-plugin-rss)

###
1. Устанавливаем плагин и добавляем новую страничку <code>feed.njk</code> как здесь — https://github.com/11ty/eleventy-plugin-rss/blob/master/sample/feed.njk

2. добавляем <code>link tag</code> в <code>head</code>

```
<link rel="alternate" type="application/rss+xml" title="{metadata.title}" href="/blog/feed.xml"/>
```

3. исключаем ненужные файлы из коллекций (не поняла, как это работает, но почему бы и нет). Для этого надо проставить <code>eleventyExcludeFromCollections: true</code> в <code>index.njk</code>

Код моего блога всегда можно посмотреть на [гитхабе](https://github.com/iwanttobealight/iwanttobealight.ru)

Выражаю бесконечную благодарность @jamesdoc за [пост про рсс](https://jamesdoc.com/blog/2019/adding-rss/) пушто из ридми плагина я ничего не поняла
