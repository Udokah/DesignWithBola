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

export default function Designs({renderAll}) {
  const images = [
    {
      src: 'https://via.placeholder.com/500#1',
      alt: ''
    },
    {
      src: 'https://via.placeholder.com/500#2',
      alt: ''
    },
    {
      src: 'https://via.placeholder.com/500#3',
      alt: ''
    },
    {
      src: 'https://via.placeholder.com/500#4',
      alt: ''
    },
    {
      src: 'https://via.placeholder.com/500#5',
      alt: ''
    },
  ];

  const getImagesToRender = () => {
    const imagesToRender = [];

    for (let i = 0; i < images.length; i++) {
      if (!renderAll && i === 2) {
        break;
      }

      imagesToRender.push(
        <li key={`${images[i].src}-${i}`} className={stylex(styles.galleryItem)}> {/* Append `-i` just in case `src` is the same */}
          <img src={images[i].src} alt={images[i].alt} className={stylex(styles.galleryImg)} />
        </li>
      );
    }

    return imagesToRender;
  };

  return (
    <section>
      <h1 className="main-heading">UI Designs</h1>
      <ul className={stylex(styles.gallery)}>
        {getImagesToRender()}
      </ul>
    </section>
  );
}
