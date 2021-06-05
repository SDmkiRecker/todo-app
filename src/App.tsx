import React from 'react';
import { Todos } from "./Components/Todos";
import './App.css';

function App() {
  return (
    <div className="h-screen my-10 flex justify-center items-center bg-gray-100">
      <Todos />
    </div>
  );
}

export default App;
