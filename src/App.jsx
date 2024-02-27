import { Box } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavigationMenu from "./components/NavigationMenu.jsx";

function App() {
  return (
    <Box pos="relative" minH="100vh">
      <Router>
        <NavigationMenu />
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
