My biggest challenges:

1. I found the UI of StoryBlok very confusing. The naming of the content took some time getting used to. I felt like I was clicking all around trying to create content and structure it the way I liked.
2. Trying to use all the features of Storyblok on this boiler plate created a couple of problems. Their tutorials seemed to explain one way of things but not really a way to adapt it to this boilerplate. One of the problems I had was using the markup feature on the rich text editor. I had to sort of hack it by going through a long list in a JSON array to pull the information I needed in order create url links to other pages. I also hacked away on printing multiple modules in turn but had problems structuring. I basically created a logic to print them in order. I kept the code for this on canceledProjectsPageCode just incase you wanted to look at.
3. Most frustrating was deployment and not because it was hard but because I had spacing placed between my quotes around my storyblok key. It took way to long to find that error and figure out why my slugs werent working. Simple but very annoying. :D

My key learnings:

1. I understand how CMS works. I probably will not use a CMS for a small project but for something big it seems to work very efficiently. Id like to dive further in to Storyblok without this boilerplate and build from the ground up.
2. Allmost all undefined errors are the caused by capital casing. Check a million times and have a standard.
3. This project also helped me to learn through documentation rather than tutorials or classes. I would always avoid documentation for some reason. That was a mistake I guess.

# FED21 Data Interaction

Boilerplate using React, Next.js and Storyblok.

## Prerequisites

- NodeJS 10.X+
- Now (npm install -g now)

## Application set-up

- You can find all client-side code in `pages/...`
- You can find all server-side code in `pages/api/...`
- This set-up is specific to Next.js and you can find more info about it in the [Next.js documentation](https://nextjs.org/docs), specifically [here](https://nextjs.org/docs/api-routes/introduction).

## Storyblok

This application is using a Storyblok Test-Environment which I created for you. In order to add your own content and modules, you need to create an account with Storyblok and change the API token in `react-storyblok-next-boilerplate/pages/api/page/[slug].js`.

## Components

For now I only added two example components (Headline Module and Paragraph Module), which I also set up inside the Storyblok space. You can add many more! :)

## Available routes (for now)

Available slugs (defined by Storyblok):

- [localhost:3000/welcome](http://localhost:3000/welcome)
- [localhost:3000/home](http://localhost:3000/home)

## More Documentation + Build-Up Tutorials

- [Introduction to Storyblok](https://www.storyblok.com/docs/Prologue/Introduction)
- [Advanced - The Complete Guide to Build a Full Blown Multilanguage Website with Next.js](https://www.storyblok.com/tp/next-js-react-guide)

## Tooling

This application uses SASS so that we can write modular CSS.
The CSS you are writing for each component is going to be scoped to these modules only and not affect any other parts of the site.

## To run (development)

```bash
now dev
```

## For later (you will get more info on this):

## To deploy to live

```bash
now
```
