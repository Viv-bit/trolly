import './App.css';
import OrderSummary from './components/OrderSummary';
import Payment from './components/payment';

function App() {
  return (
    <div className="main">
      <Payment />
      <OrderSummary />
    </div>
  );
}

export default App;
