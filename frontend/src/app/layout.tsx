import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
// import { UserProvider } from "./context/user-context";
import React from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import UserProvider from "./context/user-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type TProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <UserProvider>
          {" "}
          <Header />
          {children}
          <ToastContainer />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
