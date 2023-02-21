import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={<Home />} />
      <Route path="cadastro/video" element={<CadastroVideo />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);