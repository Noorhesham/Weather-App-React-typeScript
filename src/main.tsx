import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DegreeProvider } from "./context/DegreeContext.tsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DegreeProvider>
      <App />
      </DegreeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
