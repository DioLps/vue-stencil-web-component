import { createApp } from "vue";
import App from "./App.vue";
import { applyPolyfills, defineCustomElements } from "my-lib-integration-test/loader";

applyPolyfills().then(() => {
  defineCustomElements();
});

createApp(App).mount("#app");
