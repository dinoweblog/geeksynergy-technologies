import "./App.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
