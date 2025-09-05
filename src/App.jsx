import React from 'react'
import Allproduct from './components/allproduct'
import Cart from './components/listproduct'
import { Routes, Route } from 'react-router-dom';
import CostomProduct from './components/costomproduct';
import NotFound from './components/notfound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Allproduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<CostomProduct />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App