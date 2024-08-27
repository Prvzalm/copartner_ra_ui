import {
  dashboardIconactive,
  dashboardIconInactive,
  subscriptionIconactive,
  subscriptionIconInactive,
  webinarIcon,
  availableIcon,
  walletIconInactive,
  walletIconactive,
  chatIcon,
  marketingIcon,
  settingIconactive,
  settingIconInactive, telegramIcon,
  userImg, userBck,
  arrow, stars,
  edit, deleteIcon,
  invoiceImg,
  hdfc, kotak, icici,
  googlepay, paytm, phonepe, webinarWhite, chatWhite,
  telegramChannelActive, telegramChannelInactive,
} from "../assets";

export const sideBar = [
  {
    id: 'dashboard',
    activeIcon: dashboardIconactive,
    inactiveIcon: dashboardIconInactive,
    title: "Dashboard",
    path: '/', 
  },
  {
    id: 'subscription',
    activeIcon: subscriptionIconactive,
    inactiveIcon: subscriptionIconInactive,
    title: "Subscription",
    path: '/subscription'
  },
  // {
  //   id: 'webinar',
  //   activeIcon: webinarWhite,
  //   inactiveIcon: webinarIcon,
  //   title: "Webinar",
  //   path: '/webinar'
  // },
  // {
  //   id: 'availability',
  //   icon: availableIcon,
  //   title: "Availability",
  //   path: '/availability'
  // },
  {
    id: 'wallet',
    activeIcon: walletIconactive,
    inactiveIcon: walletIconInactive,
    title: "Wallet",
    path: '/wallet'
  },
  {
    id: 'chats',
    activeIcon: chatWhite,
    inactiveIcon: chatIcon,
    title: "Chats",
    path: '/chats'
  },
  // {
  //   id: 'marketing',
  //   icon: marketingIcon,
  //   title: "Marketing",
  //   path: '/market'
  // },
  {
    id: 'telegram_channel',
    activeIcon: telegramChannelActive,
    inactiveIcon: telegramChannelInactive,
    title: "Telegram Channel",
    path: '/telegram_channel'
  },
  {
    id: 'setting',
    activeIcon: settingIconactive,
    inactiveIcon: settingIconInactive,
    title: "Setting",
    path: '/setting'
  },
];


export const userAnalysis = [
  {
    id: 1,
    telegramIcon: telegramIcon,
    joined: 'Today',
    telegram: 'Telegram',
    totalVisit: 'Total Visit',
    totalVisitIs: '100',
    user: 'Paid User',
    totalUser: '+40',
    noInterested: 'Not Interested',
    noInterestedIs: '60'
  },
]

export const expertise_data = [
  {
    id: "1",
    icon: userBck,
    userImg: userImg,
    name: "Arun Kumar",
    title: "Commodity",
    ratingIcon: stars,
    rating: "4.4",
    experience: "Experience",
    totalExp: "7+",
    followers: "Followers",
    totalFollowers: "3.1k",
    content:
      "SEBI: 78r94865r130124253",
    telegram: telegramIcon,
    greet: "Telegram channel Link: https://web.telegram.org/k/",
    arrowIcon: arrow,
    basicTitle: 'Basic',
    price: '₹2,999',
    access: '/1 Month Access',
    activeUser: 'Active User:',
    valueActiveUser: '60/100',
  },
]

export const subscriptionData = [
  {
    date: "26/01/2024",
    subType: 'Futures & Options',
    plan: "Basic",
    duration: "1 month",
    phNum: '9910382771',
    amount: "₹1,999 ",
    activeUser: '2000',
    activeEdit: edit,
    activeDel: deleteIcon
  },
  {
    date: "26/01/2024",
    subType: 'Commodity',
    plan: "Standard",
    duration: "3 month",
    phNum: '7129991181',
    amount: "₹5,999 ",
    activeUser: '5000',
    activeEdit: edit,
    activeDel: deleteIcon
  },
]

export const transcationData = [
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Service",
    planName: 'Futures & Option',
    name: "Rohit",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Course",
    planName: 'Futures & Option',
    name: "Varun",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Webinar",
    planName: 'Private Call',
    name: "Amit",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Private Call",
    planName: 'Futures & Option',
    name: "Shivam",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Service",
    planName: 'Private Call',
    name: "Vinit",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    subscription: "Service",
    planName: 'Futures & Option',
    name: "Priyank",
    amount: "₹1,999 ",
    invoice: invoiceImg,
  },
];

export const withdrawalData = [
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    withdrawal: "HDFC Bank",
    accNum: '00121456110089',
    amount: "₹1,999 ",
    invoice: invoiceImg,
    status: 'Pending'
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    withdrawal: "UPI ID",
    accNum: '00121456110089',
    amount: "₹1,999 ",
    invoice: invoiceImg,
    status: 'Reject'
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    withdrawal: "HDFC Bank",
    accNum: '00121456110089',
    amount: "₹1,999 ",
    invoice: invoiceImg,
    status: 'Reject'
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    withdrawal: "Kotak Bank",
    accNum: '00121456110089',
    amount: "₹1,999 ",
    invoice: invoiceImg,
    status: 'Pending'
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    withdrawal: "ICICI Bank",
    accNum: '00121456110089',
    amount: "₹1,999 ",
    invoice: invoiceImg,
    status: 'Pending'
  },
  {
    transcationId: "#12324654685",
    date: "26/01/2024",
    withdrawal: "UPI ID",
    accNum: '00121456110089',
    amount: "₹1,999 ",
    invoice: invoiceImg,
    status: 'Reject'
  },
];

export const withdrawalBank = [
  {
    id: 1,
    bankImg: hdfc,
    bankName: 'HDFC Bank',
    accNum: '431200109911',
  },
  {
    id: 2,
    bankImg: icici,
    bankName: 'ICICI Bank',
    accNum: '431200109911',
  },
  {
    id: 3,
    bankImg: kotak,
    bankName: 'Kotak Bank',
    accNum: '431200109911',
  },
]

export const upiBank = [
  {
    id: 4, 
    upiImg: paytm,
    upiId: 'ArunKumar@paytm.ybl',
  }, 
  {
    id: 5, 
    upiImg: googlepay,
    upiId: 'ArunKumar@google.ybl'
  },
  {
    id: 6,
    upiImg: phonepe,
    upiId: 'ArunKumar@phonepe.ybl',
  }
]