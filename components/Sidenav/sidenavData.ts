import selectedDashboardIcon from "@/public/sidenav/selected/dashboard.svg";
import DashboardIcon from "@/public/sidenav/dashboard.svg";
import SupportIcon from "@/public/sidenav/support.svg";
import EmailIcon from "@/public/sidenav/email.svg";
import selectedEmailIcon from "@/public/sidenav/selected/email.svg";
import FaqIcon from "@/public/sidenav/faq.svg";
import selectedFaqIcon from "@/public/sidenav/selected/faq.svg";
import { NavItemTypes } from "@/utils/types/sidenavDataType";

export const navMenu: NavItemTypes[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    logo: DashboardIcon,
    selectedLogo: selectedDashboardIcon,
    isSubRoute: false,
    hasSubRoute: false,
  },
  {
    id: 2,
    name: "Support",
    path: "/support",
    logo: SupportIcon,
    selectedLogo: SupportIcon,
    isSubRoute: false,
    hasSubRoute: true,
    children: [
      {
        id: "2-1",
        name: "FAQ",
        path: "/support/faqs",
        logo: FaqIcon,
        selectedLogo: selectedFaqIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
      {
        id: "2-2",
        name: "Emails",
        path: "/support/emails",
        logo: EmailIcon,
        selectedLogo: selectedEmailIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
    ],
  },
];
