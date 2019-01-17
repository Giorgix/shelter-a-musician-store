import PleaseSignIn from "../components/PleaseSignin";
import OrderList from "../components/OrderList";

const OrdersPage = props => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);

export default OrdersPage;
