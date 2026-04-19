import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// `base` must match where the site is hosted:
// - User/org site at https://<user>.github.io/           → "/"
// - Project site at https://<user>.github.io/<repo>/     → "/<repo>/"
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Load `.env` from the project root (same directory as this config).
  envDir: ".",
  // Must match repo name for project pages: https://<user>.github.io/<repo>/
  base: "/Resource_Map_UCR/",
});
