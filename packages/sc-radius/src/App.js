import React from "react"
import "./App.css"
import SCRadius from "./sc-radius"

function App() {
  return (
    <div className="App">
      <SCRadius
        width={50}
        height={50}
        backgroundColor="red"
        backgroundSize="cover"
        borderRadius="50%"
        backgroundImage="https://chernivtsi.js.org/images/speakers/dima-barabash.jpg"
      />
    </div>
  )
}

export default App
