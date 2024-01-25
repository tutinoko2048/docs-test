import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./components/Provider";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Suspense } from "react";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docs test"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Suspense fallback={<></>}>
        <GoogleAnalytics />
      </Suspense>
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
