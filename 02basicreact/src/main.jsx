import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return <h1>Hii I am here</h1>;
// }  we can also make our function

// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children :' click me here'
// } It can't be executed because React will not understand as we have define it by our type

// const anotherElement = (
//   <a href = 'https://google.com' target = '_blank'>Visit google</a>
// ) React will convert this into tree structure and render it

// const reactElement = React.createElement(
//    'a',
//    { href : 'https://google.com',
//       target : '_blank'
//   },'click me here'
// )

createRoot(document.getElementById("root")).render(<App />);
// MyApp() we can execute like this also
