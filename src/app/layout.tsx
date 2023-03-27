import { MainNavigation } from '@/components/mainNavigation/mainNavigation';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
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
