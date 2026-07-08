import type { Metadata } from "next";
import ScrollController from "./share/scroll-controller";
import "./global_styles/reset.scss";
import LoaderComponent from "./share/loader";
import { metaDataConfig } from "./app-config/metadata";
import YandexMetrika from "./yandex-metrica";

export const metadata: Metadata = metaDataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <YandexMetrika />
        <LoaderComponent />
        <ScrollController />
      </body>
    </html>
  );
}
