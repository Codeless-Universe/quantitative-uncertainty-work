import LanguageSwitch from "@/pkgs/base/layout/base/LanguageSwitch";
import ThemeDarkSwitch from "@/pkgs/base/layout/theme/ThemeDarkSwitch";
import { useVoerkaI18n } from "@voerkai18n/react";

export const ProjectConfig = {
  firebaseConfig: {
    apiKey: "AIzaSyBSrMkgzxa6kS2oBtkTjGUh7v2wnNnPLvE",
    authDomain: "stripe-track.firebaseapp.com",
    projectId: "stripe-track",
    storageBucket: "stripe-track.appspot.com",
    messagingSenderId: "217828197798",
    appId: "1:217828197798:web:d5107df1788f33366ebb67",
    measurementId: "G-WHRYPMNLVL",
  },
};

export const useProjectConfig = () => {
  const { t } = useVoerkaI18n();
  return {
    ...ProjectConfig,
    nav: {
      menus: [
        {
          title: t("Home"),
          href: "/",
        },
      ],
      rightItems: [<ThemeDarkSwitch />, <LanguageSwitch />],
    },
  };
};
