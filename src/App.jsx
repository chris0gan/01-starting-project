import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcpet.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js'


function App() {
  const [slecectedTopic, setSelectedTopic] = useState();

  let tabContent = 'Please click a button';

  function handleSelect(selectedContent) {
    setSelectedTopic(selectedContent)
    //console.log(slecectedTopic);

  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={ slecectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={ slecectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={ slecectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={ slecectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!slecectedTopic ? <p>Please select a topic.</p> : (<div id="tab-content">
            <h3>{EXAMPLES[slecectedTopic].title}</h3>
            <p>{EXAMPLES[slecectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[slecectedTopic].code}
              </code>
            </pre>
          </div>)}
        </section>
      </main>

    </div>
  );
}

export default App;
