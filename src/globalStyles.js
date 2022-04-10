import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
 
  font-family: 'Open Sans', sans-serif;
  
  }

  .swiper-button-next,
.swiper-button-prev {

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: white;
}

.swiper-button-next::after,
.swiper-button-prev::after {

}

.swiper-pagination-bullet{
  
  background-color: wheat;
}

img{
  display: block;
}

`;

export default GlobalStyle;
