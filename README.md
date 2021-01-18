# MCIT On-Campus 2021 Winter Hackathon  
### Project/Team Name: PennPages
https://penn-mentoring-app.web.app/
##  

**Team Members**  Use format below  
Name | Year
------------ | -------------
Sangik Han | 2022
Steven Wu | 2022

##
## Initial Project Proposal

**General Idea**  - A general description of what your software will do  
We hope to create a web app that can help foster more professional learning and mentorship across the Penn community, potentially including undergraduate students, graduate students, and alumni. Our basic initial idea is to provide an interface for members to sign in/sign up and input basic information (organizations and roles they're interested in learning about, as well as organizations and roles they've worked at); we'll create a simple algorithm to match members who are interested in an organization/role to members who have experience in that organization/role. We also plan to enable to members to input their hobbies and incorporate this into the matching process to potentially help making the networking easier. Further, we plan to have the members input some other settings and preferences, such as their email address, which groups they'd like to be matched with (undergraduate / graduate / alumni), and maybe how frequently they'd like to be matched with other people (e.g., x # of times per month/year).

**Anticipated Stack** - What technologies do you anticipate using?  
* Front-end: 
    * React (we'll also potentially use other React-related supplementary libraries such as React-Redux)
    * Semantic UI or other ready-made components for styling (instead of creating our own CSS/HTML templates)
* Back-end: 
    * Firebase - For hosting on a server, providing authentication, query the DB of users, image storage, etc.

**Presentation URL** - At the end of the hackathon, upload your presentation to YouTube/Vimeo (unlisted) and place it here.  
https://youtu.be/kwFrvQmrMjI

##
## Final Submission Review

# Inspiration
We wanted to create a web app that could help connect members of the Penn community and promote more mutual professional learning and mentorship. Also, from a technical side, Sang and I were both interested in learning how to use React and JavaScript for front end web development and how to connect an application with a backend.

## What it does
Our web app provides an interface for members to sign up/sign in and input basic information - which Penn group they belong to (undergraduate student, graduate student, alumni), organizations/roles they've worked at previously, and organizations/roles they're interested in learning about. The web app also provides a directory where members can browse all the other users and their professional profiles.

## How we built it
* Front-end: React/JavaScript/CSS/HTML, custom UI layouts from Semantic UI
* Back-end: Firebase for hosting on a server, providing authentication, storing user information in a database, and providing API's for verifying authentication and reading from/writing to the database

## Challenges we ran into
There were a lot of challenges, especially because we were both using new tools on both the front and back end. For both of us, this was the first time we tried to use React for any project and connect a program with a back end. As a result, an obvious challenge was just having to pick up a new language framework and syntax on the fly to try to get the web app to do what we wanted. Aside from just coding challenges, there were also many technical hurdles in learning how to just set up the Firebase backend, and then figuring out how to use React/JavaScript code to integrate its authentication and database services. For example, one particular challenge that took a long time to solve figuring out how to update user information in the database based on their input and then retrieve & display the saved information when a user signs back in with proper state setting in React. Finally, we also encountered some challenges learning how to style/format the webpage, as we don't yet have much experience in CSS. 

## Accomplishments that we're proud of
* For both of us, this was our first project developing a basic full stack application including both front and back end
* Learning how to build a web app using React
* Setting up a Firebase backend and then figuring out how to integrate its authentication and database services (reading from and writing to the database)
* Hosting the web app on a website

## What we learned
We learned a ton from this project! Here are some of things we gained valuable experience in:
* Coding with React, JavaScript, CSS, and HTML
* Setting up a backend to support a web app with authentication and a database
* Setting up and using Firebase to build and deploy an app. We definitely plan to use this more in the future for personal projects!
* Hosting an app on a website
* Using UI frameworks like Semantic UI
* Collaborating on GitHub

## What's next for PennPages
We have many ideas on how to improve the web app with more time! We've listed some of them below: 
* Providing an algorithmic matching service for users that can help automatically connect users who have experience in a certain company/role with users who are interested in learning about that company/role (rather than just providing an entire directory of members that the users can browse through)
* Providing a way for users to contact each other, such as displaying their email addresses and potentially sending email notifications when other members would like to connect with them
* Allowing users to enter more profile information, such as images and hobbies
* Enabling users to input setting preferences, such as which groups they'd like to be connected with (undergrad / grad / alumni) and how frequently they'd like to be contacted (e.g., x # of times per month)
* Improving the style and formatting of the website, particularly with Penn-specific images
