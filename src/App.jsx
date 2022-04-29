import React from 'react';
import './App.css';

// Main Structure Imports
import { Header } from './features/Header/Header';
import { MainBody } from './features/MainBody/MainBody';
import { SideBar } from './features/SideBar/SideBar';


function App() {
  return (
    <>
      <Header />
      <main>
        <MainBody />
      </main>
      <aside>
        <SideBar />
      </aside>
    </>
  );
}

export default App;
