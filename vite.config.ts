import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
    base: "/",
    plugins: [react()],
    preview: {
        port: 3001,
        strictPort: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 3001,
        strictPort: true,
        host: true,
        origin: "http://0.0.0.0:8080",
    },
});
