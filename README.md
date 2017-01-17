#Play with GitHub API
This small API using the GitHub API returns the top list of contributors by location depending of the number of repositories.
Libraries used : [BluebirdJS](http://bluebirdjs.com/), [Octonode](https://github.com/pksunkara/octonode), ExpressJS

### How to run it

Clone the repository and run the following command line :

    npm install
Do not forget to modify the file "*env.json*" with your username and password GitHub

####Find top 30 contributors by location

    http://localhost:3000/contributors/:location
####Find top X contributors by location

    http://localhost:3000/contributors/:location/:limit

