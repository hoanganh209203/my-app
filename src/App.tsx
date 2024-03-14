import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Products from './layouts/Products';
import Footer from './components/Footer';
import About from './components/About';
import Shop from './components/Shop';
import SlideShow from './components/SlideShow';
import { menu } from './interface/product';

function App() {
  const title:menu[] = [
    {slug:"/", title:"Home"},
    {slug:"/contact", title:"Contact"},
    {slug:"/about", title:"About"},
    {slug:"/shop", title:"Shop"},
   ]
  return (
   <>
   <Header menu={title}/>
   <SlideShow/>
   <Products/>
   <Footer/>
   </>
  );
}

export default App;
