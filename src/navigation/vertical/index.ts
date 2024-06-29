// ** Icon imports

// ** Type import

import { VerticalNavItemsType } from "@/core/layouts/types";
import { EditNote, Home, PostAdd } from "@mui/icons-material";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: Home,
      path: "/admin",
    },
    {
      title: "Upload Paper",
      icon: PostAdd,
      path: "/admin/upload",
    },
    {
      title: "Manage Test",
      icon: EditNote,
      path: "/admin/test",
    },
  ];
};

export default navigation;
