import type { ReactNode } from "react";

export interface NavItemProps {
  item: NavItem;
  open?: boolean;
  active?: boolean;
  isOffset?: boolean;
  subItem?: boolean;
  isExternalLink?: boolean;
  onClick?: () => void;
}

export interface NavItem {
  title: string;
  path: string;
  children?: NavSubList[];
  icon?: ReactNode;
}

export interface NavSubList {
  subheader: string;
  items: NavItem[];
}

export interface NavItemDashboardProps {
  item: NavItem;
  sx?: object;
  onClick?: () => void;
}

export interface NavListProps {
  item: NavItem;
  isOffset: boolean;
}

export interface NavSubListProps {
  items: NavItem[];
  onClose: () => void;
  isDashboard: boolean;
  subheader: string;
}

export interface ListItemProps {
  active?: boolean;
  open?: boolean;
  isOffset?: boolean;
  subItem?: boolean;
}
