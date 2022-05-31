import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  gallery: {
    "--img-width": "500px",
    "--gap": "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(var(--img-width), 1fr))",
    gap: "var(--gap)",
    maxWidth: "calc((var(--img-width) * 2) + var(--gap))",
    margin: "auto",
    "@media (max-width: 575.98px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  galleryItem: {
    width: "var(--img-width)",
    maxWidth: "100%",
    aspectRatio: "1 / 1",
    margin: "auto",
  },
  galleryImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    backgroundColor: "var(--white)",
  },
});

export default function Designs() {
  return (
    <section>
      <h1 className="main-heading">UI Designs</h1>
      <ul className={stylex(styles.gallery)}>
        <li className={stylex(styles.galleryItem)}>
          <img src="https://via.placeholder.com/500" alt="" className={stylex(styles.galleryImg)} />
        </li>
        <li className={stylex(styles.galleryItem)}>
          <img src="https://via.placeholder.com/500" alt="" className={stylex(styles.galleryImg)} />
        </li>
        <li className={stylex(styles.galleryItem)}>
          <img src="https://via.placeholder.com/500" alt="" className={stylex(styles.galleryImg)} />
        </li>
        <li className={stylex(styles.galleryItem)}>
          <img src="https://via.placeholder.com/500" alt="" className={stylex(styles.galleryImg)} />
        </li>
        <li className={stylex(styles.galleryItem)}>
          <img src="https://via.placeholder.com/500" alt="" className={stylex(styles.galleryImg)} />
        </li>
      </ul>
    </section>
  );
}
