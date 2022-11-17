import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import  NavBar from './components/NavBar';
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/productos' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detalle' element={<ItemDetailContainer/>}/>
    </Routes>
    <ItemListContainer/>
    <ItemDetailContainer/>
    <Cart/>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
