'use client';
import RootComponentLayout from "@/component/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootComponentLayout>
      {children}
    </RootComponentLayout>
  );
}
