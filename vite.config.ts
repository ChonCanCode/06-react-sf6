import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/06-react-sf6/",
  plugins: [tailwindcss(), react()],
});
