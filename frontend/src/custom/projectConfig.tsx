import LanguageSwitch from "@/pkgs/base/layout/base/LanguageSwitch";
import ThemeDarkSwitch from "@/pkgs/base/layout/theme/ThemeDarkSwitch";
import { useVoerkaI18n } from "@voerkai18n/react";

export const ProjectConfig = {};

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
