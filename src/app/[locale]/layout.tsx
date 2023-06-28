import ThemeProvider from '@/components/ThemeProvider';

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
          <ThemeProvider locale={locale}>
            <main>{children}</main>
          </ThemeProvider>
      </body>
    </html>
  );
}
