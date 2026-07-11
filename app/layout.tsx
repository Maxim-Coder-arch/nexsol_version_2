import type { Metadata } from "next";
import ScrollController from "./share/scroll-controller";
import LoaderComponent from "./share/loader";
import { metaDataConfig } from "./app-config/metadata";
import YandexMetrika from "./yandex-metrica";
import { Tracker } from "./share/tracker";
import "./global_styles/reset.scss";

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
        <Tracker />
      </body>
    </html>
  );
}
