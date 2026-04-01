import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

const veryVogue = localFont({
  src: [
    {
      path: '../../public/very-vogue-font/nicky-laatz-very-vogue-display.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/very-vogue-font/nicky-laatz-very-vogue-display-italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-very-vogue',
});

export const metadata: Metadata = {
  title: 'Eventoclic',
  description: 'Página de EventoClic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`bg-[#f1f7ed] text-[#1a3831] ${montserrat.variable} ${veryVogue.variable} font-sans antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}