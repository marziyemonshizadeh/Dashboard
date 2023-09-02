let xAxisData = [
  {
    month: "فروردین",
    Sale: 112_000,
    expenditure: 100_000,
  },
  {
    month: "اردیبهشت",
    Sale: 99_000,
    expenditure: 100_000,
  },
  {
    month: "خرداد",
    Sale: 12_080,
    expenditure: 10_000,
  },
  {
    month: "تیر",
    Sale: 54_000,
    expenditure: 0,
  },
  {
    month: "مرداد",
    Sale: 85_000,
    expenditure: 150_000,
  },
  {
    month: "شهریور",
    Sale: 120_000,
    expenditure: 10_000,
  },
  {
    month: "مهر",
    Sale: 85_000,
    expenditure: 50_000,
  },
  {
    month: "آبان",
    Sale: 34_000,
    expenditure: 36_500,
  },
  {
    month: "آذر",
    Sale: 18_595,
    expenditure: 4_000,
  },
  {
    month: "دی",
    Sale: 73_078,
    expenditure: 3_078,
  },
  {
    month: "بهمن",
    Sale: 12_900,
    expenditure: 200_000,
  },
  {
    month: "اسفند",
    Sale: 97_000,
    expenditure: 7_000,
  },
];
let newMembers = [
  {
    id: 1,
    username: "محمدرضا",
    title: "فول استک",
    img: "https://media.classlifestyle.com/o.revistaclass.al/media3/-640-0-633f30ea2869f.jpg",
    alt: "fullstack",
  },
  {
    id: 2,
    username: "مرضیه",
    title: " فرانتد دولوپر",
    img: "https://celebzbiography.com/wp-content/uploads/2020/07/Hande-Ercel-Wiki-celebzbiography.com_.webp",
    alt: "frontend",
  },
  {
    id: 3,
    username: "راضیه ",
    title: "حسابدار",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-CR2t1HkUgjqsEmqM5HGeXjoalosWdkgrw&usqp=CAU",
    alt: "accounting",
  },
  {
    id: 4,
    username: "مهدی ",
    title: "مدیر",
    img: "https://media.licdn.com/dms/image/C4E03AQFD40nCK6Ak8Q/profile-displayphoto-shrink_400_400/0/1517729349688?e=1695859200&v=beta&t=CiSpKIuhJ_AZ-10WoQlcWOAXzx-kkKhvy3E4IaEhO7w",
    alt: "manager",
  },
  {
    id: 5,
    username: "رقیه ",
    title: "مدیر",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3aPRRM_m1ZTh2a4EQuqrmpOb24-mX7QxSQ&usqp=CAU",
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
let products = [
  {
    id: 1,
    title: "msi",
    avatar:
      "https://rukminim1.flixcart.com/image/850/1000/xif0q/computer/t/a/z/katana-17-b13vfk-253in-gaming-laptop-msi-original-imagmmhgcwm76gke.jpeg?q=90",
    price: "1000$",
  },
  {
    id: 2,
    title: "Macbook Pro",
    avatar: "https://m.media-amazon.com/images/I/71CVoc1XVIL._AC_SL1500_.jpg",
    price: "1200$",
  },
  {
    id: 3,
    title: "iPhone14 Pro Max",
    avatar:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/6/x/j/-original-imaghxejqvpwfqh2.jpeg?q=90",
    price: "900$",
  },
  {
    id: 4,
    title: "Dell",
    avatar:
      "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/08/Dell-XPS-13-Plus-16-scaled.jpg",
    price: " 1100$",
  },
  {
    id: 5,
    title: "Asus",
    avatar:
      "https://www.pcworld.com/wp-content/uploads/2023/06/ASUS_ROG_Zephyrus_G14_GA402_1.jpg?quality=50&strip=all",
    price: "1100$",
  },
];
const productsData = [
  {
    name: "تیر",
    sales: 4000,
  },
  {
    name: "مرداد",
    sales: 3000,
  },
  {
    name: "شهریور",
    sales: 5000,
  },
];
const AnnualSalesOfEachProduct = [
  { title: "msi", count: 48, fill: "#A4DE6C" },
  { title: "Macbook Pro", count: 81, fill: "#82CA9D" },
  { title: "iPhone14 Pro Max", count: 139, fill: "#8884D8" },
  { title: "Dell", count: 20, fill: "#FFC658" },
  { title: "Asus", count: 96, fill: "#8DD1E1" },
];
export {
  AnnualSalesOfEachProduct,
  newMembers,
  products,
  productsData,
  transactions,
  userRows,
  xAxisData,
};
