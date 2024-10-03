import React from 'react';
import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRouter from "./router/PublicRouter";

function App() {
  return (
    <Suspense fallback={''}>
      <main className="main">
        <Routes>
          {PublicRouter.map(({ path, Component }, index) => {
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
