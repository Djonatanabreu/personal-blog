import { MainNavigation } from '@/components/mainNavigation/mainNavigation';

export const metadata = {
  title: 'Patty Passeadora',
  description: 'Serviços Para Animais em Geral',
  viewport: 'width=device-width',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
