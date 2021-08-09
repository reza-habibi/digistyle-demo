import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import DashboardLayout from "../components/ProfileComponents/dashboard/layout";
import HomePage from "../components/ProfileComponents/pages";
import Address from "../components/ProfileComponents/pages/user/Address";
import ProfileOrders from "../components/ProfileComponents/pages/user/Orders";
import { RootState } from "../redux/Store/Store";

function ProfileScreen() {
  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { userInfo } = userSignin;
  document.title = `پروفایل - ${userInfo.fullName} | فروشگاه اینترنتی لباس دیجی ممد`;
  return (
    <DashboardLayout>
      <Switch>
        <Route exact path="/profile/" component={HomePage} />
        <Route exact path="/profile/orders" component={ProfileOrders} />
        <Route exact path="/profile/address" component={Address} />
      </Switch>
    </DashboardLayout>
  );
}

export default ProfileScreen;
