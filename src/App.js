import './App.css';
import Category from './components/Category';
import Coupon from './components/Coupon';
import Footer from './components/Footer';
import Header from './components/Header'
import Promo from './components/Promo'
import Reviews from './components/Reviews';
import Sale from './components/Sale'

function App() {
  return (
   <div>
    <Header/>
    <Promo/>
    <Sale/>
    <Reviews/>
    <Category/>
    <Coupon/>
    <Footer/>
   </div>
  );
}

export default App;
