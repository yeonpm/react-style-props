import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import { dts } from "rollup-plugin-dts";

const aliasConfig = {
  entries: [{ find: "@", replacement: "./src" }],
};

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      alias(aliasConfig),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        noEmitOnError: true,
        exclude: ["**/__tests__", "**/*.test.ts"],
      }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
    external: [/\.css$/],
  },
];
