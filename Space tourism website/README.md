# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This is an intermidiate level project from frontend mentor which i took so i could try what I'd learned so far on css and also learn new things from trying to add functionality
### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information



### Links

- Live Site URL: https://dom-iha.github.io/space-tourism-website/

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow



### What I learned

```html
<!-- to display a different image based on screen size -->
<picture id="launch-image" class="launch-image">
                <source 
                    media="(max-width: 50em)"
                    srcset="images/technology/image-launch-vehicle-landscape.jpg"
                >
                <img src="images/technology/image-launch-vehicle-portrait.jpg" alt="Launch vehicle">
            </picture>
            <picture hidden id="capsule-image" class="launch-image">
                <source 
                    media="(max-width: 50em)"
                    srcset="images/technology/image-space-capsule-landscape.jpg"
                >
                <img src="images/technology/image-space-capsule-portrait.jpg" alt="Space capsule">
            </picture
            <picture hidden id="spaceport-image" class="launch-image">
                <source 
                    media="(max-width: 50em)"
                    srcset="images/technology/image-spaceport-landscape.jpg"
                >
                <img src="images/technology/image-spaceport-portrait.jpg" alt="Spaceport">
            </picture>
```
### Continued development

I will be working on my javascript as I am not very good at it for now and learn to use css grids


## Author

- Frontend Mentor - (https://www.frontendmentor.io/profile/@Dom-iha)
- Twitter - (https://www.twitter.com/Mihaq)


## Acknowledgments
I learnt alot Thanks to https://www.twitter.com/KevinJPowell 


