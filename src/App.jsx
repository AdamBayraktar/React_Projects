import reactIMG from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

function Header() {
  return (
    <div>
      <header>
        <img src={reactIMG} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
