import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to use a management system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
