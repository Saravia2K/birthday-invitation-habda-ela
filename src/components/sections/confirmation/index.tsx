import MossGreenBanner from "@/components/common/moss-green-banner";

import styles from "./confirmation.module.scss";

export default function Confirmation({ name, companions }: ConfirmationProps) {
  return (
    <section className={styles.confirmation}>
      <MossGreenBanner secondaryText={{ lines: 3 }}>
        <h2 className={styles.name}>{name},</h2>
        <h4 className={styles["special-spot-msg"]}>
          tenemos un espacio especial para ti{" "}
          {companions > 0 && `y ${companions} persona(s) más`}
        </h4>
      </MossGreenBanner>
    </section>
  );
}

type ConfirmationProps = {
  name: string;
  companions: number;
};
