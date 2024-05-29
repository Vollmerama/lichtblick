import React from "react";

const Layout = ({ children }: { children: React.ReactDOM }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
