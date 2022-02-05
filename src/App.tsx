import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import About from 'pages/about';
import Header from 'components/header';
import theme from 'components/theme';
// import Fonts from 'components/fonts';
import './scss/global.scss';
import Footer from 'components/footer';

const App: React.FC = () => (
  <div className="App">
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  </div>
);

export default App;
