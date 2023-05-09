import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GolbalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncomes =
    transactions
      .filter((item) => item.amount > 0)
      .reduce((acc, item) => (acc += item.amount), 0) || 1;
  const totalExpsense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, item) => (acc += item.amount), 0) * -1 || 1;

  const totalExpensesPercentage = Math.round(
    (totalExpsense / totalIncomes) * 100
  );

  const totalIncomePercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={["#e74c3c", " #2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentage },
        { x: "Incomes", y: totalIncomePercentage },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => datum.y}
      labelComponent={<VictoryLabel style={{ fill: "white" }} />}
    />
  );
}

export default ExpenseChart;
