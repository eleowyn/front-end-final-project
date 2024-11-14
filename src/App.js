import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import LostItemForm from './components/LostItemForm';
import FoundItemForm from './components/FoundItemForm';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  const addLostItem = (item) => {
    setLostItems((prevItems) => [...prevItems, item]);
  };

  const addFoundItem = (item) => {
    setFoundItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="flex">
        <Sidebar />
        <main className="p-8 flex-1">
          <ItemList items={lostItems} title="Lost Items" />
          <ItemList items={foundItems} title="Found Items" />
          <section id="report" className="space-y-8">
            <LostItemForm onAddLostItem={addLostItem} />
            <FoundItemForm onAddFoundItem={addFoundItem} />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
