import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Administrateur from "./components/administrateur/Administrateur";
import { Receptionniste } from "./components/receptionniste/Receptionniste";
import Generaliste from "./components/generaliste/Generaliste";
import Stockage from "./components/stockage/Stockage";
import Laborantin from "./components/laborantin/Laborantin";
import Infirmiere from "./components/infirmiere/Infirmiere";
import NotFound from "./components/layout/NotFound";
import PrivateRoute from "./components/routing/PrivateRoute";
import { LOGOUT } from "./actions/types";
import "./assiets/css/style.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MedecinSpecialiste from "./components/specialiste/Specialiste";

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer transition={Slide} theme='dark' />
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route
            path='administrateur'
            element={<PrivateRoute component={Administrateur} />}
          />
          <Route
            path='receptionniste'
            element={<PrivateRoute component={Receptionniste} />}
          />
          <Route
            path='generaliste'
            element={<PrivateRoute component={Generaliste} />}
          />
          <Route
            path='infirmiere'
            element={<PrivateRoute component={Infirmiere} />}
          />
          <Route
            path='laborantin'
            element={<PrivateRoute component={Laborantin} />}
          />
          <Route
            path='radiologue'
            element={<PrivateRoute component={Generaliste} />}
          />
          <Route
            path='sagefemme'
            element={<PrivateRoute component={Generaliste} />}
          />
          <Route
            path='gynecologue'
            element={<PrivateRoute component={Generaliste} />}
          />
          <Route
            path='echographiste'
            element={<PrivateRoute component={Generaliste} />}
          />
          <Route
            path='pediatre'
            element={<PrivateRoute component={Generaliste} />}
          />
          <Route
            path='orl'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='ophtalmologue'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='chirurgien'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='dermatologue'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='pneumologue'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='psychologue'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='neurologue'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='rhumatologue'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='nutritioniste'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='kinesitherapeute'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='ambulancier'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='medecineInterne'
            element={<PrivateRoute component={MedecinSpecialiste} />}
          />
          <Route
            path='gestionnairestock'
            element={<PrivateRoute component={Stockage} />}
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
