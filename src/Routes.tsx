import React from "react";
import { Route, Routes } from "react-router-dom";
import { Index } from "./components/index";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" Component={Index} />
    </Routes>
  );
};
