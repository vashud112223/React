import Card from "./components/Card";

function App() {
  let myArr = {
    name:"Ashu",
    age:25
  }
  return (
    <>
      <h1 className="bg-green-500">
      Hello world!
    </h1>
    <Card username="Ashu" btnText = "click me"/>
    <Card username="Ashutosh" btnText = "visit me"/>
    </>
  );
}

export default App;
