# FIFA World Cup Quiz

The FIFA World Cup Quiz website is an interactive page that offers the user the change to test their world cup knowledge and at the same time learn something new thanks to the history section.

The page is designed to present the user with the quiz first, giving them the chance to then have a look at the history and trophy history sections thank to the menu bar and the links at the end of the quiz.

![Responsive Mockup](/assets/readme-docs/responsive-devices.jpg)

## Features

- **Navigation Bar**

    - The Nav Bar is consisting of the logo on the left side and a sliding menu on the right.
    - The sliding menu is opened by clicking the +Menu icon.
    - It allows the user to easily navigate the website and it's consistent in both main pages.

![Nav Bar 1](/assets/readme-docs/header1.jpg)
![Nav Bar 2](/assets/readme-docs/header2.jpg)


- **Landing Page**

    - The landing page consist of a brief introduction to the quiz and the start button.
    - Very direct design to let the user start the quiz as soon as possible.
    - The background is a football pitch grass and it's consistent throughout the website.

![Landing Page](/assets/readme-docs/landing-page.jpg)


- **Quiz Area**

    - The quiz area consist of the question and the four possible answers, and the lives count and question count at the top.
    - The user has 3 lives to reach the end of the quiz, which consist of 10 questions.
    - The answers buttons are responsive, they turn red for wrong answers and green for correct ones.
    - At the end of the quiz the user will get a message, this message is different depending on the user result.

![Quiz Area](/assets/readme-docs/quiz-area.jpg)
![Quiz Win](/assets/readme-docs/win-game.jpg)
![Quiz Lose](/assets/readme-docs/lose-game.jpg)


- **Wolrd Cup History**

    - The history section consist of a brief paragraph with the history of the world cup.
    - There is a pop up section for the history of the trophy, activated by clicking on the trophy itself.

![History](/assets/readme-docs/history.jpg)
![Trophy History](/assets/readme-docs/trophy-history.jpg)

## Design 

- The design of the page didn't take me long, I kept the visual features at a minimun, spending more time designing the functionality of the quiz.
- Below are the wireframe from where I started.
- The biggest challenge was probably the responsiveness on different devices, as each section required lots of work with media queries to look appropiate.

![Wireframe 1](/assets/readme-docs/wireframe1.jpg)
![Wireframe 2](/assets/readme-docs/wireframe2.jpg)

## Testing

- I tested this website without finding issues on three separate browsers: Chrome, Safari and Firefox.
- The website is responsive to different screen sizes, I tested this using the chrome developer tools.
- I confrimed that all the text content on the page is readable and understandable at all screen sizes.

## Bugs

- The biggest challenge was the implemention of the lives count and how to make the website react when all lives are lost, I kept having issues with the javascript code; i solved it by implementing a 'correct answers' array to check each answer against and that did the trick.
- Another bug i found was that the sliding menu was not opening on the first click but on the second, i solved it by setting the translateX property through javascript before adding the event listener and that did it.
- No unsolved bugs.

## Validator Testing

- **HTML**
    - No errors were returned when passing through the official W3C validator.
- **CSS**
    - No errors were returned when passing through the official W3C validator.
- **Javascript**
    - No errors were returned when passing through the official JS validator. 
- **Accessibility**
    - I confirmed good accessibility of the page by running it through Lighthouse.

![Lighthouse Score](/assets/readme-docs/lighthouse-score.jpg)

## Deployment

- The site was deployed to GitHub Pages. The steps required are as follows:
    - From the GitHub main repository, navigate to Settings page.
    - Locate the Pages section.
    - Here, select Main Branch from the drop-down menu.
    - Once selected, GitHub will generate a link to the complete website.

The live link can be found here - https://totes7.github.io/project-portfolio-two/

## Credits

- The background image was taken from Pexels.
- The questions were taken from Sporcle.com.
- The history and trophy history paragraphs were taken from Wikipedia.