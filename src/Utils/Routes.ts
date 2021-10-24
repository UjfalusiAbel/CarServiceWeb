import LoginScreen from "../Components/LoginScreen";
import RegisterScreen from "../Components/RegisterScreen";

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
        component:LoginScreen,
        title:"Registrare",
        needsAuth:false
    }
];

export type {IRoute};
export default routes;