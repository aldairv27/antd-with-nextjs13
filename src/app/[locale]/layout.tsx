/* eslint-disable @next/next/no-page-custom-font */
import ThemeProvider from '@/components/ThemeProvider';
import { Providers } from '@/reducer/providers';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NextIntlClientProvider } from 'next-intl';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: Record<string, any>;
}) {
  let messages;
  try {
    messages = (await import(`@/locale/messages/${locale}.json`)).default;
  } catch (error) {}

  return (
    <html lang={locale}>
      <head />
      <body>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Providers>  
          <ThemeProvider locale={locale}>
            <AntdRegistry>
              <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
              </NextIntlClientProvider>
            </AntdRegistry>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
