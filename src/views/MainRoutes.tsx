import { Routes, Route } from 'react-router-dom';
import Ecommerce from './Ecommerce';
import Products from './Products';

export default function MainRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/products" element={<Products />} />
    </Routes>
    );
}
