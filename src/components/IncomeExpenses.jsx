import { useGlobalState } from "../context/GolbalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const incomes = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <span>{incomes}</span>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <span>{expense}</span>
      </div>
    </>
  );
}

export default IncomeExpenses;
