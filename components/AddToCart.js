// import { useState } from 'react';
// import { getParsedCookie, setParsedCookie } from '../util/cookies';

// export default function AddToCart(props) {
//   const [amount, setAmount] = useState(0);
//   const [addProductToCart, setAddProductToCart] = useState(props.buyProduct);

//   function addProductToCartCookie(id) {
//     // 1. get the value of the cookie
//     const cookieValue = getParsedCookie('buyProduct') || [];

//     // 2. update the cookie
//     const existIdOnArray = cookieValue.some((cookieObject) => {
//       return cookieObject.id === id;
//     });

//     let newCookie;
//     if (existIdOnArray) {
//       // Case: when the id is in the array => delete item
//       newCookie = cookieValue.filter((cookieObject) => {
//         return cookieObject.id !== id;
//       });
//     } else {
//       // Case: when the id is not in the array => add item
//       newCookie = [...cookieValue, { id: id }];
//     }

//     // 3. set the new value of the cookie
//     setAddProductToCart(newCookie);
//     setParsedCookie('buyProduct', newCookie);
//   }

//   return (
//     <div>
//       <form>
//         Choose an amount:
//         <select
//           value={amount}
//           onChange={(e) => setAmount(e.currentTarget.value)}
//         >
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//           <option value="9">9</option>
//         </select>
//         <button>Add to Cart</button>
//         {console.log(amount)}
//       </form>
//     </div>
//   );
// }
