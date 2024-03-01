# React_To-Do-List

(Not my own project)

## About this project

This is a simple ToDo-App that allows us to build code for the frontend to do the common CRUD (Create, Read, Update and Delete) -operations:

1. display a list of to do items (read)
1. remove an item from the list (delete)
1. add a new item to the list (create)
1. edit one item in the list (update)

## Set up a new project in this folder!

Navigate to this folder and type the following command on the terminal:

1. `npm create vite@latest`

2. Select React and press enter
3. Select JavaScript and press enter
4. Now you have a new folder with the name `vite-project` (if you did not remname it). Navigate into the folder `cd vite-project`
5. Install the packages neede for React. Type `npm install`
6. Open the project in VsCode `code .`
7. Open a terminal in VS Code and type `npm run dev`
8. Click on the link in the terminal to open the browser.
9. Check the content!

## Task 1: Display a list of items

- Clean up the code in the `App` component. Add a heading in the return statement of the component that fits your app, for example: `My To Do List`
- Create a state, using the `useState`-hook in `App`. Add some todo-items to the state. Add one object for each todo-item. Use the following structure for each todo-item:

```js

{ task: 'Learn React', status: 'open', id: '01' }
```

- Create a component `List`. This component should get the array of todo-items as props.

  - use a map function to render all the todo-items in return statement of the `List` component. Each item can be a list-item or a div.
  - if the array is empty, (there are no items in state), display a text such as "No tasks today!"
  - Optional: destructure the props in `List`.
  - use the `List` in the `App` component and pass the state `tasks` as props to `List`.
  - Add some more todo items in state in `App`, and check that they appear on the page.
  - Remove all the todo items from the state in `App`, and check that you see the text "No tasks today" on the page.

  Bonus after task 1:

1. Display the status of the item in the app! You can add an icon (checkmark) or change the colour of the item if it is marked as "closed".
2. Add interactivity so that you can change the status of the item from `'open'` to `'closed'`.

   For this you need

- button
- click handler on the button
- function to change the state of the items (in `App.js`)
- use conditional expressions (ternary operator)

  Repeat conditional rendering if you need to!

## Task 2: Delete an item

Add a delete button to remove an item in the List component
Add a function that handles the removing from state in App.
Pass this function to the button in List

## Task 3: Add new items

Will be added later via Moodle

## Task 4: Edit an item

Will be added later via Moodle

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
