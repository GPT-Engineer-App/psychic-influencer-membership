import { Box } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavigationMenu from "./components/NavigationMenu.jsx";
import Login from "./pages/Login";
import AboutKendall from "./pages/AboutKendall";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";

function App() {
  return (
    <Box pos="relative" minH="100vh">
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-kendall" element={<AboutKendall />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
