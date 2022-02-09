import { useState } from 'react';

export default function AddToCart() {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <form>
        Choose an amount:
        <select
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <button>Add to Cart</button>
        {console.log(amount)}
      </form>
    </div>
  );
}
