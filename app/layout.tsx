import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docs test",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
     <head />
      <body className={inter.className}>
        <Provider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
