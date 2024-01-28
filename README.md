# => Starting expressJs framework to build a project

# Day - 24 : ExpressJS (Evironment Set up)

STEPS TO CREATE PROJECT
=> create git project

=> git clone git project

=> open git project in vscode (README.ms is shown)

=> npm init (initialising npm command)

    version : (1.0.0) => version release => shows the relaease version of our project

    - major release : minor release : patch/ fix note

        entry point is always index.js which keeps the information of each and every part of the project works like Table of Content

=> npm i express --save (installing express package in our project)

=> npm i nodemon --save-dev (only required during development so we used -dev which will show this package in dev-dependencies )

    Update "test" inside scripts and replace it with "dev" and value as "nodemon index.js" and add another as "start" and value as "node index.js"

    Now, if I need to run project using nodemon then i can run => npm run dev ( nodemon index.js starts )

=> create .gitignore file and include node_modules and save it to ignore node_modules folder
