import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import RecentPost from "../components/recentpost";
import styles from "../styles/Home.module.css";
import LatestPosts from "../components/latestposts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta
          name="keywords"
          content="news app, react news app project, react project, next JS project"
        />
      </Head>
      <div className="container">
        <RecentPost />
        <LatestPosts />
      </div>
    </div>
  );
}
