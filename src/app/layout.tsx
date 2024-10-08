import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { FC, ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cedi Search",
  description: "Ghana's leading E Commerce search engine",
};

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <NextTopLoader />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
