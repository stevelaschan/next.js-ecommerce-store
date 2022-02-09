import { css } from '@emotion/react';

const productSearchBar = css`
  display: flex;
  justify-content: center;
  padding: 16px;

  input {
    width: 800;
    padding: 8px 16px;
    border-radius: 8px;
    margin: 0 10px;
  }

  button {
    border-radius: 8px;
    font-weight: 50;
    margin: 0 10px;
    background-color: #2e2e2e;
    color: white;
    cursor: pointer;
  }
`;

export default function SearchBar() {
  return (
    <div css={productSearchBar}>
      <input placeholder="Search for your item..." />
      <button>Search</button>
    </div>
  );
}
