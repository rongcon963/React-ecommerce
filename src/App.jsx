// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import MainLayout from '@components/Layout/Layout';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Button from '@components/Button/Button';

function App() {
  return (
    <>
      <MainLayout>
        <Header />
        {/* Content
        <Button />
        <Footer /> */}
      </MainLayout>
    </>
  );
}

export default App;
