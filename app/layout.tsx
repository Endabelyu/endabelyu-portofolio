import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/molecules/Navbar';
import Footer from '@/components/molecules/Footer';

export const metadata: Metadata = {
  title: 'Naswa Wilantama Portofolio',
  description: 'Naswa Wilantama Personal Portofolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // bg-slate-700
  return (
    <html lang="en">
      <body className="bg-slate-50 p-2  sm:p-10 ">
        <div className="mx-auto lg:w-3/5 px-2  sm:px-8   gap-16  sm:pt-6 rounded-xl sm:gap-20  shadow-card relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
