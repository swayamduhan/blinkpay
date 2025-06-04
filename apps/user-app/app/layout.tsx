import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const baggos = localFont({
  src: [
    {
      path: './fonts/Bagoss/BagossStandardTRIAL-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Bagoss/BagossStandardTRIAL-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Bagoss/BagossStandardTRIAL-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Bagoss/BagossStandardTRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Bagoss/BagossStandardTRIAL-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Bagoss/BagossStandardTRIAL-Thin.woff2',
      weight: '100',
      style: 'normal',
    },    {
      path: './fonts/Bagoss/BagossStandardTRIAL-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Bagoss/BagossStandardTRIAL-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Bagoss/BagossStandardTRIAL-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    }
  ],
  variable: "--font-baggos"
})


export const metadata: Metadata = {
  title: "BlinkPay Dash | Lightning fast payments",
  description: "Dashboard for BlinkPay application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baggos.variable} ${geistSans.variable} ${geistMono.variable}  relative`}>
        <Navbar />
        <div className="pl-[250px]">
          <Wrapper>
            {children}
          </Wrapper>
        </div>
      </body>
    </html>
  );
}

