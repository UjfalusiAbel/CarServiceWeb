import LoginScreen from "../Components/Pages/LoginScreen";
import RegisterScreen from "../Components/Pages/RegisterScreen"
import SearchServiceScreen from "../Components/Pages/SearchServiceScreen";

interface IRoute{
    path:string;
    component:Function;
    title:string;
    needsAuth:Boolean;
}

const routes:IRoute[] = [
    {
        path:"/auth/register",
        component:RegisterScreen,
        title:"Registrare",
        needsAuth:false
    },
    {
        path:"/auth/login",
        component:SearchServiceScreen,
        title:"Registrare",
        needsAuth:false
    }
];

export type {IRoute};
export default routes;