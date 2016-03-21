# Az
Woot! UT fanfic as well as a framework for online story experiences.

All code except for that in the "chapters" directory is published under the GNU Public License 3.0.<br /><br />
The story <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Az</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Daniel Noon</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.<br /><br />
ALL MUSIC FILES AND MANY CHARACTERS USED IN THE STORY DO NOT fall under either the GPL or CC A-SA Licence or belong to me. They belong to Toby "Radiation" Fox, all rights reserved.

# Documentation
## Story Framework
The framework is for interactive stories, as dynamic pages can be loaded and scripts for individual pages can be created. It is 100% complete for my purposes in the repository, but has many dependencies for now, so it may not be right for your purposes.
#### Dependencies
All of the following dependencies should be included BEFORE YOU USE THE ELEMENT.
* [JQuery](//jquery.com)
* [Polymer](//polymer-project.org)
* [MaterializeCSS](//materializecss.com)
* [History.js](https://github.com/browserstate/history.js/)
* [Hammer.js](http://hammerjs.github.io/)
* [Keypress.js](https://dmauro.github.io/Keypress/)

I will probably package most of these with the framework sometime. Just not now.
#### Use
##### Attributes
To use, first add `<link rel="import" href="path/to/story.html"` to the `head` portion of the document. Next, add a `story-box` element to the `body` portion of the document with normal HTML attributes as well as the ones listed below:
* `chapters (Integer)`: __MUST BE DEFINED!!__ This tells how many chapters the framework will recognize as existing. It goes by natural numbers; in other words, it begins at ONE, not zero.
* `chapter (Integer)`: the current chapter being displayed. This can be changed dynamically and will load the chapter on change. Default: `1`
* `name (String, optional)`: will change the innerHTML of any element with class `chara` to its value on chapter change or on value change.

Example setup: `<story-box chapters="10"></story-box>`
##### $Story variable
At any time, you can change ANY attribute, even a plain HTML one, or call a method with `$Story`. For instance, `$Story.chapter=3` will change the chapter to chapter 3.
##### Methods
These methods are very useful for simple-seeming tasks.
* `_next()`: moves to the next page. However, it is suggested that you use `$(".nxt").click()` instead for a few reasons: The button can be a central place to handle events for turning the page. Both swiping and using arrow keys call on the button's click handler instead so that adding and removing functions to all three events is simpler.
* `_previous()`: moves to the previus page.
* `_chara()`: changes all elements w/`.chara` to `$Story.name`

### Setup
Your file tree should look like this: <br>
`chapters` <br>
|--`1.html` (your first chapter) <br>
|--`2.html` (second chapter) <br>
|--`n.html` (where n = chapter) <br>
`polymer` <br>
|--`polymer.html` the html file bundled with polymer <br>
`index.html`
