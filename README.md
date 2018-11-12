# README


# Buildable

Inspired by Instructables, Buildable is a fuul stack web applicaition that allows makers to share their personal DIY projects and the steps they took to complete them.  Other users can then browse the growing catalogue of projects and learn from the community of makkers.

Link to live app: (https://buildable.herokuapp.com)

## Technologies

+ Ruby on rails - A framework for building ruby based web apps using a Postgres Database
+ jQuery Ajax - allows asynchronous calls to the backend database without interfering with the front end experience
+ React - Dynamically generates front-end experience allowing for fluid single-page apps.

## Features

#### Projects

Each Project includes a photo of the finished project, the steps required to reach that final stage, and corresponding photos for each step in the project.  Photos are stored using AWS S3 cloud storage allowing for easy uploads and simple, reliable access.  All projects are associated with a user using user_id as the foreign key.

#### Comments
Users have the ability to leave comments on projects saved to the site.  Comments allow users to create a community of makers by asking questions, offering advice, or giving compliments.  Compliments belong to both the project and the user who authored them.  All users can comment on any project.

#### Search
  Search the database for projects matching your interest.  Search currently scans the title of a project, but will soon look at descriptions to find even more possibilities.

## Planned Improvements

#### Replies

  Soon, users will be able to directly reply to comments.  This will remove the need to directly address each comment.  Users will also receive a notification when they receive comments.

#### Videos

  Projects will soon be able to include imbedded YouTube videos documenting their construction.
