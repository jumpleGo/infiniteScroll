import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from "path";

export default defineConfig({
    define: {
        'process.env': process.env,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [vue()],
});
