export const actions = {
  SET_NAV: "SET_NAV",
  TOGGLE_NAV: "TOGGLE_NAV",
};

export const toggleNav = () => (dispatch) => {
  console.log("toggle");
  dispatch({ type: actions.TOGGLE_NAV });
};

export const setNav = (payload) => (dispatch) => {
  dispatch({ type: actions.SET_NAV, payload });
};
