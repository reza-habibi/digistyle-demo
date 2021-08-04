export enum DrawerActionTypes {
    ShowDrawer,
    HideDrawer,
  }
  
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