/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { ConfigProvider, theme } from 'antd';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';

import { defaultLocale, languages } from '@/locale';

import { AntdProvider } from './AntdProvider';

export type ProviderProps = PropsWithChildren<{
  locale: string;
}>;

export function AntdConfigProvider({ children, locale }: ProviderProps) {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    if(theme!){
      setTheme('light')
    }
  }, [])

  return (
    <ConfigProvider
      locale={(languages as any)[(locale as any) ?? defaultLocale].antd}
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
