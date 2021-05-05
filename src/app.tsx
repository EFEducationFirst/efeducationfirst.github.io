import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes />
    <Footer />
  </BrowserRouter>
);
