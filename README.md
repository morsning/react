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

* The JSX returned from a component needs to start at the same row as the return, however if we wrap our JSX in parenthesis we can return multiline JSX starting at the row below.
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

## Lecture 4

### Redux

Redux is a standalone state management library, we are not limited to using it with React.

When using Redux we use and alter state through a pattern that eliminates some of the bugs we often see in applications through limiting the possible side-effects arising when altering state.

The application state is stored in a single object called the store. The store object is created through utilizing the redux function createStore and passing it our reducers. 

Reducers are  functions we define which takes the previous partial state it governs as well as an action object as arguments, and depending on the state and the action passed in returns the new state. We typically create more than one reducer in our application, and divide our application state into separate sections. Each of these sections are individual leafs of our application state object where each leave is governed by a reducer.
Changing the value of a particular section/leaf of our state object is controlled by logic within the reducer connected to that leaf.

The createStore function used when creating our store object representing the applicaton state accepts only one reducer, sometimes referred to as the root-reducer. However since we are often dividing our state into separate sections through defining multiple reducers we need a way to make all of our individual reducers part of the same Object which we will be passing into the createStore function as an argument. 
This is achieved through the use of redux combineReducers function. When calling this function we pass in a JavaScript Object where we define keys on this object corresponding to our individual reducers which will be the value of each of the keys in the Object.
The key names of the resulting Object will be what we refer to as our applications individual state sections, where one reducer controls the value of that specific section of the entire state object.
The result of calling the combineReducers functoin is passed in as an argument to the createStore function.

As we mention above a reducer takes two arguments, the first one is the state and the second is an action object. Every time we want to change our state we achieve this through dispatching an action on the store Object. The action being dispatched gets passed in to all of our reducers that through their logic decides on however they are interested in that particular action. More precisely the action objects type properties value.
All actions we want to dispatch should be an JavaScript with at least a type property and if we like a payload property.
The values of the type and sometimes the payload properties of this action object will be used by our individual reducers in order to decide upon if and how to update some part of the state.

We do not want to specify an action object, directly passing this to the dispatch function of the store Object, instead we want to use something referred to as action creators.
These are functions we define that typically take arguments when being invoked and return a action object as a result of what we passed in.
So instead of passing in an action Object directly we call an action creator which returns an action Object which is subsequently passed in as an argument when calling the dispatch function.

### React-redux

As mentioned above we can use the redux library by itself, however if we want to use it in our React application we typically use the react-redux library. 
Through the use of this library we have access to a component called Provider , this component can be used to wrap the part of our application in which we want to access the application state object. Typically we wrap the entire App component. The provider component takes a prop called store, we  set this prop to be the result of calling the createStore function of redux passing in our reducers.
Remember that the createStore only takes one root-reducer so when we say that we are passing in our reducers to the createStore function we are more specifically saying that we either pass in one reducer or the result of calling the combineReducers function of Redux.

In addition to the Provider component used to wrap our application we also have access to a function called connect. We use this function in every component interesting in our application state. The connect function takes two arguments, the first is an Object specifying what part of the application state this specific component is interested in. The second argument is an Object specifying which actioncreators are relevant to this particular component.
When passing in the first argument we typically create a function returning this Object rather than passing in the Object directly, this function is often named: mapStateToProps, but the name can be whatever you prefer.
The keys of both the Objects we are passing in are then available as props inside our component.
We use the property-names of the first Object (mapStateToProps) to access the current value of the pieces of the state they represent, and the property-names of the second Objcet (action creators we are interested in) to update the state, remember we never alter the state Object directly we use action creators instead.

## Lecture 5

26/8

* Discussion and examples (JavaScript data types, immutable vs mutable values)

* Exercise
1. In the project react with redux change the reducers to use the array push function instead of the spread operator and inspect the applications behaviour.
2. Add functionality in the calculator component so that we can add any number
3. Use Material UI to change the applications appearance
4. Add functionality for clearing the history

* On to TypeScript

# Deeper understanding

This course is mainly focused on React, with that said we are required to have some knowledge about JavaScript and how it works. Developing a deeper understanding of how JavaScript works will help you write better code with less bugs and smarter solutions for a given problem.

The code we have written so far has utilized a lot of features that are relatively new to JavaScript.
The following will hopefully be somewhat familiar to you and has been used frequently throughout this first part of our course.

* Template literals (Template strings)
`string text ${expression} string text`

* Classes
class myComponent {
constructor(props) {
	super(props);
	this.state = {someProperty: ‘somevalue’}
  }
}

* Destructuring assignment (Array destructuring and Object destructuring)

* Arrow functions () => { statements }

* The spread syntax: someFunction(...someArray)
By using the spread syntax we can expand an array into arguments in a function call.
It is also useful when we want to avoid mutation of an existing Object when changing some set of data representing state.

All of the above was features of javascript was introduced in ECMAScript 2015.

Knowing these features and understanding the terminology used to describe them will both give you a larger toolbox for solving problems but also help help you in finding solutions to a given problem.

In addition to the newly added features of JavaScript mentioned above there’s a couple of other things we need to understand in order to write code behaving as we are expecting.

## JavaScript datatypes

in Javascript there are 8 data types, 7 of them are what we call primitive data types and 1 is not. The primitive data types behave a bit different than the remaining data type.
The seven primitives all define what we refer to as immutable values the last one is mutable.

The primitive data types:
* Boolean,
* Null,
* Undefined,
* Number,
* BigInt,
* String,
* Symbol

The remaining data type is not primitive and is the: 
* Object

When assigning a value of a primitive data type to a variable which we subsequently pass as an argument when calling some function we are passing this variable by value and not by reference. What this means is that the function being called gets the actual value of the variable we are passing in rather then the variable itself. Within the function the parameter assigned this value has no connection to the variable we passed in. Changing the value of this parameter will not affect the value of the variable used as argument in the function call.
In contrast when we call a function passing a variable where the value is of the data type Object we are passing this object by reference. When altering the value of the parameter from inside of our function we are altering the value of the variable passed in.

Values of a primitive data type are what we refer to as immutable values, immutable values cannot be changed in contrast to mutable values.
Here is an example: if we assign a string to a variable we would be able to view a single character in the string though referencing the characters index, someWord[3]
However if we attempt to change the value of character number 4 using following syntax: someWord[3] = ‘X’ the variable would still contain the exact same string. 
A variable which contains a mutable value on the other hand can be modified.
We can for instance change the value of a certain property on a JavaScript Object or add an element to an Array.

**When working with Redux and creating our reducers we need to avoid mutation. We do not want to mutate an object and return the altered version. We always want to return a completely new object unrelated to the previous one. Failing to follow this pattern will most likely result in undesired behavior.**
As an example mutating instead of returning a new object within some reducer can affect however a component re-renders or not. 
Through avoiding mutations when altering state we are also avoiding possible side-effects that could emerge from changing a value in the reducer which affects all other references to the specific object across the application. 

**Since only Objects are mutable in contrast to our primitives we only need to think about this pattern when passing in Objects to our reducers, like Arrays or JavaScript Objects.** In our reducer we want to return a new array or a new object and not an mutated version of the previous State.
