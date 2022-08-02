import React from "react";
import styles from "./PreLoader.module.css";


export const PreLoader = () => {
  return (
    <div className={styles.center}>
    
      <span className="isLoading">
           <h1>Please wait ...............</h1>
      </span>
    </div>
  );
};
