import { ThemeProvider } from '@mui/material';
import React from 'react';
import Header from './components/ui/Header';
import theme from './components/ui/theme';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/ui/Home';
import Ztest from './components/ui/Ztest';
import Ztest2 from './components/ui/Ztest2';
// import Test from './components/ui/test';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
      
      <Routes>
        {/* Exact match for root */}
        <Route path="/" element={<Home />} />
        <Route path="ztest" element={<Ztest /> } />
        <Route path="ztest2" element={<Ztest2 /> } />
      </Routes>
      <div className="app">
        <div className="zzz"></div>
        
        {/* <Test/> */}
        {
          // [...new Array(120)]
          //   .map(() => `dlskfsdf lkjssda lawjw wlakwewekas kswj;aksk kwtasksdkwkss a kwjs akwksks kwkjeksaskx;xkvdgb.`)
          //   .join('\n')
        }
      </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
