import * as components from "./components";

const libComponents = {
  install(Vue, options = {}){
    //All the components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  }
}

export default libComponents;

if( typeof window != 'undefined' && window.vue) {
  window.Vue.use(libComponents);
}
