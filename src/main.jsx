import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import "./index.css";
import App from "./App.jsx";
import DriverContext from "./context/DriverContext.jsx";
import SocketProvider from "./context/SocketContext.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <DriverContext>
    <UserContext>
      <SocketProvider>
        <StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StrictMode>
      </SocketProvider>
    </UserContext>
  </DriverContext>
);
