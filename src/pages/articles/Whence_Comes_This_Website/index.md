---
title: Whence Comes This Website?
date: "2018-08-01"
published: true
isProject: false
---

This site is being built with [Gatsby][], a "blazing-fast static site generator for React", and is deployed on [Netlify][].

[View Source][source]

Having toyed with a number of static site generators, and getting a sense of the benefits, it became clear that I should build my personal site with such a system. My short pitch? I can write posts with simple text files, track everything with source control, and have my site deploy automatically after pushing changes to my git repository. *Plus, the hosting can be freee!* I said goodbye to Bluehost and ventured into the DIY-O-Sphere of "[JAMstack][]"-aligned tech, now, "Which of these dozens of trails(tools) should I explore?" was the question. Look at all the options for "[static site generators][]" for instance.

Gatsby uses JavaScript, which I had been using for teaching, and was fresh with. The site it generates is also a "Progressive Web App", which is something I have in mind as a good target specification for some web-based projects I've been musing on with different friends. It has a really cool chew-on-data-and-spit-stuff-out model, where you can generate pages automagically based on templates and layouts by querying data from your file system or elsewhere. Gatsby generates "the fastest possible website" by its prebuild-and-host-on-servers structure (what the JAMstackers are all about). All of this sounded really cool, so what's the catch? *Dat Learning Curve*.

The Gatsby setup is very much the "upfront investment for later juicy payoff" type of system, especially if you want to understand how it works and take full advantage of the possibilities. When talking to my friend about finally deciding on my generator tool, I said, "I'm either a genius or an idiot for choosing this one." So far, that statement has turned out to be correct! As far as "quickly getting content out there" goes, it has not been easy, especially since I've been building it from scratch, not wanting to fall slave to someone's template that is hard to parse and customize. *Plus*, I'm learning the React framework as I go, which is it's own noodle-baker of a system. When considering the future payoff and the education I'm gaining, it feels rewarding - I just have to remind myself sometimes when I'm in the dredges... *"Don't worry, concerned me - I'm really quite pretty sure this is a great idea!"*

On the deployment end, Netlify offers free hosting, automatic deploy from a git host (I'm using GitLab), and DNS features for the domain/URL business. I use Hover for my domain name hosting and email, and was able to hook it up to NetlifyDNS after some twiddling. Perhaps I'll write up a bit about some of the techy tinkering behind getting this all going, but for now you're welcome to check out the [source code][source] for my site - please [let me know][contact] if you have any questions!

#### Helpful Things
After following the official [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/), I found the following tutorials helpful additions:      
[LevelUp Tutorials](https://www.youtube.com/playlist?list=PLLnpHn493BHHfoINKLELxDch3uJlSapxg) (video playlist)   
[Creating a blog with Gatsby - Justin Schau](https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/)   
Other Resources:   
[Netlify Site](https://www.netlify.com/)



[Gatsby]: https://www.gatsbyjs.org/
[Netlify]: https://www.netlify.com/
[source]: https://gitlab.com/iancarnation/iancarnation-website
[JAMstack]: https://jamstack.org/
[static site generators]: https://www.staticgen.com/
[contact]: ../../contact/