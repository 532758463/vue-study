import { App } from 'vue';

export default {
  install:(app: App, options: Record<string, any>) => {
    app.config.globalProperties.$translate = (key: string) => {
      const a = key.split('.').reduce((o, i) => o[i], options);
      if(typeof a === 'string') {
        return a;
      }
      return '';
    }
  }
}