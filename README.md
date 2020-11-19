# Build_Api_Node

creation of our REST API application. This type of application is currently being developed by numerous projects and companies, as it provides the benefit of creating an application that focuses solely on
on the data feed of any client-side application.

Nowadays, it is quite common to create web applications and or mobile applications that consume data from one or more APIs.

## Introduction to Express
It’s focused to work with views , <b>routes</b> and <b>controllers</b> , only models is not handled by this framework, giving you the freedom to use any persistence framework without creating any incompatibility or conflict in the application.

This is a big advantage, because there’re a lot of <b>ODM</b>
(Object Data Mapper) and also <b>ORM</b> (Object Relational Mapping) available. You can use anyone with Express without problem, you just need to load this kind of module, write some <b>models</b> and
use them inside the <b>controllers</b> , <b>routes</b> or <b>views</b>.

To sum up, you can see a list of Express main features bellow:
  1. Robust routing;
  2. Easily integratable with a lot of template engines;
  3. Minimalist code;
  4. Works with middlewares concept;
  5. A huge list of 3rd-party middlewares to integrate;
  6. Content negotiation;
  7. Adopt standards and best practices of REST APIs;
  
  # Pilot project source code
 The currenty Node.js version does not support ES6 perfectly, but we can use a module that emulates some of the resources from ES6/ES7 to make our codes cooler. To do this, we are going to install the babel . It’s JavaScript transpiler responsible to convert a ES6/ES7 codes to a ES5 code only when the JavaScript runtime doesn’t recognize some ES6/ES7 features.
 
To use all features from ES6/ES7, we are going to install babel-cli and babel-preset-es2015 modules in the project, running this command:
```
npm install babel-cli@6.5.1 babel-preset-es2015@6.5.0 — save
npm install express@4.17.1 — save
npm install consign@0.1.6 — save
```
Installing Express, we’ll create our first code. This code is going to load the express module, create a simple endpoint using the GET / via function app.get(“/”) and start the server in the port 3000
using the function app.listen() . To do this, create the app.js file 

```javascript
import express from "express";
import consign from "consign";

const app = express();

consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("libs/boot.js")
    .then("routes")
    .into(app);
```
REST APIs works with the concept of creates and manipulates resources. These resources are entities that are used for queries, entries, updating and deleting data, by the way, everything is based on manipulating data from resources.
