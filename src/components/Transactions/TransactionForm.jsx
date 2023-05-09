import { useState } from "react";
import { useGlobalState } from "../../context/GolbalState";

function TransactionForm() {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useGlobalState();

  useGlobalState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      amount: +amount,
      description,
    });
    setAmount(0);
    setDescription("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="bg-zinc-600 text-white px-3 py-2 roundend-lg block mb-2 w-full
          "
          type="text"
          placeholder="Ingresa una descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          className="bg-zinc-600 text-white px-3 py-2 roundend-lg block mb-2 w-full
          "
          type="number"
          step="0.01"
          placeholder="0.0"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <button className="bg-indigo-700 text-white px-2 py-2 rounded-lg block mb-2 w-full">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
