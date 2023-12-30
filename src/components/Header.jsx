import calculatorLogo from "../../public/investment-calculator-logo.png";

export function Header() {
  return (
    <header id="header">
      <img
        src={calculatorLogo}
        alt="Calculator investment logo. Cash and bag with cash logo"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
