import type {NextPage} from "next";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  About,
  Contact,
  CTA,
  Footer,
  Hero,
  Services,
  Stats,
} from "../components";
import {useEffect} from "react";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Vertix Soft</title>
        <meta name="description" content="Android app development studio." />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Stats />
      <Services />
      {/* <CTA /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
