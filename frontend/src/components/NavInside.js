import React from "react";

function NavInside() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark ml shadow p-3 ">
  <a className="navbar-brand px-3" href="#">Tariff Manager</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-end px-3" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Add Expense</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Logout</a>
      </li>
      
    </ul>
  </div>
</nav>
    </>
  );
}

export default NavInside;