import SaveThePlanetContainer from "../components/SaveThePlanetContainer";
import FormContainer from "../components/FormContainer";
import styles from "./WebFinal.module.css";

const WebFinal = () => {
  return (
    <div className={styles.webFinal}>
      <div className={styles.frame}>
        <b className={styles.aboutUs}>About us</b>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <SaveThePlanetContainer />
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et tempor felis. Nunc vel ipsum a diam lacinia convallis. Sed vel
            lacus eu velit tincidunt blandit. Nunc velit nisl, lobortis aliquet
            egestas at, porttitor vitae neque. Quisque dictum libero at rhoncus
            lacinia. In ac neque nibh. Nullam nec ex id metus euismod
            scelerisque. Aliquam lobortis nibh efficitur volutpat varius.
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
      <FormContainer />
    </div>
  );
};

export default WebFinal;
