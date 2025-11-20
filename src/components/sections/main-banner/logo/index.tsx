import BorderStarsDecoration from "@/components/common/border-stars-decoration";

import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div></div>
      <BorderStarsDecoration className={styles.footer}>
        <div className={styles.year}>2025</div>
      </BorderStarsDecoration>
    </div>
  );
}
