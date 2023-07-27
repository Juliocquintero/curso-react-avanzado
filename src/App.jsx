import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Router from "./router/Router";
import AuthProvider from "./hoc/AuthContext/Provider";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Router />

          </Layout>
        </BrowserRouter>
      </AuthProvider>


    </>
  );
}

export default App;
