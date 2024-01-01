export function ResultTable({ calculatedValues }) {
  const formatedValues = calculatedValues.map((values) => {
    return (
      <tr>
        <td>{values.year}</td>
        <td>{values.valueEndOfYear}</td>
        <td>{values.interest}</td>
        <td>{values.totalInterest}</td>
        <td>{values.annualInvestment}</td>
      </tr>
    );
  });
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{...formatedValues}</tbody>
      {console.log({ ...calculatedValues })}
    </table>
  );
}
