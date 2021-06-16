import Head from 'next/head'
import NavBar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from '../components/slider'
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <NextSeo
        title="Krell Construction Services, NW"
        description="Family owned business, taking care of a range of construction services. From residental to commercial, their percision teams can handle the job correctly."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.kcsnw.com",
          title: "Krell Construction Services, NW",
          description:
            "Family owned business, taking care of a range of construction services. From residental to commercial, their percision teams can handle the job correctly.",
          images: [
            {
              url: "https://www.kcsnw.com/kcs-back.jpg",
              width: 600,
              height: 360,
              alt: "KCS Logo",
            },
          ],
          site_name: "Krell Construction Services, NW",
        }}
      />
      <Head>
        <title>Krell Construction Services</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div
        style={{ maxWidth: "1000px", minWidth: "360px" }}
        className="md:container mx-auto"
      >
        <NavBar></NavBar>
        <Header></Header>
        <div className="border-t-2 mt-5"></div>
        <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 pl-10">
          <div className="col-span-3 md:col-span-3 lg:col-span-2 pt-5">
            <div className="relative h-8">
              <div className="w-80 h-3 bg-yellow-400 absolute mt-3 transform rotate-1"></div>
              <h1 className="font-mono text-3xl absolute whitespace-nowrap">
                KRELL CONSTRUCTION SERVICES
              </h1>
            </div>

            <p className="mt-3 text-sm pr-16 ml-1">
              Krell Construction Services was started to fill a specific need in
              the industry. Thousands of smaller operations need to be completed
              every day and each is specific to you and your business. Very few
              companies want to tackle these short-duration projects. <br />
              <br /> KCS was developed with that in mind. We focus on being
              available and prepared for shorter-duration jobs, giving you the
              flexibility and control you need in your scheduling.
            </p>
          </div>
          <div className="flex items-start pt-5 flex-col">
            <div className="relative h-8">
              <div className="w-28 h-3 bg-yellow-400 absolute mt-3 -ml-1 transform rotate-1"></div>
              <h1 className="font-mono text-2xl absolute">Commercial</h1>
            </div>
            <ol className="font-mono text-lg mt-3 list-inside">
              <li className="pt-1 pb-1"> - Punch List Items</li>
              <li className="pt-1 pb-1"> - Electrical Trenching </li>
              <li className="pt-1 pb-1"> - Plumbing Trenching </li>
              <li className="pt-1 pb-1"> - Warranty Work </li>
              <li className="pt-1 pb-1"> - Grading Sidewalks, Driveways</li>
            </ol>
          </div>
          <div className="flex  pt-5 flex-col ml-10">
            <div className="relative h-8">
              <div className="w-28 h-3 bg-yellow-400 absolute mt-3 -ml-1 transform rotate-1"></div>
              <h1 className="font-mono text-2xl absolute">Residental</h1>
            </div>
            <ul className="font-mono text-lg mt-3 list-inside">
              <li className="pt-1 pb-1"> - Excavation</li>
              <li className="pt-1 pb-1"> - Trenching </li>
              <li className="pt-1 pb-1"> - Road Building </li>
              <li className="pt-1 pb-1"> - Clearing </li>
            </ul>
          </div>
        </div>
        <Slider></Slider>
        <Footer></Footer>
      </div>
    </div>
  );
}
