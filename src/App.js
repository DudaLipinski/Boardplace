import "./App.css"
import "antd/dist/antd.css"
import { Provider } from "react-redux"
import AppRoutes from "./AppRoutes"
import state from "./state"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div>
      <Provider store={state}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
