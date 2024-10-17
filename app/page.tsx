
import React from 'react'
import Header from "./components/header/header";
import Banner from './components/banner/banner';
import Services from './components/services/services';
import Footer from './components/footer/footer';


export default function Home() {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Footer></Footer>
    </div>
  )
}
