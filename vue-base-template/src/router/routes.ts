import Home from "@/pages/Home.vue";
import Styles from "@/pages/Styles.vue";
import Features from "@/pages/Features.vue";
import Components from "@/pages/Components.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
  },
  {
    path: "/components",
    name: "Componentes",
    component: Components,
  },
  {
    path: "/styles",
    name: "Estilos e Transições",
    component: Styles,
  },
];
