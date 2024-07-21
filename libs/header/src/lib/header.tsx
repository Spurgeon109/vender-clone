import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles['header']}>
      <div className={styles["left-panel"]}>
        <div className={styles["left-panel__logo"]}>V</div>
        <div className={styles["left-panel__nav"]}>
          <button className={styles["left-panel__nav--item"]}>MarketPlace</button>
          <button className={styles["left-panel__nav--item"]}>Procurement</button>
          <button className={styles["left-panel__nav--item"]}>Intelligence</button>
        </div>
      </div>
      <button className={styles['right-panel']}>
        Login
      </button>
    </div>
  );
}

export default Header;
