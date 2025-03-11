import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'NeuJohPick',
    template: '%s',
  },
  description: '미정',
  keywords: '미정',
  metadataBase: new URL('https://neujohpick.vercel.app'),
  /*
  icons: {
    icon: '',
    apple: '',
  },
  */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="max-w-full">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
