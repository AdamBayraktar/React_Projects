import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { Header } from "./components/Header.jsx";
import { CoreConcepts } from "./components/CoreConcept.jsx";
import { TabButton } from "./components/TabButton.jsx";
import { useState } from "react";

export function App() {
  const [selectedTab, setSelectedTab] = useState(false);
  function handleSelect(tabName) {
    switch (tabName) {
      case "Components":
        setSelectedTab(EXAMPLES.components);
        break;
      case "JSX":
        setSelectedTab(EXAMPLES.jsx);
        break;
      case "Props":
        setSelectedTab(EXAMPLES.props);
        break;
      case "State":
        setSelectedTab(EXAMPLES.state);
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((CORE_CONCEPTS) => (
              <CoreConcepts
                title={CORE_CONCEPTS.title}
                description={CORE_CONCEPTS.description}
                image={CORE_CONCEPTS.image}
              ></CoreConcepts>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTab.title === "Components"}
              onClick={() => {
                handleSelect("Components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab.title === "JSX"}
              onClick={() => {
                handleSelect("JSX");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab.title === "Props"}
              onClick={() => {
                handleSelect("Props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab.title === "State"}
              onClick={() => {
                handleSelect("State");
              }}
            >
              State
            </TabButton>
          </menu>
          {selectedTab === false ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{selectedTab.title}</h3>
              <p>{selectedTab.description}</p>
              <pre>
                <code>{selectedTab.code}</code>
              </pre>
            </div>
          )}
        </section>
        <h2>Let's code!</h2>
      </main>
    </div>
  );
}

// export default App;
