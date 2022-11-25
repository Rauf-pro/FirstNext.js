import Hello from "./Hello";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Image src="/photo.jpg" width={300} height={200} alt="photo"/>
      <Hello />
      {children}
    </div>
  );
};

export default Layout;
