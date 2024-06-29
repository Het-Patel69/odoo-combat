// ** Icon imports

// ** Type import

import { VerticalNavItemsType } from "@/core/layouts/types";
import { Home } from "@mui/icons-material";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: Home,
      path: "/admin",
    },
  ];
};

export default navigation;
