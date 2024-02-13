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

# Day - 28 : Error handling and static files and Middlewares

     =>   try{

        }catch(err){

        }

    => throgw new Error();

    => try{

            Code block to run

        }catch(err){

            Code block to handle errors

        }finally{

            Code block to be executed regardless of the try result

        }

    Express, by defaukt does not allow us to server static files so we need to enable it using built-in middleware

    app.use(express.static('public))

# Day - 29 : Express Practice

- Questions Practicing

# BASIC DATABASE WEEK

# Day - 30 : Express Database Handling

# Day - 31 : Database Operations

# Day - 32 : callback, callbackhell, promises, async await and mongodb connection

# Day - 33 : CRUD Operation

    - using mongoose npm package
    - import mongoose
    - get schema
    - write down properties from object (Schema)
    - create model from schema

# Day - 34 : Data Validations and References

    - Validations

        -install Joi npm for validation

# Day - 35 : Express Blog Managemenet System (User Login)

    - User Registration
    - User Login
        -> Create login controller
        -> create post route as /api/v1/users/login
        -> in controller, get req.body (email and password)
        -> check if user exists in the system or not
        -> if user exist, get hanshed password from database
        -> compare user provided password with hashed password
        -> if result false, throw new Error ("Email or Password mismatched")
        -> Additional work

# Day - 36 : User Authorisation

    - User Authorisation continue on User login
        :
        ->  System needs to send something back to user (access_token)
        -> cookie, session, Json web token (JWT) => Three methods of authorisatin

        ================instal JWT==================
        - install npm package jsonwebtoken => npm i jsonwebtoken --save
        - jsonwebtoken, 2 utility function (token generator/ token validate)
        - create a toekn.js utility file
        - Add secret and duration in env file

        - if user successfully logsin, send the token to the user through login api
        - send the token for every request in req.headers
        - checkRole middleware update using token validate utility function
        - if false, permission denied error throw
        - if true, next()

# Day - 37 : User Password Actions

    - whenuser click forgate password
        => First, email need to be verified and if email exist in database
        => Then, generate an OTP code using math.random
        => store that otp in database collection
        => send email with otp code to the specific email address

        => In next step after user insert the otp code and new password into the file
        => extract the specific user from the database using email and store in a variable
        => compare the toke that user send and the database of the specific user from the databas
        => if otp doest not match then throw new error "invalid otp code"
        => else hash the password using bcryptjs
        => then update the password field into the database collection of specific user using updateOne and opt as empty
        => if update is failed then throw new error "password update failed"
        => else return "password is successfully changed, CONGRATULATIONS!!"

# Day - 38 : User Password Manipulation

- Reset Password
- Change Password
