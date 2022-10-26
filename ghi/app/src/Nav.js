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
          {/* <div className="nav-item dropdown p-2">
            <NavLink className="nav-item dropdown-toggle btn-outline-info text-white p-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </NavLink>
            <li className="dropdown-menu">
              <li><NavLink className="dropdown-item btn-outline-info" to="/automobiles">Automobiles</NavLink></li>
              <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
              <li><NavLink className="dropdown-item" to="/models">Models</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="/new-automobile">New Automobile</NavLink></li>
              <li><NavLink className="dropdown-item" to="/new-manufacturer">New Manufacturers</NavLink></li>
              <li><NavLink className="dropdown-item" to="/new-model">New Model</NavLink></li>
            </li>
          </div> */}
          <div className="nav-item dropdown p-2">
            <NavLink className="nav-item dropdown-toggle btn-outline-info text-white p-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </NavLink>
            <li className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/list-sales">Sales Records</NavLink></li>
              <li><NavLink className="dropdown-item" to="/records">Sales Person's Records</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="/new-sale">New Sale</NavLink></li>
              <li><NavLink className="dropdown-item" to="/customer">New Customer</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales-person">New Sales Person</NavLink></li>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
