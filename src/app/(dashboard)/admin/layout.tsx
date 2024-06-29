"use client";

import UserLayout from "@/components/layouts/UserLayout";
import {
  SettingsConsumer,
  SettingsProvider,
} from "@/core/context/settingsContext";
import ThemeComponent from "@/core/theme/ThemeComponent";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => {
          return (
            <ThemeComponent settings={settings}>
              <UserLayout>{children}</UserLayout>
            </ThemeComponent>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
}
