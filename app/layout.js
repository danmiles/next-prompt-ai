import { Inter, Roboto_Mono } from 'next/font/google';
import '@styles/global.css';
import Nav from '@components/Nav';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  variable: '--main-font',
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--secondary-font',
  display: 'swap',
});

export const metadata = {
  title: 'Prompt AI',
  description:
    'On this site you can create hints on different topics for gpt chat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
