import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header.jsx";
import { CoreConcepts } from "./components/CoreConcept.jsx";

export function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcepts>
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            ></CoreConcepts>
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            ></CoreConcepts>
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            ></CoreConcepts>
          </ul>
        </section>
        <h2>Let's code!</h2>
      </main>
    </div>
  );
}

// export default App;
