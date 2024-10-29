"use client";
import { useState, useEffect } from 'react';
import styles from './about.module.css';


export default function Page() {
  const [userInfo, setUsers] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will only run on the client

    const fetchData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log('response from API', data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!isClient) return null; // Ensures SSR doesn't attempt to render before the client is ready


  return (
    <div className={styles.aboutPage}>
    <div className={styles.aboutPageChild} />
    <div className={styles.aboutPageItem} />
    <div className={styles.aboutPageInner} />
    <b className={styles.aboutThisApp}>About this App</b>
    <div className={styles.versionReleasedContainer}>
    <p className={styles.version}>Version 0</p>
    <p className={styles.version}>Released 10/7/2024</p>
    <p className={styles.version}>Number Of Users: {userInfo.length}</p>
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
    <div className={styles.appNameConnects}> connects drivers with their sponsors, allowing drivers to be properly rewarded for a job well done.</div>
    <img className={styles.fa6SolidgearIcon} alt="" src="fa6-solid:gear.svg" />
    <b className={styles.about}>ABOUT</b>
    </div>);
}
