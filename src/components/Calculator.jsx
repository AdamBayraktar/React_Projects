// if duration less than 1 then display info

export function Calculator() {
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
          />
        </label>
        <label for="annualInvestment">
          ANNUAL INVESTMENT
          <input
            type="number"
            id="annualInvestment"
            name="annualInvestment"
            min="1"
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
          />
        </label>
        <label for="duration">
          DURATION
          <input type="number" id="duration" name="duration" min="1" />
        </label>
      </div>
    </div>
  );
}
