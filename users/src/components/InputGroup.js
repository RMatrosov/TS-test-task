import React from 'react';
import styles from "../blocks/AddUser.module.css";

const InputGroup = ({children, value}) => {

  return (
      <div className={styles.wrapper}>
        <div className={styles.group}>
          <h5 className={styles.heading}>{value}</h5>
          {children}
        </div>
      </div>
  );
};

export default InputGroup;
