import { DrawerAction, DrawerActionTypes } from "../actions/drawerAction";


const initialState = {
  drawer: false,
};

export function drawerReducer(state = initialState, action: DrawerAction) {
  switch (action.type) {
    case DrawerActionTypes.ShowDrawer:
      return {
        ...state,
        drawer: true,
      };
    case DrawerActionTypes.HideDrawer:
      return {
        ...state,
        drawer: false,
      };
    default:
      return state;
  }
}
