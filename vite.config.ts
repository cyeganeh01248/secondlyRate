import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import staticAdapter from "solid-start-static";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [solid({ adapter: staticAdapter() })],
    base: "/secondlyRate/",
    clearScreen: false,
    server: {
        port: 1420,
        strictPort: true,
        watch: {},
    },
}));
