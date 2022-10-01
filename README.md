# React-Learning


## Concept
Used for Single Page Applications (SPA). This means that the server only needs to send 1 HTML file to the browser and let React handle the rest, including routing.

This approach doesn't require the server to send HTML page back for every click and hence the faster website performance.


## Recommended Setting for VSC
* Install Simple React Snippets.
* Setting -> Search 'emmet' -> Include Languages -> Add Item -> Item: javascript and Value: javascriptreact. This allows handy shortcuts. Eg: .hello will create a div with class = "hello".


## Create a React App
Run the code below to create a React app:
```
npx create-react-app project_name
```
Cd into the project_name folder.

'Node_modules' folder contains the app dependencies.

'Public folder' holds what's displayed in the browser. This is where the only HTML file locates.

'Src' folder stores code. All of the components on the website reside in this folder 'index.js' is responsible for taking the components and rendering them on the website.

Preview the app in a local development server:
```
npm run start
```


## React Components

### How a React component works
* A section on the browser is called a component (nav bar, blog, side bar, etc...)
* Inside a component is a function that returns a jsx template.
* Each component has each own jsx template that looks like an HTML. 
* At the end of each component file, always export the component.
* Import the components to 'index.js' in order to use them.
* 'index.js' takes the components into its root.render function and renders them to the browser.
* App.js is the root component. Children components could be nested inside parent components by inserting <ChildComponent /> into parents' function.

### Using dynamic values in jsx template
* Declare the variables before the return section.
* Retrieve the value inside return section by putting the variable name inside { }.
* Note: React can't output variable of Object and Boolean type.

### Styling in React app
* Typical practice is to put styling into index.css. This will apply CSS over all the components that 'index.js' takes in. 
* Another way is to use 'style' attribute inside jsx tags following the syntax: style={ {color: 'white'} }. Outer braces indicate a dynamic-variable container. Inner braces represent an object.