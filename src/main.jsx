import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollWrapper from "./components/ScrollWrapper.jsx";
import { GlobalProvider } from './context/GlobalContext';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ScrollWrapper>
          <App />
        </ScrollWrapper>
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);
