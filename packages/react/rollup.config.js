import Ts from "rollup-plugin-typescript2";

export default {
    input: [
        "src/index.ts",
        "src/atoms/Button/index.ts",
        "src/atoms/Color/index.ts",
        "src/atoms/Text/index.ts",
        "src/atoms/Margin/index.ts",
    ],
    output: {
        dir: "lib",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [Ts()],
    watch: {
        include: 'src/**',
    },
    external: ['react', 'react-dom', '@coder.ts/foundation']
}