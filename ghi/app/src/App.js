import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import NewCustomerForm from './SalesComponents/CustomerForm';
import NewSalesPersonForm from'./SalesComponents/SalesPersonForm';
import SalesPersonRecord from './SalesComponents/SalesPersonRecord';
import SalesList from './SalesComponents/SalesList';
import NewSaleForm from './SalesComponents/NewSaleForm';
import TechnicianForm from './ServiceComponents/TechnicianForm';
import ServiceAppointmentForm from './ServiceComponents/ServiceAppointmentForm';
import AppointmentList from './ServiceComponents/AppointmentList';
import ServiceHistory from './ServiceComponents/ServiceHistory';
import ManufacturerForm from './InventoryComponents/ManufacturerForm';
import ManufacturerList from './InventoryComponents/ManufacturerList';
import VehicleModelForm from './InventoryComponents/VehicleModelForm';
import VehicleModelList from './InventoryComponents/VehicleModelList';
import AutomobileList from './InventoryComponents/AutomobileList';
import AutomobileForm from './InventoryComponents/AutomobileForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="manufacturers">
            <Route path="list" element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route path="list" element={<VehicleModelList />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="/sales-list" element={<SalesList/>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/customer" element={<NewCustomerForm />} />
          <Route path="/sales-person" element={<NewSalesPersonForm />} />
          <Route path="/records" element={<SalesPersonRecord/>}/>
          <Route path="/new-sale" element={<NewSaleForm/>}/>
          <Route path="/automobiles" element={<AutomobileList />} />
          <Route path="/new-automobile" element={<AutomobileForm />} />
          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route path="list" element={<AppointmentList />} />
            <Route path="new" element={<ServiceAppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
