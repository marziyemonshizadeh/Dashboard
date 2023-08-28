import { AiFillHome, AiOutlineMail, AiOutlineRise } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineAttachMoney, MdReport } from "react-icons/md";
import { PiBagBold } from "react-icons/pi";
import { RiFeedbackFill } from "react-icons/ri";

let dashboard = [
  { text: "خانه", to: "/", icon: AiFillHome },
  { text: "تجزیه و تحلیل", to: "/", icon: IoAnalyticsSharp },
  { text: "فروش", to: "/", icon: AiOutlineRise },
];
let quickMenu = [
  { text: "کاربران", to: "/users", icon: FaRegUser },
  { text: "کاربر جدید", to: "/newuser", icon: FaRegUser },
  { text: "محصولات", to: "/products", icon: BiStoreAlt },
  { text: "معاملات", to: "/", icon: MdOutlineAttachMoney },
  { text: "گزارش ها", to: "/", icon: BsFillBarChartFill },
];
let notification = [
  { text: "ایمیل ها", to: "/", icon: AiOutlineMail },
  { text: "بازخورد", to: "/", icon: RiFeedbackFill },
  { text: "پیام ها", to: "/", icon: LuMessageSquare },
];
let staff = [
  { text: "مدیریت ", to: "/", icon: PiBagBold },
  { text: "تجزیه و تحلیل", to: "/", icon: IoAnalyticsSharp },
  { text: "گزارش ها", to: "/", icon: MdReport },
];
export default [dashboard, quickMenu, notification, staff];
