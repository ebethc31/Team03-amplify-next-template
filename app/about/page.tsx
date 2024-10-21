import styles from './about.module.css';


export default function Page() {
  return (
    <div className={styles.aboutPage}>
    <div className={styles.aboutPageChild} />
    <div className={styles.aboutPageItem} />
    <div className={styles.aboutPageInner} />
    <b className={styles.aboutThisApp}>About this App</b>
    <div className={styles.versionReleasedContainer}>
    <p className={styles.version}>Version 0</p>
    <p className={styles.version}>Released 10/7/2024</p>
    <p className={styles.blankLine}>
    <b>&nbsp;</b>
    </p>
    <p className={styles.version}>
    <b>&nbsp;</b>
    </p>
    <p className={styles.version}>
    <b>&nbsp;</b>
    </p>
    </div>
    <div className={styles.versionReleasedContainer}>
    <p className={styles.version}>Version 0</p>
    <p className={styles.version}>Released 10/7/2024</p>
    <p className={styles.blankLine}>
    <b>&nbsp;</b>
    </p>
    <p className={styles.version}>
    <b>&nbsp;</b>
    </p>
    <p className={styles.version}>
    <b>&nbsp;</b>
    </p>
    </div>
    <div className={styles.developedByTeam}>Developed by Team 03</div>
    <div className={styles.appNameConnects}>[App name] connects drivers with their sponsors, allowing drivers to be properly rewarded for a job well done.</div>
    <img className={styles.fa6SolidgearIcon} alt="" src="fa6-solid:gear.svg" />
    <b className={styles.about}>ABOUT</b>
    </div>);
}
