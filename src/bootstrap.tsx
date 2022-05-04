import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

export const lazy = (componentImportFn: Function) =>
  React.lazy(async () => {
    let obj = await componentImportFn();
    return typeof obj.default === "function" ? obj : obj.default;
  });

// const Navigation = lazy(() => import("header/Navigation"));
const Navigation = React.lazy(async () => await import("header/Navigation"));
// const Navigation = React.lazy(() => import("header/Navigation"));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.Suspense fallback={<Spinner size="xl" />}>
      <Navigation />
    </React.Suspense>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
