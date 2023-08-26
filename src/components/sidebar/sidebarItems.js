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
  { text: "خانه", icon: AiFillHome },
  { text: "تجزیه و تحلیل", icon: IoAnalyticsSharp },
  { text: "فروش", icon: AiOutlineRise },
];
let quickMenu = [
  { text: "کاربران", icon: FaRegUser },
  { text: "کاربر جدید", icon: FaRegUser },
  { text: "محصولات", icon: BiStoreAlt },
  { text: "معاملات", icon: MdOutlineAttachMoney },
  { text: "گزارش ها", icon: BsFillBarChartFill },
];
let notification = [
  { text: "ایمیل ها", icon: AiOutlineMail },
  { text: "بازخورد", icon: RiFeedbackFill },
  { text: "پیام ها", icon: LuMessageSquare },
];
let staff = [
  { text: "مدیریت ", icon: PiBagBold },
  { text: "تجزیه و تحلیل", icon: IoAnalyticsSharp },
  { text: "گزارش ها", icon: MdReport },
];
export default [dashboard, quickMenu, notification, staff];
