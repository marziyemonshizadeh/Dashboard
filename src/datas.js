let xAxisData = [
  {
    name: "فروردین",
    Sale: 112_000,
  },
  {
    name: "اردیبهست",
    Sale: 99_000,
  },
  {
    name: "خرداد",
    Sale: 12_080,
  },
  {
    name: "تیر",
    Sale: 54_000,
  },
  {
    name: "مرداد",
    Sale: 85_000,
  },
  {
    name: "شهریور",
    Sale: 120_000,
  },
  {
    name: "مهر",
    Sale: 85_000,
  },
  {
    name: "آبان",
    Sale: 34_000,
  },
  {
    name: "آذر",
    Sale: 18_595,
  },
  {
    name: "دی",
    Sale: 73_078,
  },
  {
    name: "بهمن",
    Sale: 12_900,
  },
  {
    name: "اسفند",
    Sale: 97_000,
  },
];
let newMembers = [
  {
    id: 1,
    username: "محمدرضا",
    title: "فول استک",
    img: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    alt: "fullstack",
  },
  {
    id: 2,
    username: "مرضیه",
    title: " فرانتد دولوپر",
    img: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    alt: "frontend",
  },
  {
    id: 3,
    username: "راضیه ",
    title: "حسابدار",
    img: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    alt: "accounting",
  },
  {
    id: 4,
    username: "مهدی ",
    title: "مدیر",
    img: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    alt: "manager",
  },
  {
    id: 5,
    username: "رقیه ",
    title: "مدیر",
    img: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    alt: "manager",
  },
];
let transactions = [
  {
    id: 1,
    customer: "محمدرضا",
    date: "12 فروردین 1402",
    amount: 123,
    status: "تایید شده ",
  },
  {
    id: 2,
    customer: "محمدرضا",
    date: "12 فروردین 1402",
    amount: 123,
    status: "رد شده ",
  },
  {
    id: 3,
    customer: "محمدرضا",
    date: "12 فروردین 1402",
    amount: 123,
    status: " انتظار ",
  },
  {
    id: 4,
    customer: "محمدرضا",
    date: "12 فروردین 1402",
    amount: 123,
    status: " انتظار ",
  },
  {
    id: 5,
    customer: "محمدرضا",
    date: "12 فروردین 1402",
    amount: 123,
    status: " انتظار ",
  },
];
// let userRows = [
//   {
//     id: 1,
//     username: "مرضیه",
//     avatar:
//       "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
//     status: "فعال",
//     transaction: "129.52$",
//   },
//   {
//     id: 2,
//     username: "راضیه",
//     avatar:
//       "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
//     status: "فعال",
//     transaction: "129.52$",
//   },
//   {
//     id: 3,
//     username: "محمد",
//     avatar:
//       "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
//     status: "فعال",
//     transaction: "129.52$",
//   },
//   {
//     id: 4,
//     username: "سوسن",
//     avatar:
//       "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
//     status: "فعال",
//     transaction: "129.52$",
//   },
//   {
//     id: 5,
//     username: "امین",
//     avatar:
//       "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
//     status: "فعال",
//     transaction: "129.52$",
//   },
//   {
//     id: 6,
//     username: "زهرا",
//     avatar:
//       "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
//     status: "فعال",
//     transaction: "129.52$",
//   },
// ];
let userRows = [
  {
    id: 1,
    username: "سوسن اسماعیلی",
    avatar:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    status: "active",
    transaction: "$129.52",
    email: "susan@gmail.com",
  },
  {
    id: 2,
    username: "محمد امینی",
    avatar:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    status: "non-active",
    transaction: "$110",
    email: "amin@gmail.com",
  },
  {
    id: 3,
    username: "فرید کریمی",
    avatar:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    status: "active",
    transaction: "$98",
    email: "farid@gmail.com",
  },
  {
    id: 4,
    username: "زهرا محمد زاده",
    avatar:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    status: "active",
    transaction: "$0",
    email: "zahra@gmail.com",
  },
  {
    id: 5,
    username: "بارباروس",
    avatar:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    status: "active",
    transaction: "$55.98",
    email: "barbarous@gmail.com",
  },
  {
    id: 6,
    username: "دریا موسی زاده",
    avatar:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
    status: "active",
    transaction: "$55.98",
    email: "darya@gmail.com",
  },
];
export { newMembers, transactions, userRows, xAxisData };
