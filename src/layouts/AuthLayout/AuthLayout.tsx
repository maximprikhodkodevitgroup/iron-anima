import React from 'react';
import { Header } from '../../components/Header';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen items-center gap-24 px-4 sm:px-20 py-9 relative bg-[#000000cc] [background:linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_100%),url(https://c.animaapp.com/m8q53sh3szhUmf/img/log-in.png)_50%_50%_/_cover]">
      <Header
        className="!flex-[0_0_auto] !bg-transparent w-full"
        property1="default"
        visible={false}
        visible1={false}
        visible2={false}
      />
      <div className="w-full max-w-[520px] flex-grow flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
