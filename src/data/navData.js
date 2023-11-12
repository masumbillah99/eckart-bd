const commonNavLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
];

export const beforeLoginNavLinks = [
  ...commonNavLinks,
  {
    path: "/login",
    title: "Login",
  },
];

export const afterLoginNavLinks = [
  ...commonNavLinks,
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];
