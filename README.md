# Fish in the Sea - An Optimists Take

## Background and Overview
  Fish in the Sea is a data visualization tool for people to view their chances at finding love in San Francisco.

  Users will have an initial view of all people living in San Francisco and can filter their results based upon results from census.gov's public api.

  Users will also be given an opportunity to further narror their results using arbitrary data, such as 'how many of those people have green eyes', etc.

## Functionality and MVP

  In Fish in the Sea, users will be able to:
    * [] Filter results in any order they choose
    * [] Unfilter results in any order they choose
    * [] Reset their results without refreshing the page

  Bonus:
    * [] Hear sound upon filter
    * [] Hear different sound upon unfilter
    * [] Mute sounds

## Wireframes

  The app will have a single screen with filter and reset controls on the left,  and an overall tally of chances up at the top.

  Links to github and linkedin will be provided on the bottom. A mute sounds button will be on the top right.

  <!-- ![Wireframe](https://myanagram.herokuapp.com/#/) -->

## Architecture and Technologies

 This project will be implemented with the following:
 * Vanilla javascript for the skeleton
 * `D3.js` for DOM manipulation
 * Webpack to script bundling
 * Census.gov API
 * NOTE: Simple audio rendering utility needed
 * NOTE: Not sure what other technologies will be necessary

## Implementation Timeline

  ### Day 1 - Wednesday Evening - Build skeleton, including webpack. Goals:

    [] Setup repo and dev branch
    [] Have webpack working
    [] Figure out what technologies are needed on the backend and have a basic structure laid out

  ### Day 2 - Thursday - Flesh out the Census api. Goals:

    [] Figure out which api data to pull
    [] Get all the routes and so forth working

  ### Day 3 - Friday - D3 and logic. Goals:

    [] Get D3 working with fake information, no filters
    [] Get D3 working with fake information, fake filters
    [] Get D3 working with real information, real filters

  ### Day 4 - Saturday - D3 logic overflow and Deploy. Goals:
    [] Fix any D3 overflow -- potential for 4-6hrs of this
    [] Deploy to Heroku

  ### Day 5 - Sunday - Styling and bug fixes. Goals:
    [] Style my page
    [] Get filter drop downs on filters working
    [] Get it presentable


