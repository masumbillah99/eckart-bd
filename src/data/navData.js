const commonNavLinks = [
  {
    path: "/",
    title: "Home",
  },
];

export const beforeLoginNavLinks = [
  ...commonNavLinks,
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/login",
    title: "Login",
  },
];

export const afterLoginNavLinks = [...commonNavLinks];
