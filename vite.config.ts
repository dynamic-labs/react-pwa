import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "logo.png",
        "apple-touch-icon.png",
        "mask-icon.svg",
        "icon.svg",
      ],
      manifest: {
        name: "My Awesome DApp",
        short_name: "Dynamic PWA",
        description: "My Awesome DApp description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            purpose: "any maskable",
            sizes: "260x260",
            src: "/apple-touch-icon.png",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
