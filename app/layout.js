import Context from "./components/Context";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Context>
                <body className={inter.className}>
                    <main>{children}</main>
                </body>
            </Context>
        </html>
    );
}
