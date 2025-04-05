import { AuthProvider } from "./auth/JwtContext";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
