//Extention for suugetion : reactsnipist

import { useState } from "react";
import "./App.css";
import Card from "/components/Card.jsx";

function App() {
  // const [count, setCount] = useState(0);
  let uname = ["kushal", "umesh"];
  let newobj = {
    collage: "atmiya",
    course: "Btech",
  };
  let newarr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwinnd CSS
      </h1>
      <Card UserName={uname} />
      <Card UserName={uname} />
    </>
  );
}

export default App;
