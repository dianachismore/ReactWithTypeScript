import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";

<style>@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');</style>

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: transparent;
    cursor: pointer;
`;

export const Counter = styled.label`
    background-color: rgba(255, 255, 255, 0.318);
    color:white;
    font-family: 'Lobster', cursive;
    font-size: 10px;
    margin-right:0px;
    border-radius: 50%;
    padding: 3px 10px;
    left:-20px;
    top: -10px;
    right:10px;
`;

export const ButtonContainer = styled(motion.button).attrs(() => ({
    initial: "visible",
    variants
  }))`
  background: transparent;
  color:white;
  width:200px;
  height: 30px;
  margin: 10px;
  padding: 2px 5px;
  border: 1px solid white;
  border-radius: 3px;
  transition: 5s liniar;
  }
  &:hover  ${StyledFontAwesomeIcon} {
    color:#282c34;
    background-color: white;
  }
  &:hover  ${Counter} {
    color:#282c34;
    background-color: white;
    font-size:15px
  }
  &:hover {
    width:220px;
    height:40px;
    background-color: white;
    color:#282c34;
    margin-left: 0px;
    border-radius:10px;
    box-shadow: 10px 5px 5px black;
  }
  @media (max-width: 480px) {
    width:100%;
    margin-left:-10px;
    &:hover {
        width:100%;
  }
`;

export const Button = styled.button`
  margin-left:10px;
  margin-right:10px;
  margin-top:2px;
  background: transparent;
  width:80px;
  color: inherit;
  font-family: 'Lobster', cursive;
  font-size: 15px;
  border:none;
`;
export const SearchContainer = styled.div`
    background: transparent;
    position:relative;
    width:80%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 10px;
    padding-left: 5px;
    border: 1px solid white;
    border-radius: 3px;
    box-shadow: 10px 5px 5px black;
    @media (max-width: 480px) {
        margin-top:30px;
        margin-bottom:30px;
        margin-left:10px;
        margin-right:0px;
        height: 30px;
      }

`;

export const SearchBar = styled.input`
  background: transparent;
  color: white;
  font-family: 'Lobster', cursive;
  font-size: 15px;
  padding-left:20%;
  border:none;
  position:absolute;
  top:0;
  left:5px;
  height:100%;
  width:100%;
  outline:none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  }
`;

export const ContentSidebar =  styled.div`
    display:flex;
    gap:1em;
    @media (max-width: 480px) {
        flex-direction: column;
      }
`;

export const Content =  styled.div`
    display:inline-flex;
    flex: 3;
    flex-wrap: wrap;
    flex-flow: flex-start;
    padding-left: 20px;
    border-width: 3px;
    border-style: solid;
    border-right: none;
    border-image: 
    linear-gradient(
        to bottom, 
        rgb(255, 255, 255), 
        rgba(0, 0, 0, 0)
    ) 1 100%;
    @media (max-width: 480px) {
        border-image:none;
        border-width: 0px;
    }

`;

export const Sidebar =  styled.div`
    flex: 1;
    position: sticky;
    top: 1rem;
    height: 10rem;
    width: 10rem;
    @media (max-width: 480px) {
       width:100%;
       top:0;
    }
    
`;

export const Items =  styled.div`
    @media (max-width: 480px) {
        flex: 100%;
        width:100%;
    }
    @media (min-width : 481px) and (max-width : 1200px) {
        flex: 25%;
    }
    @media (min-width : 1201px) {
        flex: 16.6666666666%;
    }
`;

//cand dai click pe label-ul "x" butonul trebuie sa se fade out
const fadeOut = keyframes`
from {
    transform: scale(1);
  }

  to {
    transform: scale(.25);
  }
`;

const variants = {
    visible: { opacity: 1, transition: { duration: 3 } },
    hidden: { opacity: 0 }
 };

 