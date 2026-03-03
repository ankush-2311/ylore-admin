import selectedDashboardIcon from "@/public/sidenav/selected/dashboard.svg";
import DashboardIcon from "@/public/sidenav/dashboard.svg";
import { NavItemTypes } from "@/utils/types/sidenavDataType";
import UserManagementIcon from "@/public/sidenav/usermanagement.svg";
import selectedUserManagementIcon from "@/public/sidenav/selected/usermanagementselected.svg";
import CreatorsManagementIcon from "@/public/sidenav/createorsmanagement.svg";
import selectedCreatorsManagementIcon from "@/public/sidenav/selected/creatorsmanagementselected.svg";
import TravelManagementIcon from "@/public/sidenav/travelmanagement.svg";
import selectedTravelManagementIcon from "@/public/sidenav/selected/travelmanagementselected.png";
import PlacesIcon from "@/public/sidenav/places.svg";
import ToursPackagesIcon from "@/public/sidenav/tours&packages.svg";
import CommunityContentIcon from "@/public/sidenav/communitycontent.svg";
import selectedCommunityContentIcon from "@/public/sidenav/selected/communitycontentselected.svg";
import StoriesPostsIcon from "@/public/sidenav/storiespost.svg";
import CreatorsWallIcon from "@/public/sidenav/creatorswall.svg";
import BookingOrdersIcon from "@/public/sidenav/booking&order.svg";
import selectedBookingOrdersIcon from "@/public/sidenav/booking&order.svg";
import FinanceIcon from "@/public/sidenav/finance.svg";
import selectedFinanceIcon from "@/public/sidenav/selected/financeselected.svg";
import SalesOverviewIcon from "@/public/sidenav/salesoverview.svg";
import DistributionIcon from "@/public/sidenav/distribution.svg";
import PaymentGatewayIcon from "@/public/sidenav/paymentgateway.svg";
import FinancialReportsIcon from "@/public/sidenav/financialreports.svg";
import AnalyticsReportsIcon from "@/public/sidenav/analyticsandreport.svg";
import selectedAnalyticsReportsIcon from "@/public/sidenav/analyticsandreport.svg";
import CommunicationsIcon from "@/public/sidenav/communications.svg";
import selectedCommunicationsIcon from "@/public/sidenav/communications.svg";
import AdminSettingsIcon from "@/public/sidenav/adminsettings.svg";
import selectedAdminSettingsIcon from "@/public/sidenav/adminsettings.svg";



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
    name: "User Management",
    path: "/user-management",
    logo: UserManagementIcon,
    selectedLogo: selectedUserManagementIcon,
    isSubRoute: false,
    hasSubRoute: false,
  },
  {
    id: 3,
    name: "Admin Management",
    path: "/admin-management",
    logo: UserManagementIcon,
    selectedLogo: selectedUserManagementIcon,
    isSubRoute: false,
    hasSubRoute: false,
  },

  {
    id: 4,
    name: "Creators Management",
    path: "/creators-management",
    logo: CreatorsManagementIcon,
    selectedLogo: selectedCreatorsManagementIcon,
    isSubRoute: false,
    hasSubRoute: false,
  },
  {
    id: 5,
    name: "Content Management",
    path: "/content-management",
    logo: TravelManagementIcon,
    selectedLogo: selectedTravelManagementIcon,
    isSubRoute: false,
    hasSubRoute: true,
    children: [
      {
        id: "5-1",
        name: "Places",
        path: "/content-management/places",
        logo: PlacesIcon,

        isSubRoute: true,
        hasSubRoute: false,
      },
      {
        id: "5-2",
        name: "Tours",
        path: "/content-management/tours",
        logo: ToursPackagesIcon,

        isSubRoute: true,
        hasSubRoute: false,
      },
      {
        id: "5-3",
        name: "Mistory",
        path: "/content-management/mistory",
        logo: ToursPackagesIcon,

        isSubRoute: true,
        hasSubRoute: false,
      },
       {
        id: "5-4",
        name: "Hub",
        path: "/content-management/hubs",
        logo: StoriesPostsIcon,

        isSubRoute: true,
        hasSubRoute: false,
      },
      {
        id: "5-",
        name: "Creators Wall",
        path: "/content-management/creators-wall",
        logo: CreatorsWallIcon,

        isSubRoute: true,
        hasSubRoute: false,
      },
    ],
  },
  {
    id: 6,
    name: "Creator Studio",
    path: "/creator-studio",
    logo: CommunityContentIcon,
    selectedLogo: selectedCommunityContentIcon,
    isSubRoute: false,
    hasSubRoute: false,
   
  },
  {
    id: 7,
    name: "Booking & Orders",
    path: "/booking-and-orders",
    logo: BookingOrdersIcon,
    selectedLogo: selectedBookingOrdersIcon,
    isSubRoute: false,
    hasSubRoute: false,
  },
  {
    id: 8,
    name: "Finance",
    path: "/finance",
    logo: FinanceIcon,
    selectedLogo: selectedFinanceIcon,
    isSubRoute: false,
    hasSubRoute: true,
    children: [
      {
        id: "8-1",
        name: "Sales Overview",
        path: "/finance/sales-overview",
        logo: SalesOverviewIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
    
      {
        id: "8-2",
        name: "Payment Gateway",
        path: "/finance/payment-gateway",
        logo: PaymentGatewayIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
       {
        id: "8-3",
        name: "Commission",
        path: "/finance/commission",
        logo: PaymentGatewayIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
      {
        id: "8-4",
        name: "Financial Reports",
        path: "/finance/financial-reports",
        logo: FinancialReportsIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
    ],
  },
  
  {
    id: 9,
    name: "Communications",
    path: "/communications",
    logo: CommunicationsIcon,
    selectedLogo: selectedCommunicationsIcon,
    isSubRoute: false,
    hasSubRoute: true,
    children: [
      {
        id: "9-1",
        name: "Push Notifications",
        path: "/communications/push-notifications",
        logo: SalesOverviewIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
      {
        id: "9-2",
        name: "E-Mail",
        path: "/communications/email",
        logo: DistributionIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
      {
        id: "9-3",
        name: "FAQ",
        path: "/communications/faq",
        logo: PaymentGatewayIcon,
        isSubRoute: true,
        hasSubRoute: false,
      },
    ]
  },
];















