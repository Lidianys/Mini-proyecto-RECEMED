import { renderToString } from "react-dom/server";
import { VikeServer } from "vike/server";
import App from "./App";

export function render() {
  return renderToString(
    <VikeServer>
      <App />
    </VikeServer>
  );
}