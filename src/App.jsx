// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import Blog from '@components/Blog/Blog';
import HomePage from '@components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import Sidebar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@/contexts/ToastProvider';

function App() {
  return (
    <ToastProvider>
      <SideBarProvider>
        <Sidebar />

        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routers.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={<item.component />}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SideBarProvider>
    </ToastProvider>
  );
}

export default App;
