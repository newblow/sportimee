import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Paiement from "../../pages/paiement/paiement";
import Training from "../../pages/training/training";
import Abonnement from "../../pages/abonnement/abonnement";
import Dashboard from "../../pages/dashboard";

import UserProvider from "../../components/context/userProvider";

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/paiement",
    element: <Paiement />,
  },
  {
    path: "/training",
    element: <Training />,
  },
  {
    path: "/abonnement",
    element: <Abonnement />,
  },
  {
    path: "/dashboard",
    element: (
      <UserProvider>
        <Dashboard />
      </UserProvider>
    ),
  },
]);
