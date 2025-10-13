import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Advocacia/" : "/", // Base URL para GitHub Pages
  server: {
    host: "::",
    port: 8080,
    fs: {
      // Permite que o Vite sirva arquivos fora do diretório raiz
      allow: ['..'],
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
