import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

function componentTagger() {
  return {
    name: 'component-tagger',
    transform(code: string, id: string): string | null {
      if (id.endsWith('.jsx') || id.endsWith('.tsx')) {
      // Example transformation: add a comment at the top of each component file
      return `// Component tagged by componentTagger\n${code}`;
      }
      return code;
    }
  };
}

