import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../../components/latestpost/styles.module.scss";
import { FaRegClock } from "react-icons/fa";

function Article() {
  const router = useRouter();
  const { id } = router.query;
  const data = useSelector((state) => state.news.value);
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  function getDaysAgo() {
    const today = new Date();
    const posted = new Date(article.dateMDY);
    const diff = today - posted;
    const msInDay = 86400000;

    return Math.floor(diff / msInDay) + " Days Ago";
  }

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = () => {
    let newArr = [...data];
    setArticle(...newArr.filter((item) => item.id == id));
    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container">
      <Link className="bold" href="/">
        Go Back
      </Link>
      <div className={styles.featured__post}>
        <div className={`${styles.featured__image} priority`}>
          <Image
            src={`/${article.img}`}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className={styles.featured__post__content}>
          <div className={styles.info}>
            <div className={styles.author}>
              <p>By {article.author}</p>
              <p className={styles.role}>{article.role}</p>
            </div>
            <div className={styles.date}>
              <FaRegClock></FaRegClock>
              {getDaysAgo()}
            </div>
          </div>
          <h2 className={styles.heading}> {article.heading} </h2>
          <p className={styles.text}>{article.excerpt} </p>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde,
          amet omnis deserunt aperiam quia aut voluptatem impedit corrupti odit
          soluta ipsam praesentium quasi officia iste consequatur maxime. Totam
          ab eos accusantium facilis, fugiat esse aliquid cumque labore ullam
          repellendus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde,
          amet omnis deserunt aperiam quia aut voluptatem impedit corrupti odit
          soluta ipsam praesentium quasi officia iste consequatur maxime. Totam
          ab eos accusantium facilis, fugiat esse aliquid cumque labore ullam
          repellendus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde,
          amet omnis deserunt aperiam quia aut voluptatem impedit corrupti odit
          soluta ipsam praesentium quasi officia iste consequatur maxime. Totam
          ab eos accusantium facilis, fugiat esse aliquid cumque labore ullam
          repellendus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde,
          amet omnis deserunt aperiam quia aut voluptatem impedit corrupti odit
          soluta ipsam praesentium quasi officia iste consequatur maxime. Totam
          ab eos accusantium facilis, fugiat esse aliquid cumque labore ullam
          repellendus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde,
          amet omnis deserunt aperiam quia aut voluptatem impedit corrupti odit
          soluta ipsam praesentium quasi officia iste consequatur maxime. Totam
          ab eos accusantium facilis, fugiat esse aliquid cumque labore ullam
          repellendus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde,
          amet omnis deserunt aperiam quia aut voluptatem impedit corrupti odit
          soluta ipsam praesentium quasi officia iste consequatur maxime. Totam
          ab eos accusantium facilis, fugiat esse aliquid cumque labore ullam
          repellendus?
        </p>
      </div>
    </div>
  );
}

export default Article;
