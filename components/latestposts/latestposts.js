import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import LatestPost from "../latestpost";

function LatestPosts() {
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
    setNews(recentNews.slice(1));
    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2 className={styles.heading}>Full Story</h2>
      <div className={styles.grid}>
        {news.map((article, index) => {
          return <LatestPost idx={index} key={article.id} content={article} />;
        })}
      </div>
    </>
  );
}

export default LatestPosts;
