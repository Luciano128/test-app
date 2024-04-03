import { Routes, Route } from 'react-router-dom';
import Ecommerce from './Ecommerce';
import Products from './Products';

// La MainRoute stabilisce quali siano i percorsi che si possono fare nell'applicazione.
// Attualmente ho 2 componenti che sono Ecommerce e Products. Come le Route stabilisco su quale componente posso andare
// in base al percorso che stabilisco io.

export default function MainRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/products" element={<Products />} />
    </Routes>
    );
}
