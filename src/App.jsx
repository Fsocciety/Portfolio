import React, { useRef } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import Content from './components/Content/Content.jsx';
import "./style.scss"

function App() {
  const myRef = useRef(null);

  

  return (
    <>
      <Header myRef={myRef}/>
      <Content myRef={myRef}/>
      <Footer />
    </>
  )
}

export default App
