import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { RiUserSettingsFill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";

export const adminSidebarRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: TbLayoutDashboardFilled,
  },
  {
    name: "Category",
    path: "category",
    icon: TbLayoutDashboardFilled,
  },
  {
    name: "Product",
    path: "product",
    icon: TbLayoutDashboardFilled,
  },
  {
    name: "User",
    path: "user",
    icon: FaUser,
  },
  {
    name: "Setting",
    icon: IoSettingsSharp,
    children: [
      {
        name: "Account Setting",
        path: "account-setting",
        icon: RiUserSettingsFill,
      },
    ],
  },
];
