import Link from "next/link";
import Component from "../components/Component";

const index = () => {
  return (
    <div>
      <Link href="/about">
        <p>Go to about page</p>
      </Link>
      <Component />
    </div>
  );
};

export default index;
