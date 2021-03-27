import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
 const routes = {
  "/": () => <HomeScreen />,
  "/product/:id": ({ id }) => <ProductScreen prodId = {id}/>,
};
export default routes;
