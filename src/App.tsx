
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Hotels from './components/Hotel';

import { configureStore } from "./components/AppState";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store = {configureStore()}>
    <BrowserRouter>
      <Routes>
        {/* routing */}
        <Route path="/hotels" element={<Hotels />} />
      </Routes> 
      </BrowserRouter>
      </Provider>
  );
}

export default App;
