import { ReactNode } from "react";
import ThemeToggler from "@/components/theme-toggler";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="absolute bottom-5 right-0 text-white">
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
