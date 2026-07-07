import type { Metadata } from "next";
import ScrollController from "./share/scroll-controller";
import { metadataConfig } from "./app-config/metadata";
import "./global_styles/reset.scss";

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <ScrollController />
      </body>
    </html>
  );
}
