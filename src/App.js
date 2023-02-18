import React from "react";
import Tab from "./tab";
import './index.css';
// const url = 'https://course-api.com/react-tabs-project'

function App() {
  return (
    <main>
      <header className="experience">
        <h1>Experience</h1>
        <div className="underline"></div>
      </header>
      <section>
      <Tab/>
      </section>
    </main>

  )
}

export default App;
