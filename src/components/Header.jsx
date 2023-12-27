import reactIMG from "../assets/react-core-concepts.png";
export function Header() {
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
