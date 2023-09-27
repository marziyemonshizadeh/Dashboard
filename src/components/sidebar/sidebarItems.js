// icons-material
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import StoreIcon from "@mui/icons-material/Store";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

let dashboard = [
  { text: "خانه", to: "/", icon: HomeRoundedIcon },
  { text: "تجزیه و تحلیل", to: "/analytics", icon: TimelineRoundedIcon },
  { text: "فروش", to: "/sale", icon: TrendingUpIcon },
];
let quickMenu = [
  { text: "کاربران", to: "/users", icon: PersonIcon },
  { text: "کاربر جدید", to: "/newuser", icon: PersonAddIcon },
  { text: "محصولات", to: "/products", icon: StoreIcon },
  { text: "ساعت", to: "/clock", icon: StoreIcon },
  { text: "معاملات", to: "/", icon: AttachMoneyIcon },
  { text: "گزارش ها", to: "/", icon: BarChartIcon },
];
let notification = [
  { text: "ایمیل ها", to: "/", icon: MailOutlineIcon },
  { text: "بازخورد", to: "/", icon: DynamicFeedIcon },
  { text: "پیام ها", to: "/", icon: ChatBubbleOutlineIcon },
];
let staff = [
  { text: "مدیریت ", to: "/", icon: BusinessCenterRoundedIcon },
  { text: "تجزیه و تحلیل", to: "/", icon: TimelineRoundedIcon },
  { text: "گزارش ها", to: "/", icon: ReportRoundedIcon },
];
export default [dashboard, quickMenu, notification, staff];
