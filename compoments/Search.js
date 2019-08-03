import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const MainSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    width: 20%;
  }
`;

const MainInput = styled.div`
  width: 100%;
  margin: 3vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  img{
    width: 24px;
    position: absolute;
    :nth-child(2){
      right: 32.5%;
    }
    :nth-child(3){
      width: 20px;
      right: 35%;
    }
  }
  input{
    padding: 10px 1.4vw;
    font-size: 16px;
    width: 35%;
    border-radius: 20px;
    border: 1px solid #dcdcdd;
    :hover{
      box-shadow: 0 1px 6px 0 #20212447;
    }
    :focus{
      box-shadow: 0 1px 6px 0 #20212447;
      outline: none;
    }
  }
`;

const MainButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttons = styled.div`
  color: #5F6368;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  background-color: #f2f2f2;
  cursor: pointer;
  font-size: 14px;
  margin: 11px 4px;
  min-width: 54px;
  padding: 10px 16px;
  text-align: center;
  :hover{
    border: 1px solid #c6c6c6;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    color: #222;
  }
`;

export default function pages() {
  const [Find, setFind] = useState('')
  const router = useRouter()
  
  function FindInGoogle(){
    router.push(`https://www.google.com/search?q=${Find}`)
  }

  return (
    <MainSearch>
      <img src="./static/img/google-logo.png" />
      <MainInput>
        <input type="text" onChange={e => setFind(e.target.value)}/>
        <img src="./static/img/microfone.png" />
        <img src="./static/img/teclado.png" />
      </MainInput>
      <MainButtons>
        <Buttons onClick={() => FindInGoogle()}>Pesquisar Google</Buttons>
        <Buttons>Estou com sorte</Buttons>
      </MainButtons>
    </MainSearch>
  )
}