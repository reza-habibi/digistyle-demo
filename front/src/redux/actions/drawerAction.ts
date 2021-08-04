import { DrawerActionTypes } from "../constants/drawerConstants";

  export interface DrawerAction {
    type: DrawerActionTypes;
    payload?: any;
  }
  
  export function showDrawer(): DrawerAction {
    return {
      type: DrawerActionTypes.ShowDrawer,
    };
  }
  
  export function hideDrawer(): DrawerAction {
    return {
      type: DrawerActionTypes.HideDrawer,
    };
  }