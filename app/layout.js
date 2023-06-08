import { Inter, Roboto_Flex } from 'next/font/google';
import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  variable: '--main-font',
  display: 'swap',
});

const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--second-font',
  display: 'swap',
});

export const metadata = {
  title: 'Prompt AI',
  description:
    'On this site you can create prompts on different topics for gpt chat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_flex.variable}`}>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
