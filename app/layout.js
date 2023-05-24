import { Inter } from 'next/font/google';
import '@styles/global.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variables: 'main-font',
});

export const metadata = {
  title: 'Prompt AI',
  description:
    'On this site you can create hints on different topics for gpt chat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
