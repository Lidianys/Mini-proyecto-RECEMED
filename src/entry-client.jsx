import { createRoot } from "react-dom/client";
import { VikeClient } from "vike/client";
import App from "./App";

const root = document.getElementById("app");
const rootElement = createRoot(root);

rootElement.render(
  <VikeClient>
    <App />
  </VikeClient>
);