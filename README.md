# Web Scraping Challenge (Grade: A)
 
### Table of Contents:

 1. [Project Goals](#project-goals)
 2. [Tools and Solutions](#tools-and-solutions)
 3. [Outcomes and Lessons Learned](#outcomes-and-lessons-learned)
 4. [App Screenshots](#app-screenshots)
 5. [Coding Screenshots](#coding-screenshots)

## Project Goals
This was my most challenging assignment to date! I had to master the art of web scraping, which requires the creation of a <a href="https://www.python.org/">Python</a>-driven program that pulls live data from third-party websites, Twitter accounts, and other online sources. The project's theme focused on the planet Mars and required up-to-the-minute data from the National Aeronautics and Space Administration (NASA).

## Tools and Solutions
To scrape data from NASA's Jet Propulsion Laboratory, Twitter, and other sources, I had to make use of <a href="https://en.wikipedia.org/wiki/Beautiful_Soup_(HTML_parser)">Beautiful Soup</a>, a Python package designed for parsing <a href="https://en.wikipedia.org/wiki/HTML">HTML</a> and <a href="https://en.wikipedia.org/wiki/XML">XML</a> documents. Crafting Python code to locate particular datapoints on complex webpages can be extremely tricky, and I succeeded only after discovering the <a href="https://www.datacamp.com/community/tutorials/python-time-sleep?utm_source=adwords_ppc&utm_campaignid=1565261270&utm_adgroupid=67750485268&utm_device=c&utm_keyword=&utm_matchtype=b&utm_network=g&utm_adpostion=&utm_creative=295208661496&utm_targetid=aud-299261629574:dsa-429603003980&utm_loc_interest_ms=&utm_loc_physical_ms=9028322&gclid=Cj0KCQjw28T8BRDbARIsAEOMBcyqdyggLi4lUipH27YAIpdiHlKZ_lei9cjAy5jYoR2U91hlNKGeg2AaAiA2EALw_wcB">time.sleep()</a> function, which introduces intentional delays into a program's runtime. Once <a href="https://github.com/sonder74/web-scraping-challenge/blob/master/scrape_mars.py">my scraping program</a> was completed, I created <a href="https://github.com/sonder74/web-scraping-challenge/blob/master/app.py">a Flask application</a> and routed the results to <a href="https://github.com/sonder74/web-scraping-challenge/blob/master/screenshots/scrape_page_1.png">a simple landing page</a>, so that the final outcome could be viewed and refreshed via a local server.









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
