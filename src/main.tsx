import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import router from "@/routes";
import "./index.css"
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
          </QueryClientProvider>
      </ThemeProvider>
  </React.StrictMode>,
)
