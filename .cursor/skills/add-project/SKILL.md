---
name: add-project
description: Adds a new paper entry to the homepage and creates or links a project detail page.
---

## Usage

* Understand the project from the provided description. If no description is provided, do nothing and ask for one.
* If no external project page was provided, ask if one should created.
* Ask user for all relevant links, conference, etc.
* Add the new project to @index.html.
* If there isn't an external project page, then make a new project page in projects/. Read projects/evocube.html to see an example. Do not make up the bib, leave it as todo.

## Interaction
* If you need something from the user print -- ACTION REQUIRED -- in a way that's hard to miss for the user.
* You can make up image names, but tell the user at the end which image paths need to be filled.
* Try to infer the necessary links from the existing ones in @index.html (especially authors), but if some cannot be inferred, ask the user.

## Style

* Do not use — or ;.