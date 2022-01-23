# Grey's House of Games Frontend Web App

## What is this?

This is the git repository (repo) of a *portfolio project* by me, Grey Milton. It was created in late November 2021 while undertaking a Full-Stack JavaScript Bootcamp with [Northcoders](https://northcoders.com) (UK).

*The project is a frontend web app*, and was created primarily using React.js, JavaScript, CSS and Axios. It was actually created to use with a pre-existing API that I also built in the bootcamp: an API of board games and reviews, that mimicks a real world backend service (such as reddit).

<br>
<br>

>## Link to the deployed web app:

I have deployed the web app online with Netlify. You can [access it here](https://house-of-games-frontend.netlify.app/).
<br>
<br>

## Links to the API it uses:

As mentioned above, this web app accesses an API I created for an earlier project. You can find [the API's repo on GitHub here](https://github.com/GreyMilton/house-of-games-api), and you can find the [live hosted API here](https://house-of-games-api.herokuapp.com).

## What does the Web App do?

It is basically a mini board games review site. The home page is where all reviews found on the site are displayed. They can be filtered by category, and ordered and sorted by a number of different fields.

When a user clicks on one of the reviews, they are taken through to a new page where they can view the review in its entirety. Here they can also view, sort and order a number of comments users have made.

If the user is logged in, they can vote once up or down on the review. They can also post a new comment, provided it isn't empty, or delete old comments of their own that they no longer wish to be displayed.

User's can log in or log at as they wish. The site also remembers the last user until a refresh.

<br>
<br>

------------------------------------------------------
<br>

# How can I use this repo?

If you'd like to install and run this git repository on your own machine, rather than only viewing the repo on GitHub, or than by accessing the deployed version of the web app at the [link above](https://house-of-games-frontend.netlify.app/), you will need to:

1. Install Node.js on your computer.
2. Fork and clone this repo to your computer.
3. Install npm dependencies.
4. Start the app running locally.
5. Open the local app in your browser.

>***Please note*** All the steps in this README assume you are using a relatively up-to-date `apple mac computer`. Additional steps may be required to get this repo running correctly on a windows, linux, or other operating system.
<br>
<br>

## 1. Install Node.js

If you do not already have Node.js installed on your machine, you will need to install it in order to run this repo correctly.

You can [download Node.js here](https://nodejs.org/en/download/).

Please ensure that you have at least `Node version v16.9.1` to make sure that it runs correctly.
<br>
<br>

## 2. Fork and clone this repo

Provided you have a GitHub account (free), you can `fork` this repo (optional) by clicking the `fork` button in the top right of your window [where you are now](https://github.com/GreyMilton/house-of-games-frontend). This will copy all of the repo information into a new repo attached to your own GitHub account.

To then `clone` this Forked version (copy to your own machine), click on the big green button `Code` also towards the top right of your screen (but further down and in), and copy the link found there. (Or you could simply copy the current url in the address bar).

Type `git clone` into your computer's terminal, and paste the copied url next to it. Then press enter:
`````
git clone https://github.com/GreyMilton/house-of-games-frontend
`````

Now open the repo with your coding program of choice ([VSCode](https://code.visualstudio.com/) is a good one).
<br>
<br>

## 3. Install npm dependencies

This repo has a number of npm dependencies it requires in order to run smoothly. In order to set these up you will need to run these two commands:

`````
npm init
`````

`````
npm install
`````

## 4. Start the app running locally

In the project directory, simply run:

`````
npm start
`````

This will start running the app in the development mode. If you make and save any edits, the app will refresh with changes. You will also see any lint errors in the console.

## 5. Open the local app in your browser.

Running the above command in `step 4.` may well open your default browser automatically, and display your local version of the app.

If your browser does not open, you can open it yourself and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

When the app refreshes on a saved edit, the browser app will also refresh the current page to display the changes.