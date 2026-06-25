import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Overview from "./page/Overview";
import OrdersPage from "./page/OrdersPage";
import CustomerPage from "./page/CustomerPage";
import SettingsPage from "./page/SettingsPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        {/* Show the dedicated orders screen so the route matches the sidebar label. */}
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* Redirect unknown SPA URLs back to the dashboard instead of rendering a blank page. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
