import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Search from './Search'
import Footer from './Footer'

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default function pages() {
  return (
    <MainPage>
      <Navbar />
      <Search />
      <Footer />
    </MainPage>
  )
}