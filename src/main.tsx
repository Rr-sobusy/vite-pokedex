import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonStats } from "./components";

// Create instance of react-query client
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<PokemonStats />} path="pokemon/:pokemonId" />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
