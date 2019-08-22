# Usage / Så här gör du

* As a first step you need to clone this repo into some local folder of your choice on your computer. 
* If you have cloned this repo you should open a terminal or git bash or similar and navigate to your local directory you created when cloning, type the following git command in your terminal: git pull
* Since this repo will be updated frequently be sure to run a: git pull at the start of each lecture.
* In order to view a certain commit on your computer and to be able to test the code choose the commit you are interested in from the list of commits and copy the identifying string to your clipboard.
* run the following command in your terminal in order to change your local files to a certain commit point: git checkout longidentifyingstring
* Where the (longidentifyingstring) should be replaced with the real string, for instance: 847ae216b4b6203cda2936778e265dcf87fe225c

# Lectures

## Highly recommended
This is a course covering some of the most relevant concepts in todays world of web-development. 
practicing and learning how to effectively gain knowledge on a specific subject through searching the web is a central part in the daily routine when employed. The code in this repo with the individual commit messages as well as the notes in this document covers all you are expected to understand throughout the course.
As a minimal requirement you are expected to understand the basics of the concepts covered for instance what NPM is. 

## Lecture 1

### Setup of local environment

* Recommended setup: Git, Node.js, NPM, an editor of your choice for instance VS code, Sublime or Atom.
* We will be using the create-react-app node package in order to quickly spawn new projects ready to go with Webpack and Babel.
* In order to use the create-react-app we need to install it, the easiest way is to install it globaly (when installing a package through NPM you can add the -g flag) the command is: npm install create-react-app -g
* When you install a package through NPM without adding the -g flag the package will be downloaded into a directory called node_modules. This would be the standard way of installing a dependency relevant for your particular project.
* If you add the -g flag you will be able to use the library regardless of folder path.
* Depending on your OS and your local configuration you might need to adjust permission settings when installing a package globaly. Google your way to the solution relevant for your particular OS. 
* Creating a new react project is achieved through the command: create-react-app thenewprojectsname

### React

* To start labbing after we have created a new project with create-react-app we remove all the files generated within the folder src, we then add a new file naming it index.html
* In our index.js we import the react as well as the react-dom libraries, we create a componet and call the react-dom render function passing in our component as well as where we want to render our application. Our project has a folder called public which contains index.html, this file has an element with id: root, this is the element we want to select as the place where our application gets rendered.
* JSX - basic syntax and usage - similar to HTML (not the same) for instance to add a class attribute to an element we use the attribute className instead of just class. This is due to the fact that class is a reserved word in JS.
* We create components to divide our application into smaller parts each responsible of rendering some part of our GUI and handeling user input relevant for that piece of markup
* We can create functional as well as class-based components. 
* We typically use a functional component for small components which do not utilize component level state. With a class-based component we have the possibility to initialize component level state.
* When initializing state in a class-based component we do this in the constructor method. There is however a shortcut thanks to our project setup through create-react-app and its dependencies. Instead of typing out a constructor and initializing our state object within it we can simply create our state-object without a constructor and a constructor will be created for us.
* We typically split up our components into seperate files. In order to use a component in a seperate file we need to export the component within the file in which it exists, and we need to import the component in the file using it.
* A patterns seen frequently is to create a Components directory within our src-dir and put our files there. 
* A common naming convention is to name the containing file for a certain component the same as the component name, starting with a capital letter, the foldre Components should also start with a capital letter.
* There are named exports as well as default exports, if we want to import one or the other the syntax is slightly different for a named or default export.
* React uses a system called props in order to pass data down from a parent component into a child.
* When we want to pass some value down into a component we choose a suitable name for that particular piece of data and create an attribute/property on the component when used within a parent components returned JSX.
* The value we are passing down is surrounded by curly braces as long as its not a fixed string we want to send down.
* We can pass Objects as well as primitive types as values for our props, we can also pass functions.
* We access this data from within the component through typing this.props.theattributenamewechose from within a class-based component, or simply props.theattributenamewechose from within a function-based component.
* If our component is a funtion-based component we need to add a parameter to the function definition typically called props.


## Lecture 2

* The JSX returned from a 
* Array as well as Object destructuring are frequently seen and used in any React project, a typical use would be to break out the individual keys of the props-object specified in a components funktion definition. 
* We can use the library material-ui to get get some functionality and styling for free when designing our app.
* The library Axios is often used in order to send requests from our application.
* When creating a class-based component we can create utilize component level state. To set some state relevant to our component we need to initialize the state, and call the method setState everytime we need to update the state to something new.
* Calling setState will trigger the component to re-render. 
* A re-rendre renders the component itself but also the components children.
* setState takes an object with the property or properties we want to change and their new values. This is what is sometimes referred to as an additative process, in other words, we do not overwrite other properties not present in the object we pass to setState.
* A class-based component has access to something called lifecycle-methods, most of these are optional, but we can use them within our component in cases we want more fine-grained controll over when we would like to execute some piece of functionality at a given point in the components lifecycle, for instance directly after a component has mounted. 
* React uses something referred to as a virtul DOM, the virtual DOM is used by React to figure out the minimal amount of DOM-operations needed in order to keep the components representation up to date.
* Reaching into the DOM and fetching a value is expensive so we often strive towards something referred to as controlled elements, simply put a controlled element is one in which its current value is stored in React, an uncontrolled element only has its current value in the DOM.
* We can use the .Map function in order to iterate over an array and apply some piece of functionality for every iteration, subsequently giving us the power/possibilty to return one or more JSX elements for every iteration. 
Typically used when rendering out list items from some array of data.
* Passing data from a child to a parent can be achieved through defining a function in the parent which will function as a callback function. This function is passed into the component as a prop and invoked within the child component giving us access to the result in the Parent component.
* We use event handlers to run functionality upon user interaction.
* When we style a element inline we pass in a JSON containing the css rules we which to apply, when the css-property is a two word property for instance background-color we remove the dash and camelsase it, so backgroundColor instead of the ordinary background-color.

## Lecture 3

* We can add navigation to our project through the use of the package: react-router-dom
* The exact attribute can be used to limit the amount of rendered components while navigating.
* We use something referred to as Link in order to navigate from one "page" to the next. 
Behind the scened we are creating an <a element with a modified behaviour altering the default behaviour of sending a new request to the server asking for index.html.
* Sometimes we want to alter the behaviour of some event, for instance form submission.
* The this keyword is tricky, avoiding scenarios where it ends up beeing undefined can be achieved through the use of arrow-functions.
* In addition to the creation of the nav-bar in lecture 2 we define a function that is passed in to our search-component as a prop in order to once again alter the state of the parent from whithin the child.
* In order to pass one or more props into a component where the component is rendered as a result of matching a certain navigation route we need to use the attribute: render
