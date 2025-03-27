import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen items-center gap-24 py-9 relative bg-[#000000cc] [background:linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_100%),url(https://c.animaapp.com/m8q53sh3szhUmf/img/log-in.png)_50%_50%_/_cover]">
      <Header
        className="!flex-[0_0_auto] !bg-transparent w-full px-4 sm:px-20"
        property1="default"
        showAuthButtons={true}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
