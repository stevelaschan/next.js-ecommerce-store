import { useState } from 'react';

export default function BuyButton() {
  const [buyAmount, setBuyAmount] = useState(1);

  return (
    <div>
      <label for="buyAmount">
        Choose an amount:
        <select id={buyAmount}>
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
        <button onClick={() => setBuyAmount(buyAmount)}>Add To Cart</button>
      </label>
    </div>
  );
}
