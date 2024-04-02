import type { Metadata } from "next";
import { NextUIApp } from "@/pkgs/base/layout/NextUIApp";
import { TRPCReactProvider } from "@/pkgs/trpc/react";

export const metadata: Metadata = {
  title: "Demo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TRPCReactProvider>
        <NextUIApp>{children}</NextUIApp>
      </TRPCReactProvider>
    </html>
  );
}
