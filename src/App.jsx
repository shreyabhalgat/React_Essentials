import React, { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import { TabButton } from './components/TabButton.jsx';
import { EXAMPLES } from './data.js'; 

function App() {

  const[selectedTopic,setselectedTopic]=useState('')
  function handleSelect(selectedbutton) {
    setselectedTopic(selectedbutton)
    console.log(selectedTopic);
  }

  return (
    <div>
      <main>
        <Header />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Example</h2>
        <section id="examples">
          <menu>
            <TabButton onSelect={()=>handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect("state")}>State</TabButton>
          </menu>
        </section>
        {!selectedTopic?<p>Please Select a topic</p>:<div id="tab-content">
          
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>

        </div>}
      </main>
    </div>
  );
}

export default App;
