import Link from "next/link";
import Component from "../components/Component";
import Head from "next/head";

const index = () => {
  return (
    <div>
    <Head>
      <title>Home learn</title>
      <meta name="keywords" content="Next.js, javascript, react ...."/>
    </Head>
      <Link href="/about">
        <p>Go to about page</p>
      </Link>
      <Component />
    </div>
  );
};

export default index;
