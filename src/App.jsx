import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import MemeImage from "./components/MemeImage";

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Form />
        <MemeImage />
      </main>
    </div>
  )
}

export default App
