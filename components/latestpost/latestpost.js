import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { FaRegClock } from "react-icons/fa";

function LatestPost({ idx, content }) {
  function getDaysAgo() {
    const today = new Date();
    const posted = new Date(content.dateMDY);
    const diff = today - posted;
    const msInDay = 86400000;

    return Math.floor(diff / msInDay) + " Days Ago";
  }

  if (idx === 0) {
    return (
      <div className={styles.featured__post}>
        <div className={styles.featured__image}>
          <Image
            src={`/${content.img}`}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className={styles.featured__post__content}>
          <div className={styles.info}>
            <div className={styles.author}>
              <p>By {content.author}</p>
              <p className={styles.role}>{content.role}</p>
            </div>
            <div className={styles.date}>
              <FaRegClock></FaRegClock>
              {getDaysAgo()}
            </div>
          </div>
          <h2 className={styles.heading}> {content.heading} </h2>
          <p className={styles.text}>
            {content.excerpt}{" "}
            <Link
              className={styles.bold}
              href="/article/[id]"
              as={`/article/${content.id}`}
            >
              Read More..
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.other}>
        <Image src={`/${content.img}`} layout="fill" objectFit="cover"></Image>
      </div>
      <div className={styles.info}>
        <div className={styles.author}>
          <p>By {content.author}</p>
          <p className={styles.role}>{content.role}</p>
        </div>
        <div className={styles.date}>
          <FaRegClock></FaRegClock>
          {new Date(content.dateMDY).toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
      <p className={styles.bold}>{content.heading}</p>
    </div>
  );
}

export default LatestPost;
