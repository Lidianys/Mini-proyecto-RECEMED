import react from "@vitejs/plugin-react-swc";
//import { createVikePlugin } from "vike/plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
