import type { Metadata } from "next";
import LoaderComponent from "./share/loader";
import ScrollController from "./share/scroll-controller";
import { metadataConfig } from "./app-config/metadata";
import "./global_styles/reset.scss";
import { metaData } from "@/metadata/metadata";
import YandexMetrika from "./yandex-metrika/metrika";

export const metadata: Metadata = metaData;

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

