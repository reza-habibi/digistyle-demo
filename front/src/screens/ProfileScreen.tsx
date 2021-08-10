import { lazy } from "react";
import { Switch, Route } from "react-router-dom";
const DashboardLayout = lazy(
  () => import("../components/ProfileComponents/dashboard/layout")
);
const HomePage = lazy(() => import("../components/ProfileComponents/pages"));
const Address = lazy(
  () => import("../components/ProfileComponents/pages/user/Address")
);
const ChangeInfo = lazy(
  () => import("../components/ProfileComponents/pages/user/ChangeInfo")
);
const ProfileOrders = lazy(
  () => import("../components/ProfileComponents/pages/user/Orders")
);

function ProfileScreen(props: any) {
  return (
    <DashboardLayout>
      <Switch>
        <Route exact path="/profile/" component={HomePage} />
        <Route exact path="/profile/orders" component={ProfileOrders} />
        <Route exact path="/profile/address" component={Address} />
        <Route exact path="/profile/change-info" component={ChangeInfo} />
      </Switch>
    </DashboardLayout>
  );
}

export default ProfileScreen;
