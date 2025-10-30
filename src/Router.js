import { createWebHistory, createRouter } from "vue-router";
import SumaCheckbox from "./components/SumaCheckbox.vue";
import SeleccionMultiple from "./components/SeleccionMultiple.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import PadreNumeros from "./components/PadreNumeros.vue";
import PadreDeporte from "./components/PadreDeporte.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";
import HomeComponent from "./components/HomeComponent.vue";

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/comics", component: ComicsComponent},
    {path: "/sumacheckbox", component: SumaCheckbox},
    {path: "/seleccionmultiple", component: SeleccionMultiple},
    {path: "/numeros", component: PadreNumeros},
    {path: "/deporte", component: PadreDeporte},
    {path: "/doble/:numero?", component: NumeroDoble},
    {path: "/tabla/:numero", component: TablaMultiplicar},
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;