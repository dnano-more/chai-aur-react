import { useState } from "react";
import Card from "./components/card.jsx";

function App() {
  const [count, setCount] = useState(0);

  const myObj = {
    username: "John Doe",
    age: 30,
  }

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500 bg-blue-100 p-4 rounded-lg">
        Tailwind Working 🚀
      </h1>

      <Card user="Beck" btnText="click here"/>
      <Card user="Scarlet" />
    </>
  );
}

export default App;
