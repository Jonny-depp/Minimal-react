import { PATH_DASHBOARD } from "../../../routes/paths";
import SvgColor from "../../../components/svg-color";
const icon = (name: string) => {
  return (
    <SvgColor
      src={`/assets/icons/navbar/${name}.svg`}
      sx={{ width: 1, height: 1 }}
    />
  );
};

const ICONS = {
  blog: icon("ic_blog"),
  cart: icon("ic_cart"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
};

const navConfig = [
  {
    subheader: "general",
    items: [
      { title: "app", path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      {
        title: "ecommerce",
        path: PATH_DASHBOARD.general.ecommerce,
        icon: ICONS.ecommerce,
      },
      {
        title: "analytics",
        path: PATH_DASHBOARD.general.analytics,
        icon: ICONS.analytics,
      },
      {
        title: "banking",
        path: PATH_DASHBOARD.general.banking,
        icon: ICONS.banking,
      },
      {
        title: "booking",
        path: PATH_DASHBOARD.general.booking,
        icon: ICONS.booking,
      },
      { title: "file", path: PATH_DASHBOARD.general.file, icon: ICONS.file },
    ],
  },

  {
    subheader: "management",
    items: [
      // USER
      {
        title: "user",
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: "profile", path: PATH_DASHBOARD.user.profile },
          { title: "account", path: PATH_DASHBOARD.user.account },
          { title: "cards", path: PATH_DASHBOARD.user.cards },
          { title: "create", path: PATH_DASHBOARD.user.new },
          { title: "edit", path: PATH_DASHBOARD.user.demoEdit },
          { title: "list", path: PATH_DASHBOARD.user.list },
        ],
      },
    ],
  },
];

export default navConfig;
