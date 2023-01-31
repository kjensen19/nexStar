<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]




<h3 align="center">MN Brewery Finder</h3>

  <p align="center">
    Brewery finding app for MN
    <br />
    <a href="https://github.com/kjensen19/nexStar"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kjensen19/nexStar">View Demo</a>
    ·
    <a href="https://github.com/kjensen19/nexStar/issues">Report Bug</a>
    ·
    <a href="https://github.com/kjensen19/nexStar/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `kjensen19`, `nexStar`, `https://www.linkedin.com/in/kyle-jensen-solutions/`, `gmail`, `kjensen19`, `MN Brewery Finder`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To setup this project locally:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

 
1. Clone the repo
   ```sh
   git clone https://github.com/kjensen19/nexStar.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file (will not be tracked due to .gitignore),
    then add:
   ```js
   const SERVER_SESSION_SECRET = 'ENTER YOUR SECRET HERE';
   ```
   Add a string of characters to enhance salting features
4. Create a database titled 'nexstar' or change the config in pool.js (ensure that all variables match your configuration)
5. Navigate to local project folder in one tab of the terminal (start Node):
    ```sh
        npm start server
    ```
6. In another tab, should open a new window or tab at localhost:3000: 
    ```sh 
        npm run client
    ```
7. If you are modifying CSS need to rebuild by running(watch flag keeps rebuilding until you ctr-c) in a third tab: 
    ```sh
        npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

A basic app that queries [openBrewery](https://www.openbrewerydb.org/documentation#list-breweries) to generate a list of all MN breweries in their database. Future improvements will add the ability to select a state to query. After logging in or creating an account breweries are rendered 10 per page, clicking the heart adds them to the user's favorites (which can be viewed by clicking favorites at the top), clicking details displays phone number and address, clicking website opens the breweries webpage in a new tab, some url's in the database are not correct for the listed breweries. Users can address this by going to their favorite view, selecting that brewery and clicking edit to bring up a form which will change the local DB version. Users can also add a new brewery (to their favorites) by clicking add and entering the needed information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [✅] Connect to the API and use the returned data as your initial list
    - [✅] Display in a list- need to write async promise array based on intial meta query to collect all data
- [✅] Create a new Brewery(POST)
- [✅] Update a Brewery from the list(PUT)
- [✅] View all Brewery data(GET)
- [✅] Delete a Brewery from the list(DELETE)
- [✅] README
- [✅] Extras
    - [✅] React
    - [✅] Tailwind
    - [✅] Authentication
    - [✅] Pagination
    - [✅] Basic Menu
    - [✅] Mobile
- [ ] Future
    - [ ] Deploy
    - [ ] Testing
    - [ ] Additional states
    - [ ] Detailed user profiles
    - [ ] Detailed user profiles

See the [open issues](https://github.com/kjensen19/nexStar/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>







<!-- CONTACT -->
## Contact

Kyle Jensen - kjensen19@gmail.com

Project Link: [https://github.com/kjensen19/nexStar](https://github.com/kjensen19/nexStar)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
*   Chris M. for all the Tailwind hints and general     
    encouragement.

*   L'Engle cohort for all the support, learning and 
    encouragment.

*   Matt B. for being an incredible instructor and a 
    better human being


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kjensen19/nexStar.svg?style=for-the-badge
[contributors-url]: https://github.com/kjensen19/nexStar/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kjensen19/nexStar.svg?style=for-the-badge
[forks-url]: https://github.com/kjensen19/nexStar/network/members
[stars-shield]: https://img.shields.io/github/stars/kjensen19/nexStar.svg?style=for-the-badge
[stars-url]: https://github.com/kjensen19/nexStar/stargazers
[issues-shield]: https://img.shields.io/github/issues/kjensen19/nexStar.svg?style=for-the-badge
[issues-url]: https://github.com/kjensen19/nexStar/issues
[license-shield]: https://img.shields.io/github/license/kjensen19/nexStar.svg?style=for-the-badge
[license-url]: https://github.com/kjensen19/nexStar/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/https://www.linkedin.com/in/kyle-jensen-solutions/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
