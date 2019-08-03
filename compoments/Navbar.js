import React from 'react'
import styled from 'styled-components'

const MainNavBar = styled.div`
  width: calc(100% - 4vw);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2vh 2vw;
  a{
    text-decoration: none;
    color: #000000de;
    margin: 0 8px;
    font-size: 13px;
    transition: .5s ease;
    :hover{
      opacity: .85;
      text-decoration: underline;
    }
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 1.2vw;
  width: 18px;
  div{
    margin: 1px;
    height: 4px;
    width: 4px;
    background: #737373;
  }
`;

const Email = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 100%;
  background: url(./static/img/photo.png);
`;

export default function pages() {
  return (
    <MainNavBar>
      <a href="https://mail.google.com/mail/">Gmail</a>
      <a href="https://www.google.com.br/imghp">Imagens</a>
      <Products>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Products>
      <Email />
    </MainNavBar>
  )
}