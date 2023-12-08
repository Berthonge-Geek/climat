import Group from "./Group";
import styles from "./SaveThePlanetContainer.module.css";

const SaveThePlanetContainer = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <Group
          imageDimensions="/group3.svg"
          groupIconWidth="100%"
          groupIconHeight="100%"
          groupIconPosition="absolute"
          groupIconTop="0%"
          groupIconRight="-0.66%"
          groupIconBottom="0%"
          groupIconLeft="0.66%"
          groupIconMaxWidth="100%"
          groupIconOverflow="hidden"
          groupIconMaxHeight="100%"
        />
        <div className={styles.frame2}>
          <b className={styles.letsSaveTheContainer}>
            <p className={styles.letsSave}>Let’s save</p>
            <p className={styles.letsSave}>THE PLANET</p>
          </b>
        </div>
        <div className={styles.frame3}>
          <b className={styles.home}>Home</b>
        </div>
        <div className={styles.frame4}>
          <div className={styles.home}>About us</div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.home}>Contact</div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.home}>Article</div>
        </div>
        <div className={styles.frame7}>
          <div className={styles.viewMoreWrapper}>
            <div className={styles.viewMore}>View more</div>
          </div>
        </div>
        <div className={styles.frame8}>
          <div className={styles.loremIpsumDolor}>
          Welcome to our online hub dedicated to raising awareness and fostering positive change for our beloved planet. As stewards of Earth, we believe in the power of collective action to make a lasting impact on environmental conservation and sustainability.
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame1.svg" />
        <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
        <div className={styles.frame9}>
          <img className={styles.icon} alt="" src="/7170074-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default SaveThePlanetContainer;
