---
title: Turn, Turn, Turn - Life of a Maya Script, Part 1
date: "2018-03-16"
published: true
isProject: false
---

My colleague at work had a folder full of models that needed to be rotated to face in the Z-positive direction, to match Unity's orientation. He asked me if there was a way to get that done without having to open up every file and do it manually. My eyes lit up and I was like, "Ooh, ooh, let me script that for you!" I had just begun working through [Practical Maya Programming][] by [Rob Galanakis][] and was thrilled that a real-world case study just fell into my lap.

I then went and made a 'Case Studies' section in my [Workflowy][] notes for the book and outlined my anticipated program flow:
* Load FBX
* Get to the root transform of the model
* Rotate it
* Export a new FBX

I could have just had that all in my head, this isn't a crazy complicated scenario, but I knew there would be nuances to add so I might as well start laying out the 'skeleton' of the script in this way.

The first, and most important, thing to figure out was the name of the script, thus `rotateEmAll.py` was born! (Just be thankful I didn't go with `gottaRotateEmAll`;)

I began by inspecting one of the FBX files in Maya to see how the models were set up and figuring out what nodes were at play. Then it was just a matter of finding the relevant PyMEL functions or MEL commands I'd need to execute to get to the root transform. My first thought was to do `ls(type='transform')` which would give me a list of all the transforms, then I'd just need to find the one with no parent and that'd be my root. What I found was that that command had grabbed the transforms of all the cameras as well, so I needed to filter those out. The strategy I eventually landed on was to just select all the meshes in the scene; `meshes = ls(type='mesh')` whose parents just happen to be their Transform nodes. A little list comprehension would slurp those out: `transforms = [m.getParent() for m in meshes]`. Then I just needed to get the root transform, which would be the one with no parent: `root = [t for t in transforms if t.getParent()==None][0]` (This list comprehension would return a list with one item, so I index it out with `[0]` so that `root` is a Transform node, not a list). If I wanted to be a clever boy, I could have done that all in one statement, like: `root = [t.getParent() for t in pmc.ls(type='mesh') if t.getParent().getParent()==None][0]` but why sacrifice readability to reduce a mere two lines of code, eh?

Finally, the rotation could happen: `root.setRotation([0.0,180.0,0.0], space='world')`. Then, to make sure I was being Mr. Clean, I wanted to 'Freeze Transformations' on this model so it'd be spic-n-span upon import into the engine. To discover this command I used the classic method of performing it in the Maya GUI and looking at the script window to see what MEL command was executed. I saw 'makeIdentity', so I looked up the corresponding PyMEL syntax, thus: `pmc.makeIdentity(apply=True)`. Makes sense, because an 'Identity Matrix' would be zero rotation and translation with a scale of one - nice and 'frozen!'

So here is the code for the full operation:
```
    meshes = pmc.ls(type='mesh')
    
    transforms = [m.getParent() for m in meshes]
    
    root = [t for t in transforms if t.getParent()==None][0]
    
    root.setRotation([0.0,180.0,0.0], space='world')
    
    root.select()
    pmc.makeIdentity(apply=True) # Freeze Transformations
```

Then it was a matter of doing this on multiple files...
To be continued in:
### Small (or Large) Batch Artisinal File Processing - Life of a Maya Script, Part 2

P.S. Earlier I said it was, "just a matter of finding the relevant PyMEL functions.." which was not as straightforward as it sounds. Maybe I'll write about that special slice of the process later :)




[Practical Maya Programming]: https://www.amazon.com/Practical-Programming-Python-Robert-Galanakis/dp/1849694729
[Rob Galanakis]: https://www.robg3d.com/
[Workflowy]: https://workflowy.com/