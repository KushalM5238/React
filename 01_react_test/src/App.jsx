import Component from "./Component";
function App() {
  const Username = "abc";
  return (
    <>
      <h1>hello {Username}</h1> {/* here {username} is evaluated Expretion */}
      <Component />
    </>
  );
}

export default App;
