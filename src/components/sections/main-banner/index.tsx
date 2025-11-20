import Image from "next/image";

import Logo from "./logo";
import FloralArrangements from "@/components/common/floral-arrangements";

import styles from "./main-banner.module.scss";
import banner from "@/assets/images/photos/banner-img.jpeg";

export default function MainBanner() {
  return (
    <div className={styles["main-banner"]}>
      <div className={styles.banner}>
        <Image src={banner} alt="Main banner" priority />
      </div>
      <Logo />
      <FloralArrangements
        flowers={[
          { position: "l", mobile: { y: -12 }, tablet: { y: -25 } },
          { position: "r", mobile: { y: -13 }, tablet: { y: -25 } },
        ]}
      >
        <h1 className={styles.names}>
          <span>Habda Ela</span>
          <span className={styles.ampersand}>Rodriguez de Romero</span>
        </h1>
      </FloralArrangements>
    </div>
  );
}
