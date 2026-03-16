import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function MyApp() {
  return (
    <div>
      <h2>hello </h2>
    </div>
  );
}

// const ReactEle = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Google",
// };

//-----------------------------------------------------------------------------------------------------------------------------------

// const ElementSec = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );

//-----------------------------------------------------------------------------------------------------------------------------------

const username = "budy";
const ReactEle2 = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to  visit the Google ",
  username,
);

createRoot(document.getElementById("root")).render(<App />);
