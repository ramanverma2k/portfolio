import Head from "next/head";
import Navbar from "../components/nav";
import Hero from "../components/hero";
import Recent from "../components/recent";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Welcome</title>
            </Head>
            <Navbar />
            <Hero />
            <Recent />
            {/* <Footer /> */}
        </div>
    );
}
