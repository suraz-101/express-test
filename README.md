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

    Now, if we need to run project using nodemon then we can run => npm run dev ( nodemon index.js starts )

    if i run "npm run dev" then project run automatically after save but if we run "npm run start" then we need to run command everytime after some changes on the project

=> create .gitignore file and include node_modules and save it to ignore node_modules folder

=> npm i dotenv --save

# Day - 25 : Express Hello World and Route Building

METHODS

    GET => Fetch data from server to client

    POST => Create new data (client to server)

    PUT => Update more than one data of existing data (client to server)

    PATCH => Just update single data fo existing one (client to server)

    DELETE => Remove existing data from server (client to server)

    - Methods aer usefull to build URL .

# Day - 26 : Routing and URL building

- URL building using methods and URI

- Data Sending Mechanism (FrontEnd to BackEnd)

  => Params ===> localhost/:id
  => querry ===> localhost/?id=1&name=suraj
  => body ===> {"propertyName1" = "Value1", "propertyName2" = "Vlaue2"}
  => headers

- To use body as request we need to include following code in our index.js file

        => app.use(express.json);

- we can use above mentioned mecahnism to view data sent from request from frontend to backend

        => req.params;
        => req.body;
        => req.headers;
        => req.querry

# Day - 27 : Routing and URL nuilding

- Learned about folder structure

        => Index.js --> entry point
        => Env --> holds the secret keys
        => public --> holds the public assets like css,js,images
        => Routes --> holds the routing detail
        => Services --> hold the third party services call like nodemailer
        => Utils --> holds the simple js function like text parser, number parser
        => Views (optional) --> holds the UI part
        => Documentation --> holds the API documentation
        => __tests__ --> holds the unit test cases performed on API/controllers
        => Modules --> holds all the core business logic like model, controller etc.

# Day - 28 : Error handling and static files
