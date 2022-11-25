import Hello from "./Hello";

const Layout = ({ children }) => {
  return <div className="container">
  <Hello/>
  {children}
  </div>;
};

export default Layout;
