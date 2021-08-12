import { lazy } from "react";
import { Switch, Route } from "react-router-dom";
const DashboardLayout = lazy(
  () => import("../components/DashboardComponents/dashboard/layout")
);
const HomePage = lazy(() => import("../components/DashboardComponents/pages"));
const DashboardUsers = lazy(
  () => import("../components/DashboardComponents/pages/Admin/Users")
);
const ChangeInfo = lazy(
  () => import("../components/DashboardComponents/pages/Admin/ChangeInfo")
);
const ProfileOrders = lazy(
  () => import("../components/DashboardComponents/pages/Admin/Orders")
);

function AdminDashboardScreen(props: any) {
  return (
    <DashboardLayout>
      <Switch>
        <Route exact path="/dashboard/" component={HomePage} />
        <Route exact path="/dashboard/orders" component={ProfileOrders} />
        <Route exact path="/dashboard/users" component={DashboardUsers} />
        <Route exact path="/dashboard/change-info" component={ChangeInfo} />
      </Switch>
    </DashboardLayout>
  );
}

export default AdminDashboardScreen;
