import React from 'react';
import Card from './Card';
import Display from './Display';
import About from './About';
import Card2 from './Card2';
import Banner from './Banner';
import Faq from './Faq';
import Footer from './Footer';

export default function Home() {
  return (
    <>
    <Display/>
     <Card/>
     <About/>
     <Card2/>
     <Banner/>
     <Faq/>
     <Footer/>
    </>
  );
}
