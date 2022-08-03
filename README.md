# Trumpelthinkskin JavaScript Game

![Website layout](docs/images/responsive.png)

## Portfolio 2 project as part of the Diploma in Full Stack Software Development by Code Institute.
Trumplethinskin is a satirical game created with JavaScript depicting Donald Trump's attemps to get back to The White House.

# Contents

* [Objective](<#objective>)
* [User Experience UX](<#user-experience-ux>)
    * [Target Audience](<#target-audience>)
    * [User Stories](<#user-stories>)
* [Design](<#design-choices>)
    * [Site Structure](<#site-structure>)
    * [Colour Scheme](<#colour-scheme>)
    * [Typography](<#typography>)
    * [Imagery](<#imagery>)
    * [Wireframes](<#wireframes>)
* [Features](<#features>)
    * [Game Load](<#game-load>)
    * [Trump Sprite](<#trump-sprite>)
    * [Reporter Sprite](<#reporter-sprite>)
    * [Speech Bubble Sprite](<#speech-bubble-sprite>)
    * [Multiple Reporters](<#multiple-reporters>)
    * [Background Image](<#background-image>)
    * [Foreground Image](<#foreground-image>)
    * [Collision Detection](<#collision-detection>)
    * [Win and Lose Detection](<#win-and-lose-detection>)
* [Future Features](<#future-features>)
* [Technologies Used](<#technologies-used>)
* [Testing](<#testing>)
    * [Bugs](<#bugs>)
    * [Unfixed Bugs](<#unfixed-bugs>)
    * [Validator Testing](<#validator-testing>)
    * [Lighthouse Testing](<#lighthouse-testing>)
    * [Color Contrast Testing](<#color-contrast-testing>)
* [Deployment](<#deployment>)  
* [Credits](<#credits>)
    * [Developer Team](<#developer-team>)

# Objective:

To design a clean, intuitive, funny, retro style and fully responsive game in JavaScript.

The three main objectives are:

* ## Create a fun game in JavaScript without using any Libraries or Frameworks
    I decided to go with a retro early 90s style game for this project without the use of JavaScript Libraries or Frameworks. I decided to create a game for this project as I always thought this would be something I could never do and wanted to challenge myself.
* ## Control
    The user is able to move the character left and right and fire their "Fake News" speech bubble at reporters to make them disappear so they don't hit the character.
* ## Win and lose Scenarios
    The user is able to win the game by making it to the end of the level without being hit by a reporter. On doing so, they get a message to inform them have won. The user will lost the game if they get hit by a reporter.

[Back to top](<#contents>)

# User Experience (UX):

## Target Audience

* Users that are looking for a fun, satirical, web browser game to play. 

## User Stories

### Visitor Goals

* Easily understand what the website is about.
* Understand what the game is about and how to control the character.
* Play the game and win!

[Back to top](<#contents>)

# Design Choices

## Site Structure

Trumpelthinskin is a simple and clean layout with a canvas and some basic instructions in html.

## Colour Scheme

![Colour-scheme](docs/images/coolor.png)

The colour scheme used for this project was chosen from using a dropper tool in photoshop 
on one of the headshot images to maintain a similar aesthetic between  the website and 
headshot images. [Coolor](https://coolors.co/ffffff-e3e6e8-b88845-2a2a2d-141519).

* White `#FFFFFF`
* Platinum `#E3E6E8`
* Dark Goldenrod `#B88845`
* Raisin Black `2A2A2D`
* Eerie Black `#141519`

## Typography

I chose the font **Player** for the headings and the font **Inter**  for all other text content 
in the website as I liked the clean look of both fonts.

The fonts were sourced from [Google Fonts](https://fonts.google.com/).

## Imagery

All photos were taken by me, the photographer and the logo was designed by me in photoshop. 
Readme images were screenshot from mentioned sites and wireframes were created in photoshop.

## Wireframes

Wireframes were created for both mobile and desktop.

<details><summary> Wireframes </summary>

![Desktop Wireframe](docs/images/wireframe-desktop.jpg)

![Mobile Wireframe](docs/images/wireframe-mobile.jpg)

</details>

[Back to top](<#contents>)

# Features

Headshot is designed as a one page structured website, making it very clean and logically laid out 
so the user clearly knows what the site is about and what services they can avail of.

The language is easy to understand and the navigation is intuitive with a consistent color scheme 
that adds to the style of the photographers photos.

This is a fully responsive website. 

## Game Load

When viewing the main page on a desktop, there is a navbar present which has 6 links to the sections of the website.

![Desktop navbar](docs/images/navbar.png)

When viewing the main page on a mobile device, the navbar disappears.

There is a hamburger menu showing at all times on all devices at the top left of the screen. This contains 6 links 
to the different sections of the website. 

The hamburger menu was modified from code created by [Álvaro](https://codepen.io/alvarotrigo/pen/wvrzPWL)

![Responsive hamburger menu](docs/images/hamburger.png)

## Trump Sprite

The Main section is accessible from both the Navbar and the hamburger menu from the HOME link.

The Main Section is the landing page of the website and the first part that the user will see.

There is a large background image with the logo, name and brief description of what the site is about overlayed.

There is a scroll down animation hint on the bottom left of the main screen to entice the user to scroll down 
through the site. 

The scroll down animation was modified from code created by [Deepak K Vijayan](https://codepen.io/2xsamurai/pen/WwmjKQ)

![Home page desktop view](docs/images/main.png)

## Reporter Sprite

The About section is accessible from both the Navbar and the hamburger menu from the ABOUT link.

This section contains a headshot photo of the photographer and a description of them so the user 
can get to know them and understand their style of photography.

![About Section desktop view](docs/images/about.png)

## Speech Bubble Sprite

The Gallery section is accessible from both the Navbar and the hamburger menu from the Gallery link.

This section contains 6 images that have a hover animation.

![Gallery Section desktop view](docs/images/gallery.png)

There is also a lightbox implemented with CSS that appears when the images are clicked to give a higher 
resolution image to the user. 

The gallery Lightbox was modified from code created by [Kevin Powell](https://codepen.io/kevinpowell/pen/LgMLao)

![Gallery Lightbox desktop view](docs/images/gallery-lightbox.png)

## Multiple Reporters

This section has an explanation of what retouching is and also a before/after slider created in CSS. 
Before/After slider was modified from code created by [Lea Varou](https://lea.verou.me/2014/07/image-comparison-slider-with-pure-css/) 

![Retouch Section desktop view](docs/images/retouch.png)

## Background Image

This section contains three testimonials from previous clients of Headshot Photography.

![Testimonial Section desktop view](docs/images/testimonial.png)

## Foreground Image

The contact section has a google map, contact information, and a contact form in which the user 
can contact the photographer with a message.

The form currently submits to the Code Institute form dump.

![Contact Section desktop view](docs/images/contact.png)

## Collision Detection

The footer contains the social media icons that link to the main sites as headshot does not 
have profiles on social media.

![Footer desktop view](docs/images/footer.png)

## Win and Lose Detection

The footer contains the social media icons that link to the main sites as headshot does not 
have profiles on social media.

![Footer desktop view](docs/images/footer.png)

[Back to top](<#contents>)

# Future Features

* Sound to go with the game such as a background music track and sound effects
* Add more characters and different scenarios
* Power ups for trump and other characters
* Scoring system and a leader table
* More levels of increasing difficulties

[Back to top](<#contents>)

# Technologies Used

Here are a list of technologies used in this project

- [GitHub](https://github.com/) Used to host website
- [Gitpod](https://www.gitpod.io/) Used as IDE
- [Git](https://git-scm.com/) Version control
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) Used to input the website content
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) Used to style the website content
- [JavaScript](hhttps://www.javascript.com/) Used to create the game
- [Google Fonts](https://fonts.google.com/) Used to select fonts for the website
- [Google Developer Tools](https://developers.google.com/web/tools/chrome-devtools) Used for testing responsiveness of the website
- [Tiny.jpg](https://tinyjpg.com/) Reduced size of images.
- [Favicon.io](https://favicon.io/) Used to convert the logo to a favicon.
- [AmIResponsive](http://ami.responsivedesign.is/) Used to create responsive image used at the top of the readme
- [Coloors](https://coolors.co/) Used to display the color palette image in the readme.
- [Color Contrast Accessibility Validator](https://color.a11y.com/) Tested color contrast through the website.
- [W3C Markup Validation Service](https://validator.w3.org/) Validated HTML for the website
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_uri) Validated CSS for the website
- [Adobe Photoshop CS6](https://www.adobe.com/ie/products/photoshop.html) Used to create and edit images used for the website.

[Back to top](<#contents>)

# Testing 

I have spent many many hours testing this site and had family and friends go through it for me on different devices. 

This led to many issues being identified.

## Game

| TEST | OUTCOME | PASS / FAIL |
|:---:|:---:|:---:|
| Trump Sprite animation | Main character sprite animates correctly | PASS |
| Reporter Sprite animation | CNN Reporter sprite animates correctly | PASS |
| Speech Bubble  | When spacebar is pressed, the main character fires his speech bubble which animates| PASS |
| Movement | When a and d are pressed, the character moves left and right respectively | PASS |
| Background parallax | backgroun and foreground move a different speeds giving a parallax effect | PASS |
| Collision Detection | detect when main character gets hit by reporter and when speech bubbles hit a reporter | PASS |
| Lose Scenario | When main character gets hit by a reporter, a lose message appears | PASS |
| Win Scenario | When main character makes it to the end of the level, a "win" message appears | PASS |

## Bugs

* The google map also presented an issue with responsiveness. It doesn't have any responsiveness as the dimensions are set in the iframe. For this reason. I created two divs and have one set to shown and the other set to hidden. On larger screen sizes, the div containing the larger map is shown and the smaller map div is hidden. On smaller screen sizes, the div with the small map is shown and the larger one is hidden. This solved the issue.

* The before/after slider also does not have responsiveness so I had to use a media query to set the images width manually in order for it to fit in smaller devices.

## Unfixed Bugs

Due to the fact that I chose to use only HTML and CSS as that is what this project is being graded on, there are better ways to implement features such as the slider in the retouch section and the lightbox in the gallery section. These are not necessarily bugs, more so, opportunities for improvement using JS.

## Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsdalsosa.github.io%2FHeadshot-Photography)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fsdalsosa.github.io%2FHeadshot-Photography%2F&usermedium=all&vextwarning=&warning=1)

## Lighthouse Testing

The website was also put through Lighthouse testing and passed all tests with a green result.

<details><summary> Lighthouse Results </summary>

![Lighthouse testing](docs/images/lighthouse.png)

</details>

There was a recommendation relating to changing the jpgs to webPs. I tried this but the quality of the images was drastically reduced so I changed back to jpg.

There was another recommendation relating to changing the cache but this was on the server side.

There was a recommendation relating to images not having a width and height. Images were set to 100% for responsiveness. 

## Color Contrast Testing

The website was also put through colour contrast accessibility validator testing and passed with no contrast issues.

![Color Contrast testing](docs/images/ccav.jpg)

[Back to top](<#contents>)

# Deployment

Deployment was done using GitHub pages. The steps to deploy are as follows: 

  - Open GitHub repository, 
  - Navigate to the Settings tab
  - Click pages link in the left column
  - In the source section drop-down menu, select the Main Branch
  - Click save
  - The page will be automatically refreshed with a link to the deployed website. 

The live link can be found here - https://sdalsosa.github.io/Headshot-Photography/

[Back to top](<#contents>)

# Credits

Trump Win and Lose image was modified from the original image found on Greg Fuzion's [blog](https://gregcfuzion.files.wordpress.com/2017/07/trump.jpg)

favicon image was taken from [nicepng.com](https://www.nicepng.com/ourpic/u2q8a9u2e6e6a9r5_donald-trump-donald-trump-pixel-art/)

Trump sprite was inspired by a gif from the [Haze Trump site](https://www.paulmitchellkelly.com/portfolio/praise-haze-trump)

Reporter sprite was created using [RPG Character Creator](https://store.steampowered.com/app/1154430/RPG_Character_Builder/) on steam



[Back to top](<#contents>)

## Developer

* Alan Egan - Junior Software Developer at Code Institute

[Back to top](<#contents>)