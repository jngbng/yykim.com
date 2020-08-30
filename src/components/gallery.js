import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { Lightbox } from "react-modal-image";
import styles from "./gallery.module.css";


const useGallery = () => {
  // TODO: Make "content/gallery" dynamic somehow..
  const data = useStaticQuery(graphql`
    query {
      allFile(
          filter: { sourceInstanceName: { eq: "content/gallery" } },
          sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 2500, maxHeight: 2500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
    publicURL: node.publicURL,
  }));
};

export default function Gallery() {
  const images = useGallery();
  const [showImageIndex, setShowImageIndex] = React.useState();

  return (
    <div>
      <div className={styles.grid}>
        {images.map((image, index) => (
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
              fluid={image.fluid}
              className={styles.imgStyles} />
          </div>
        ))}
      </div>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
}
