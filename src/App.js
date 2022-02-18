import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";

import './App.css';
import CustomerList from './component/Customer-List/CustomerList';
import Header from './component/Header/Header';
import InvoiceCustomer from './component/Invoices/Invoice-Customer/InvoiceCustomer';
import InvoicesList from './component/Invoices/Invoices-List/InvoicesList';
import PackageList from './component/Package-List/PackageList';
import { UserProvider } from './userContext';


function App() {
  const [appData, setAppData] = useState({ customers: [], packages: [] });
  const [packageLength, setPackageLength] = useState(0)

  useEffect(() => {
    fetch("/data.json").then(response => response.json())
      .then(data => {
        setAppData(data);
        setPackageLength(data.packages.length + 1)
      })
  }, [])

  const providerOptions = {
    data: appData,
    customers: appData.customers,
    packages: appData.packages,
    pakLength: packageLength,
    incPakLength: () => setPackageLength(packageLength + 1),
    setData: (data) => setAppData(data),
    setPackages: (packages) => setAppData({ customers: appData.customers, packages }),
    setCustomers: (customers) => setAppData({ packages: appData.packages, customers }),
    changeUser: (value) => setAppData(value),

  }

  return (
    <div className="App">
      <UserProvider value={providerOptions}>
        <Router>
          <Header appData={appData} />
          <Switch>
            <Route exact path="/"> <CustomerList /></Route>
            <Route path="/Packeges"> <PackageList /></Route>
            <Route path="/Invoice/:id" render={(props) => <InvoiceCustomer {...props} />} />
            <Route path="/Invoice">  <InvoicesList /></Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>

  );
}

export default App;
