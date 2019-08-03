import React from 'react'
import styled from 'styled-components'

const MainFooter = styled.div`
  width: 100%;
`;

const Footer = styled.div`
  width: 97.2%;
  background: #f2f2f2;
  padding: .8% 1.4%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  p{
    margin: 0;
    font-size: 15px;
    color: #0000008a;
    margin: 0 12px;
  }
  a{
    color: #5f6368;
    margin: 0 12px;
    text-decoration: none;
    font-size: 13px;
  }
  div{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
  }
`;

export default function pages() {
  return (
    <MainFooter>
      <Footer>
        <p>Brasil</p>
      </Footer>
      <Footer>
        <div>
          <a href="https://ads.google.com/intl/pt-BR_br/home/">Publicidade</a>
          <a href="https://www.google.com/services/">Negócios</a>
          <a href="https://about.google/intl/pt-BR_br/">Sobre </a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1">Como funciona a Pesquisa</a>
        </div>
        <div>
          <a href="https://policies.google.com/privacy?hl=pt-BR&gl=br">Privacidade</a>
          <a href="https://policies.google.com/terms?hl=pt-BR&gl=br">Termos</a>
          <a href="https://www.google.com/preferences?hl=pt-BR">Configurações</a>
        </div>
      </Footer>
    </MainFooter>
  )
}