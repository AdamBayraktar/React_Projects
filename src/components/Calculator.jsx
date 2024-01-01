// if duration less than 1 then display info

export function Calculator({ userInputs, setUserInput }) {
  function onChangeHandler(event) {
    if (event.target.value < 1) {
      window.alert("The value cannot be less than 1!");
      throw "exit";
    }
    setUserInput(() => {
      let newUserInput = { ...userInputs };
      newUserInput[event.target.name] = event.target.value;
      return newUserInput;
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <label for="initialInvestment">
          INITIAL INVESTMENT
          <input
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            min="1"
            value={userInputs.initialInvestment}
            onChange={onChangeHandler}
          />
        </label>
        <label for="annualInvestment">
          ANNUAL INVESTMENT
          <input
            type="number"
            id="annualInvestment"
            name="annualInvestment"
            min="1"
            value={userInputs.annualInvestment}
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className="input-group">
        <label for="expectedReturn">
          EXPECTED RETURN
          <input
            type="number"
            id="expectedReturn"
            name="expectedReturn"
            min="1"
            value={userInputs.expectedReturn}
            onChange={onChangeHandler}
          />
        </label>
        <label for="duration">
          DURATION
          <input
            type="number"
            id="duration"
            name="duration"
            min="1"
            value={userInputs.duration}
            onChange={onChangeHandler}
          />
        </label>
      </div>
    </div>
  );
}
