import { createSelector } from "reselect";

export const selectNav = (state) => state?.nav ?? {};

export const selectNavOpen = createSelector(selectNav, (nav) => nav?.open);

export default selectNavOpen;

