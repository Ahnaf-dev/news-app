import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { FaRegClock } from "react-icons/fa";

function RecentPost() {
  const data = useSelector((state) => state.news.value);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecentNews();
  }, []);

  const getRecentNews = () => {
    let newArr = [...data];
    let recentNews = newArr.sort(
      (a, b) => new Date(b.dateMDY) - new Date(a.dateMDY)
    );
    setNews(recentNews[0]);
    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.news}>
      <div className={styles.news__image}>
        <Image src={`/${news.img}`} layout="fill" objectFit="cover"></Image>
        <div className={styles.news__image__author}>
          <h3>{news.author}</h3>
          <p>{news.role}</p>
          <div className={styles.news__posted__date}>
            <FaRegClock></FaRegClock>
            <p>
              {new Date(news.dateMDY).toLocaleString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.news__content}>
        <h2>{news.heading}</h2>
        <p>
          {news.excerpt}{" "}
          <Link
            className={styles.bold}
            href="/article/[id]"
            as={`/article/${news.id}`}
          >
            Read More..
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RecentPost;
