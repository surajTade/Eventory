import "./App.css";
import Body from "./components/Body";
import ErrorBoundary from "./components/error/ErrorBoundry";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ErrorBoundary>
      <Body />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ErrorBoundary>
  );
}

export default App;
