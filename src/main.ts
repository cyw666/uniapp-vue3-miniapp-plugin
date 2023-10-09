import { createSSRApp } from 'vue';
import App from './App.vue';
import 'uno.css';

export function createApp() {
    const app = createSSRApp(App);

    Object.values(import.meta.globEager('./modules/*.ts')).forEach(m => m.install?.(app));

    return {
        app,
    };
}
