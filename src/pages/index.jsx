import { Layout } from "@/components/Layout/Layout";
import { MainCont } from "@/components/MainCont";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Snowchild Studio</title>
        <meta name="description" content="Snowchild Studios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainCont />
      </Layout>
    </>
  );
}
