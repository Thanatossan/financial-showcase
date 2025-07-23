
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { VscOpenPreview } from "react-icons/vsc";
import type { MenuType } from "../model";
import { AiOutlineStock } from "react-icons/ai";


export const MENU_ITEMS: MenuType[] = [
  {
    path: '/',
    label: 'Overview',
    icon: AiOutlineStock,
    isRequiredOwner: true,
  },
  {
    path: 'dashboard',
    label: 'Dashboard',
    icon: MdDashboard,
    isRequiredOwner: true,
  },
  {
    path: 'transaction',
    label: 'Transaction',
    icon: GrTransaction,
    isRequiredOwner: true,
  },
  {
    path: 'reports',
    label: 'Reports',
    icon: VscOpenPreview,
    isRequiredOwner: true,
  }
];