const baseConfig = {
  weddingDay: "Суббота",
  weddingTime: "17.00",
  weddingDate: "Ноябрь 9, 2024",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2020-02-22T19:00:00+08:00",
    timeEndISO: "2020-02-22T21:00:00+08:00",
  },
  coupleInfo: {
    brideName: "Dilnoz",
    groomName: "Bekzod",
    coupleNameFormat: "GROOM_FIRST",
  },
  venue: {
    name: "Bakhtiyor Restaurant",
    addressLine1: "",
    addressLine2: "",
    city: "Qibray",
    country: "Uzbekistan",
    mapUrl: "https://maps.app.goo.gl/zfD8wm8H7upEW1pK8",
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4",
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.wzulfikar.com",
    publishedTime: "2020-01-25",
  },
};

const lang = {
  id: {
    weddingDay: "Sabtu",
    weddingDate: "22 Februari 2020",
    venue: {
      ...baseConfig.venue,
      name: "Hotel Oval",
      addressLine2: "Surabaya, Jawa Timur, 60241,",
    },
  },
};

export default {
  ...baseConfig,
  lang,
};
