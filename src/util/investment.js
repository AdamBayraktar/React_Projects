// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = Number(initialInvestment);
  let totalInterest = 0;
  let totalAnnualInvestment =  Number(initialInvestment)

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    totalInterest += interestEarnedInYear;
    console.log(investmentValue)
    investmentValue = (investmentValue + interestEarnedInYear + annualInvestment);
    totalAnnualInvestment += annualInvestment
    
    // investmentValue += (interestEarnedInYear + annualInvestment);
    annualData.push({
      year: i + 1, // year identifier
      interest: formatter.format(Math.ceil(interestEarnedInYear)), // the amount of interest earned in this year
      totalInterest: formatter.format(Math.ceil(totalInterest)), // total interest earned by now
      valueEndOfYear: formatter.format(Math.ceil(investmentValue)), // investment value at end of year
      annualInvestment: formatter.format(Math.ceil(totalAnnualInvestment)), // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
