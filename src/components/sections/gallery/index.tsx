"use client";

import Image from "next/image";

import styles from "./gallery.module.scss";
import img1 from "@/assets/images/photos/WhatsApp Image 2025-11-14 at 9.51.54 AM (2).jpeg";
import img2 from "@/assets/images/photos/WhatsApp Image 2025-11-14 at 9.51.54 AM.jpeg";
import img3 from "@/assets/images/photos/WhatsApp Image 2025-11-14 at 9.51.55 AM (1).jpeg";
import img4 from "@/assets/images/photos/WhatsApp Image 2025-11-14 at 9.51.55 AM (3).jpeg";
import img5 from "@/assets/images/photos/WhatsApp Image 2025-11-14 at 9.51.55 AM (4).jpeg";
import img6 from "@/assets/images/photos/WhatsApp Image 2025-11-14 at 9.51.55 AM (5).jpeg";
import img7 from "@/assets/images/photos/WhatsApp Image 2025-11-14 at 9.51.55 AM.jpeg";

const IMAGES_LINE1 = [img1, img2, img3];
const IMAGES_LINE2 = [img4, img5, img6, img7];
export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.preview}>
        <div className={`${styles.line} ${styles.line1}`}>
          {IMAGES_LINE1.map((img, i) => (
            <Image key={i} src={img} alt="" priority />
          ))}
        </div>
        <div className={`${styles.line} ${styles.line2}`}>
          {IMAGES_LINE2.map((img, i) => (
            <Image key={i} src={img} alt="" priority />
          ))}
        </div>
      </div>
    </section>
  );
}
