import styles from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
};

// 他のファイルでも使えるようにexport
export default function ButtonLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
