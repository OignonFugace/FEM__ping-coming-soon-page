# Frontend Mentor - Ping Coming Soon Page Master solution

This is a solution to the Ping Coming Soon Page Master challenge on [Frontend Mentor](https://www.frontendmentor.io/).

## Table of contents

- [Overview](#overview)
	- [Screenshot](#screenshot)
	- [Links](#links)
- [My process](#my-process)
	- [Built with](#built-with)
	- [What I learned](#what-i-learned)
	- [Continued development](#continued-development)
	- [Questions to community](#questions-to-community)
- [Author](#author)

## Overview

### Screenshot

![](./Screenshot.png)

### Links

- Solution URL: [GitHub - OignonFugace/FEM__ping-coming-soon-page](https://github.com/OignonFugace/FEM__ping-coming-soon-page)
- Live Site URL: [Frontend Mentor | Ping coming soon page](https://oignonfugace.github.io/FEM__ping-coming-soon-page/)

## My process

### Built with
Vanilla HTML & CSS. As I found that this basic stack has the tools to do form validation on client-side, I choose not to use javascript. 


### What I learned
- Using the [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid) and [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid) pseudo classes on text input elements to style markup based on validation state. 
- As the `type="email"` attribute on input elements allows for "dotless" address domain names, I used a regex `pattern` attribute on the input element as seen here : [html - Why does HTML5 form-validation allow emails without a dot? - Stack Overflow](https://stackoverflow.com/a/51139445/12438727).
- Styling placeholder of text input with the `::placeholder` selector : [How To Change Input Placeholder Color](https://www.w3schools.com/howto/howto_css_placeholder.asp).
- This challenge gave me the chance to practice with the `box-sizing: border-box` along with `flexbox` capabilities. 


### Questions to community
- As this is the first time that I was using `:valid` and `:invalid` pseudo selector, I am wondering if I have done things the proper way or not?
- Any additional feedback is highly appreciated!


### Continued development
- I may dive into a javascript implementation of the validation feature for better customisation capabilities.


## Author

- Website - [Oignon Fugace - par Tanguy Freycon](https://oignonfugace.com/)
- Frontend Mentor - [@OignonFugace](https://www.frontendmentor.io/profile/OignonFugace)
