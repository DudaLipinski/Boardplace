import "./App.css";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import state from "./state";
import { Menu } from "./components/Menu";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={state}>
        <BrowserRouter>
          <Menu />
          <AppRoutes />
        </BrowserRouter>
      </Provider> 
    </div>
  );
}

export default App;
