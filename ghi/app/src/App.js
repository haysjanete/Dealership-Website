import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import NewCustomerForm from './SalesComponents/CustomerForm';
import NewSalesPersonForm from'./SalesComponents/SalesPersonForm';
import SalesPersonRecord from './SalesComponents/SalesPersonRecord';
import SalesList from './SalesComponents/SalesList';
import NewSaleForm from './SalesComponents/NewSaleForm';
import ListAutomobiles from './ListAutomobiles';
import NewAutomobileForm from './AutomobileForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/sales-list" element={<SalesList/>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/customer" element={<NewCustomerForm />} />
          <Route path="/sales-person" element={<NewSalesPersonForm />} />
          <Route path="/records" element={<SalesPersonRecord/>}/>
          <Route path="/new-sale" element={<NewSaleForm/>}/>
          <Route path="/automobiles" element={<ListAutomobiles />} />
          <Route path="/new-automobile" element={<NewAutomobileForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
