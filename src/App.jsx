import React from 'react';
import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRouter from "./router/PublicRouter";
import ErrorPage from './Error/ErrorPage';

function App() {
  return (
    <Suspense fallback={''}>
      <main className="main">
        <Routes>
          {PublicRouter.map(({ path, Component }, index) => {
            return <Route key={index} path={path} element={<Component />} />;
          })}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
