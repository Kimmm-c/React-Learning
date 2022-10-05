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
* App.js is the root component. Children components could be nested inside parent components by inserting `<ChildComponent />` into parents' function.

### Using dynamic values in jsx template
* Declare the variables before the return section.
* Retrieve the value inside return section by putting the variable name inside { }.
* Note: React can't output variable of Object and Boolean type.


## Styling in React app
* Typical practice is to put styling into index.css. This will apply CSS over all the components that 'index.js' takes in. 
* Another way is to use 'style' attribute inside jsx tags following the syntax: style={ {color: 'white'} }. Outer braces indicate a dynamic-variable container. Inner braces represent an object.


## Click Events
### Hook a handleClick function to a button:
* Declare the function above return.
* Use onClick attribute inside button tag. Eg: `<button onClick= { () => handleClick(param) }>`.

### Event argument
Event argument is a default argument when a click function is fired.

## React State (useState hook)
* State of a component: Data being used in the component at that moment.
* How it works: Make a value of a variable reactive to an event (Eg: Render the word 'Hello World' on the browser -> when a button is click -> the word is changed to 'Welcome home') 
* To use React hook: 
    * Import useState: `import { useState } from react` 
    * Create a list that takes in the return values of function useState. First element is the reactive value, second element is the function name used to change the value. (Eg: const [name, setName] = useState("Hello World")).

## Render a list of objects using .map()
```
const [articles, setArticle] = useState(
        [{title: 'Article 1', body: 'A body of article 1', author: 'A', id: 1},
        {title: 'Article 2', body: 'A body of article 2', author: 'B', id: 2},
        {title: 'Article 3', body: 'A body of article 3', author: 'A', id: 3},
        ]);

  return (
    <div className="home">
        {articles.map((article) => (
            <div className="article-preview" key={article.id}>
                <h3>{article.title}</h3>
                <p>Author: {article.author}</p>
            </div>
        ))}
    </div>
  )
  ```
## Props
* Allow passing data from parent component to child component.
* How to use props: 
```
const [articles, setArticle] = useState(
        [{ title: 'Article 1', body: 'A body of article 1', author: 'A', id: 1 },
        { title: 'Article 2', body: 'A body of article 2', author: 'B', id: 2 },
        { title: 'Article 3', body: 'A body of article 3', author: 'A', id: 3 },
        ]);

    return (
        <div className="home">
            <ArticleList articles={articles}/>
        </div>
    )
```
The `<ArticleList articles={articles}>` passes the list of articles to the child component (ArticleList).