---
title: Vextar VFX - V1
date: "2018-10-13"
published: true
isProject: false
---
I've had fun setting up a few visual effects for Vextar. Please enjoy a tour through our current selection!


## Powerups
Powerups spawn in key points of a map and grant your discs deadly abilities.

### Freeze
This powerup gives your discs some homing ability and will slow down and obscure the view of your opponent.
Here's what you gotta grab:   
<div>
<video width="640" height="360" controls>
  <source src="./freeze_10-13_02-640.mp4" type="video/mp4">
</video>
</div>  

*materials by Jaycee Baron*   

I like how this is looking so far. The frosty vapor could use another pass - it would be cool to make the vapor sink downwards with more of a dry ice look instead of the poofs. The vapor's also a bit hard to see against the black space background, so I'll experiment with making it more visible and maybe have it sort of pool on the platform a bit.

---

This is what happens when it gets ya:
<div>
<video width="640" height="360" controls>
  <source src="./frozegnette_640.mp4" type="video/mp4">
</video>
</div>
This works well for the moment. I'd like to see the frost accumulate and recede more organically, so some kind of procedural material that can grow and shrink along all the fractally branches could be "cooler" :)
<br/>
<br/>

### Power
This powerup grants "insta-kill" abilities to your discs, taking your opponent out on the spot.   
<div>
<video width="640" height="360" controls>
  <source src="./powerup_power_640.mp4" type="video/mp4">
</video>
</div>   

*model by Michelle Baron*   

This one is pretty basic at the moment. I do like the heat-wave warbling, but in general it's not ominous enough yet for how deadly its effect is. The plan is for your opponent to explode into robo-bits, with sparks and arcs and whatnot, so there needs to be more to convey that in the visual effect. Some little lightning beams arcing around it and making the animations sudden and jolting would be my first step. 


## Disc Trails
A bit of gameplay footage can show the disc trails in action:

`video: https://youtu.be/czkWPdwsKME?start=51&end=68`
These are pretty fun to see kertwanging all over the place. We've thought about adding more character to the trail when it's powered up, beyond just changing the color. A 'Freeze' enabled disc could have some vapor in the trail, for instance.


## Death Effect - "Spaghettification"
Spaghettawhat? Haha, its actually [a real thing in astrophysics](https://en.wikipedia.org/wiki/Spaghettification) where something will get pulled into an elongated shape in extreme gravitational situations. We thought this would be a funny concept to go towards for when a player "dies" by falling out of the arena. Like maybe they're getting pulled into an interdimensional black hole portal or something before being respawned. 

Currently this effect is a wobbly beam that shoots out in the opposite direction the player was falling, see this clip:
<div>
<video width="640" height="360" controls>
  <source src="./spaghett_drop_10-15_640.mp4" type="video/mp4">
</video>
</div>   
or this section for a better example of the directionality:

`video: https://youtu.be/czkWPdwsKME?start=87&end=94`
The next step with this effect will be to "spaghettify" the actual player, distorting a sprite or perhaps even the mesh - that will be fun!