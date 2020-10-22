# JavaScript Challenge (Grade: A-)
 
### Table of Contents:

 1. [Project Goals](#project-goals)
 2. [Tools and Solutions](#tools-and-solutions)
 3. [Outcomes and Lessons Learned](#outcomes-and-lessons-learned)
 4. [App Screenshots](#app-screenshots)
 5. [Coding Screenshots](#coding-screenshots)

## Project Goals
With this project, I set out to master <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>, a programming language that controls the client-side behavior of websites and web-based applicaitons. JavaScript is what makes individual sites and the <a href="https://en.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a> interactive. I was provided with a dataset of UFO sightings for the assignment, and I was tasked with designing a new webpage, populating a dynamic table with the data, and creating interactive data-entry fields that allowed a user to perform searches and other table manipulations.

## Tools and Solutions
Most of this project's tasks focused on <a href="https://www.computerhope.com/jargon/e/event-listener.htm">event listening</a>, a category of interactions that take place between JavaScript and <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>. Creating an event-listening function in connection with a particular HTML object allows JavaScript to execute upon the event's occurence. In the first part of the project, that event was the user's entry of a date. I <a href="https://github.com/sonder74/javascript-challenge/blob/master/UFO-level-1/static/js/app.js">programmed JavaScript</a> to use that entry as a filter on the table data, providing the user with table rows that matched his or her date. The bonus portion of the project required the simultaneous use of multiple user entries, in multiple HTML fields. I attempted to program <a href="https://github.com/sonder74/javascript-challenge/blob/master/UFO-level-2/static/js/app.js">a complex series of JavaScript conditionals</a> to handle these events, but unfortunately I was not able to successfully implement the code.

## Outcomes and Lessons Learned
Despite my difficulties with the project's bonus assignment, I had a great time learning the basics of JavaScript and attempting to apply them to a live website. I realized that JavaScript is what makes websites fun and useful, and I look forward to using it more routinely.

## App Screenshots
![scrape_page_1](screenshots/scrape_page_1.png)
<br>
![scrape_page_2](screenshots/scrape_page_2.png)

## Coding Screenshots
![mars_scrape](screenshots/mars_scrape.png)
<br>
![mars_flask](screenshots/mars_flask.png)









# JavaScript Homework - JavaScript and DOM Manipulation

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this... right? The planet Earth needs to know what we have found!

## Your Task

### Before You Begin

1. Create a new repository for this project called `javascript-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the Javascript challenge. Use the folder names to correspond to the challenges: **UFO-level-1** and **UFO-level-2**.

4. Add your **html** files to this folder as well as your static folder containing your javascript. This will be the main script to run for analysis.

5. Push the above changes to GitHub or GitLab.

### Level 1: Automatic Table and Date Search (Required)

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories (Optional)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

- - -

**Good luck!**

- - -

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
