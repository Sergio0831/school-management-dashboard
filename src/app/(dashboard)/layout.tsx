import Menu from '@/components/Menu';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dasboard',
  description: 'School Management System dashboard',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/education.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchoolHub</span>
        </Link>
        <Menu />
      </aside>
      <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">main</main>
    </div>
  );
}
