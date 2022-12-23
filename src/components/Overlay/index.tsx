// libs
import classNames from "classnames";
// others
import styles from "./styles.module.scss";

interface IOverlayProps {
  active?: boolean;
  isModal?: boolean;
}

const Overlay = ({ active = false, isModal = false }: IOverlayProps) => (
  <div
    className={classNames(styles["overlay-wrapper"], {
      [styles["modal-wrapper"]]: isModal,
      [styles.active]: active
    })}
  />
);

export default Overlay;
