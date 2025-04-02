import React from "react";
import styles from "../assets/styles/components/Button.module.css";
const MyButton = (props) => {
  return <button className={styles.MyButton}>{props.text}</button>;
};

export default MyButton;
