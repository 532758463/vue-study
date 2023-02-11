import { createApp } from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import { Router } from '@/router';

const app = createApp(App);

app.use(Router);

app.mount('#app');
