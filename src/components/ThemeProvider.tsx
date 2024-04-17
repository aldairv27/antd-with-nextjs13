/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import {
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import { ConfigProvider, } from 'antd';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import { AntdProvider } from './AntdProvider';
import { accentColor } from '@/styles/CommonStyle';
import { RootState } from '@/reducer/store';
import esES from 'antd/locale/es_ES';
import { useAppSelector } from '@/reducer/hooks';

export type ProviderProps = PropsWithChildren<{
  locale: string;
}>;

export function AntdConfigProvider({ children, locale }: ProviderProps) {
  const { setTheme, theme } = useTheme();
  const { backgroundColorMenu, buttonBackgroundColor, menuTextColor, buttonTextColor, menuTextColorActive } = useAppSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (theme!) {
      setTheme('light')
    }
  }, [])

  return (
    <ConfigProvider
      locale={esES}
      theme={{
        // token: {
        //   colorPrimary: primaryColorBlue,
        // },
        components: {
          Button: {
            colorPrimary: buttonBackgroundColor,
            colorText: buttonTextColor,
            colorPrimaryHover: buttonBackgroundColor,
          },
          Menu: {
            itemBg: backgroundColorMenu,
            // darkItemBg: backgroundColorMenu,
            subMenuItemBg: backgroundColorMenu,
            // darkSubMenuItemBg: backgroundColorMenu,
            // cambiar color de texto de ordenes y menu
            groupTitleColor: menuTextColor,
            //cambiar color de texto e icono del menu
            itemColor: menuTextColor,
            itemSelectedColor: menuTextColorActive,
            itemHoverBg: 'transparent',
            // popupBg: 'red',
          },
          Switch: {
            colorPrimary: accentColor,
            colorPrimaryHover: accentColor
          }
        }
      }}

    >
      <AntdProvider>{children}</AntdProvider>
    </ConfigProvider>
  );
}

export default function ThemeProvider(props: ProviderProps) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // use your loading page
    return <div className="hidden">{props.children}</div>;
  }

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AntdConfigProvider {...props} />
    </NextThemeProvider>
  );
}
