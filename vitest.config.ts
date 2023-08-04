import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      coverage: {
        provider: "v8",
        include: ["src/components", "src/utils"],
        exclude: ["**/*/index.ts"],
        extension: [".ts", ".tsx"],
      },
    },
  })
);
