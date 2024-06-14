import type { Metadata } from 'next'
import "./globals.css";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header className = "flex flex-col item-center">
          <h1>App de Receitas</h1>
            <Image 
      src="/images/pica.png"
      alt="Picture of the author"
      width={500}
      height={500}
      />
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
