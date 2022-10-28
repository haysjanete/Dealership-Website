import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="nav-item dropdown p-2">
            <NavLink className="nav-item dropdown-toggle btn-outline-info text-white p-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </NavLink>
            <li className="dropdown-menu">
              <NavLink className="dropdown-item" to="/sales-list">Sales List</NavLink>
              <NavLink className="dropdown-item" to="/records">Sales Person's Records</NavLink>
              <hr className="dropdown-divider" />
              <NavLink className="dropdown-item" to="/new-sale">New Sale</NavLink>
              <NavLink className="dropdown-item" to="/customer">New Customer</NavLink>
              <NavLink className="dropdown-item" to="/sales-person">New Sales Person</NavLink>
            </li>
          </div>
          <div className="nav-item dropdown p-2">
            <NavLink className="nav-item dropdown-toggle btn-outline-info text-white p-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </NavLink>
            <li className="dropdown-menu">
              <NavLink className="dropdown-item" to="/appointments/list">Appointment List</NavLink>
              <NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink>
              <NavLink className="dropdown-item" to="/appointments/new">Schedule an Appointment</NavLink>
              <hr className="dropdown-divider" />
              <NavLink className="dropdown-item" to="/technicians/new">New Technician</NavLink>
            </li>
          </div>
          <div className="nav-item dropdown p-2">
            <NavLink className="nav-item dropdown-toggle btn-outline-info text-white p-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </NavLink>
            <li className="dropdown-menu">
              <NavLink className="dropdown-item" to="/manufacturers/list">Vehicle Manufacturers</NavLink>
              <NavLink className="dropdown-item" to="/models/list">Vehicle Models</NavLink>
              <hr className="dropdown-divider" />
              <NavLink className="dropdown-item" to="/manufacturers/new">New Manufacturer</NavLink>
              <NavLink className="dropdown-item" to="/models/new">New Vehicle Model</NavLink>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
