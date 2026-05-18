import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "red", cursor:"pointer"}}
            onClick={() => setColor("red")}>Red</button>
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "green", cursor:"pointer"}}
            onClick={() => setColor("green")}>Green</button>
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "blue", cursor:"pointer"}}
            onClick={() => setColor("blue")}>Blue</button>
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "orange", cursor:"pointer"}}
            onClick={() => setColor("orange")}>Orange</button>
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "gray", cursor:"pointer"}}
            onClick={() => setColor("gray")}>Gray</button>
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "purple", cursor:"pointer"}}
            onClick={() => setColor("purple")}>Purple</button>
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "brown", cursor:"pointer"}}
            onClick={() => setColor("brown")}>Brown</button>
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "black", cursor:"pointer"}}
            onClick={() => setColor("black")}>Black</button>
            <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "olive", cursor:"pointer"}}
            onClick={() => setColor("olive")}>Olive</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
