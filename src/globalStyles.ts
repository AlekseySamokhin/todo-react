import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: normal;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

input {
  padding: 0;
  margin: 0;
}

input:focus {
  outline: none;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  height: 100%;
  background-color: #272727;
  color: #fff;
}
`;
