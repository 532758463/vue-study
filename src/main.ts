import { createApp } from 'vue';
import App from './App.vue';
import './styles/tailwind.css';
import { Router } from '@/router';
import i18nPlugin from './plugins/i18n'

const app = createApp(App);

app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!!!!!!!!!!'
  }
})

app.use(Router);

app.mount('#app');
