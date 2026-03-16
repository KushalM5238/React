import Component from "./Component"
import Component2 from "./Component2" 
function App() {
  return (
    <>
      <h1>Hello World</h1>

      {/* we can use component as many times as we want */}
      
      <Component />         {/* it is .js Copmonent */}

      <Component2 />        {/* it is .jsx Copmonent */}
    </>
  );
}

export default App;
