<div align="center">
  <img src="https://www.frontendmentor.io/static/images/logo-mobile.svg" alt="frontendmentor" width="80">

  <p align="center">
    <a href="https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR"><strong>Frontend Mentor Challenge</strong></a>
    <br />
  </p>
</div>

# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![design](./src/assets/desktop-preview.jpg)

### Links

- Solution URL: [solution](https://your-solution-url.com)
- Live Site URL: [live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/docs) - For styles
- [dayjs](https://day.js.org/) - For date formatting

### What I learned

This task was quite challenging and I had to learn some things along the way. I learnt how to use the `useRef` hook to call the `showModal()` && `close()` method on the dialog element. I also learnt some new array methods and how to use them together to access and update deeply nested state. I also learnt how to use the `useContext` hook to pass data from the parent component to the child component. I learnt to use the `useReducer` hook together with context to manage multiple states.
I also learned how to work work with dayjs and dynamically update the time since a comment was posted.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  overflow-wrap: break-word;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

I will keep improving on my JavaScript logic as this project proved to be challenging for me mostly because of the javascript logic. I will also keep improving on my css skills and learn more about tailwind css.

### Useful resources

- [React Docs](https://react.dev/learn) - This helped me get started with react in general and understand the basics. for this project their documentation on scaling up with context and reducer helped me out.

- [MDN Web Docs](https://developer.mozilla.org/) - MDN contains a lot of useful information in this project it was my resource for studying javascript methods for manipulating the comments data.

- [Freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) - This is an amazing resource for lerning js.

## Author

- Website - [Taqib](https://github.com/dom-iha)
- Twitter - [@_Mihaq](https://www.twitter.com/_mihaq)
