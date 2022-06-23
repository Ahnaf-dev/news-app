import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={`container ${styles.nav__container}`}>
        <Link href="/">
          <h1 className={styles.h1}>NewsApp</h1>
        </Link>
        <Link href="/news">
          <a className={styles.nav__link} href="#">
            News
          </a>
        </Link>
      </div>
    </div>
  );
}
