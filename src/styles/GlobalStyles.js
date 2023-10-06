import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

/// Primary

--color-red: hsl(1, 90%, 64%);
--color-blue: hsl(219, 85%, 26%);

/// Neutral

--color-white: hsl(0, 0%, 100%);
--color-very-light-grayish-blue: hsl(210, 60%, 98%);
--color-light-grayish-blue-1: hsl(211, 68%, 94%);
--color-light-grayish-blue-2: hsl(205, 33%, 90%);
--color-grayish-blue: hsl(219, 14%, 63%);
--color-dark-grayish-blue: hsl(219, 12%, 42%);
--color-very-dark-blue: hsl(224, 21%, 14%);

 
}
/* 
#root{
  width: 100vw;
  height: 100vh;
} */

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
   height: 100vh;
}

body {
font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  /* line-height: 1.5; */
  font-size: 16px;
  //height: 100vh;
  /* display  :flex ;
justify-items: center; */
/* 
 display: grid;
  place-content: center;
  
  min-height: 100vh; */

  
}

input{
    font-size: 3.2rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}




p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  //filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

/*
FOR DARK MODE


*/
`;
export default GlobalStyles;
