import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import { Lightbox } from "react-modal-image";
import styles from "./gallery.module.css";

export default function Gallery({files}) {
  const [showImageIndex, setShowImageIndex] = React.useState();

  return (
    <div>
      <div className={styles.grid}>
        {files.map((image, index) => (
          <div
            className={styles.tile}
            key={image.id}
            role="presentation"
            onClick={() => {
              setShowImageIndex(index);
            }}
          >
            <Img
              alt={image.name}
              fluid={image.childImageSharp.fluid}
              className={styles.imgStyles} />
          </div>
        ))}
      </div>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={files[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
}
