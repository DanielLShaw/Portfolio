import { actions } from "../actions/nav";

export const getInitialState = () => ({
  open: false,
});

const navReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case actions.SET_NAV:
      return { ...state, open: action?.payload ?? false };
    case actions.TOGGLE_NAV:
      return { ...state, open: !state?.open };
    default:
      return state;
  }
};

export default navReducer;
