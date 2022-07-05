import React from "react";
import { BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from "../pages/Home";
import Compute from "../pages/Compute";
import Database from "../pages/Database";
import Content from "../pages/Networking-Content-Delivery";
import Storage from "../pages/Storage";
import Security from "../pages/Security-Identity-Compliance";
import Analytics from "../pages/Analytics";
import Layout from "../pages/Layout";
import Developer from "../pages/Developer-Tools";
import Management from "../pages/Management-Governance";
import MachineLearning from "../pages/Machine-Learning";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index element={<Home />} />
        <Route path="compute" element={<Compute />} />
        <Route path="database" element={<Database />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="networking-content-delivery" element={<Content/>} />
        <Route path="storage" element={<Storage />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="security-identity-compliance" element={<Security />} />
        <Route path="developer-tools" element={<Developer />} />
        <Route path="management-governance" element={<Management />} />

      </Route>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
