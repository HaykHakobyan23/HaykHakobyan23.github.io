// CardStyles.js

import styled from 'styled-components';

const Cart = styled.article`
display: grid;
place-items: center;
width: 80vw;
height: 200vh ;
max-width: 21.875rem;
height: 28.125rem;
overflow: hidden;
border-radius: 0.625rem;
box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
cursor: pointer;
> * {

    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  
h2 {
font-family: "Lato", sans-serif;
color: hsl(0, 0%, 100%);
line-height: 1.1;
text-align: start;
cursor: text;
}

p {
font-family: "Lato", sans-serif;
font-size: 1rem;
line-height: 1.5;
color: hsl(0, 0%, 100%);
text-align: start;
cursor: text;

}

.flow > * + * {
margin-top: var(--flow-space, 1em);
}

.card__content {
  transform: translateY(62%);
  transition: transform 200ms ease-out;
  transition-delay: 200ms;
}

.card__title::after {
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 1000ms ease-in, transform 500ms ease-out;
  transition-delay: 500ms;
  transform-origin: right;
}

.card__background {
  transition: transform 500ms ease-in;
}

.card__content--container > :not(.card__title),
.card__button {
  opacity: 0;
  transition: transform 500ms ease-out, opacity 500ms ease-out;
}

&:hover,
&:focus-within {
  transform: scale(1.05);
  transition: transform 500ms ease-in;
}

&:hover .card__content,
&:focus-within .card__content {
  transform: translateY(0);
  transition: transform 500ms ease-in;
}

&:focus-within .card__content {
  transition-duration: 0ms;
}

&:hover .card__background,
&:focus-within .card__background {
  transform: scale(1.3);
}

&:hover .card__content--container > :not(.card__title),
&:hover .card__button,
&:focus-within .card__content--container > :not(.card__title),
&:focus-within .card__button {
  opacity: 1;
  transition: opacity 500ms ease-in;
  transition-delay: 400ms;
}

.card:hover .card__title::after,
.card:focus-within .card__title::after {
  opacity: 1;
  transform: scaleX(1);
  transform-origin: left;
  transition: opacity 500ms ease-in, transform 500ms ease-in;
  transition-delay: 500ms;
}


`;

const CardBackground = styled.img`
object-fit: cover;
max-width: 100%;
height: 100%;
transition: transform 500ms ease-in;

`;

const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-self: flex-end;
height: 74%;
padding: 12% 1.25rem 1.875rem;
background: linear-gradient(
  180deg,
  hsla(0, 0%, 0%, 0) 0%,
  hsla(0, 0%, 0%, 0.3) 10%,
  hsl(0, 0%, 0%) 100%
);
`;

const CartTitle = styled.h2`
position: relative;
width: fit-content;
text-align: start;
&::after {
  content: "";
  position: absolute;
  height: 0.3125rem;
  width: calc(100% + 1.25rem);
  bottom: calc((1.25rem - 0.5rem) * -1);
  left: -1.25rem;
  background-color: hsl(46, 100%, 50%);
}
`;

const CartButton = styled.button`
padding: 0.75em 1.6em;
width: fit-content;
width: -moz-fit-content; /* Prefijo necesario para Firefox  */
font-variant: small-caps;
font-weight: bold;
border-radius: 0.45em;
border: none;
background-color: #EFB7FF;
font-family: "Montserrat", sans-serif;
font-size: 1.125rem;
color: black;
cursor: pointer;
:focus {
outline: 2px solid black;
outline-offset: -5px;
}
`;

const FlexBox = styled.div`
   flex-flow: wrap;
    align-items: stretch;
    justify-content: center;
    display: flex;
   gap: 20px;
`;



export {
  Cart,
  CardBackground,
  CardContent,
  CartTitle,
  CartButton,
  FlexBox,
};
