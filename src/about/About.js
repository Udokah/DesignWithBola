import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  imgWrap: {
    width: 200,
    maxWidth: "100%",
    aspectRatio: "1 / 1",
    margin: "auto",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
    backgroundColor: "var(--white)",
  },
  bio: {
    maxWidth: 700,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    lineHeight: "1.5rem",
  },
});

export default function Contact() {
  return (
    <section>
      <h1 className="main-heading">About Me</h1>
      <div className={stylex(styles.imgWrap)}>
        <img src="https://via.placeholder.com/200" alt="" className={stylex(styles.img)} />
      </div>
      <p className={stylex(styles.bio)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, in sunt. Eum, odit ea. Ipsam molestias quae veniam fugiat ad ipsa asperiores eos, quis expedita odio! Dignissimos non quisquam placeat. Laboriosam nesciunt consequatur minus cum porro, repellat rem perspiciatis pariatur facilis, ex quo tempore itaque ratione corrupti nisi tenetur ut ipsum voluptates magni dignissimos provident rerum modi! Ab odio dolores esse facilis neque sequi distinctio perspiciatis debitis ratione non adipisci suscipit, omnis minima itaque? Labore molestiae blanditiis deleniti consequatur eos, ipsam magni corrupti! Deserunt rem est voluptate illo, numquam labore quo nulla beatae harum quis facilis provident voluptatum ipsum expedita!</p>
    </section>
  );
}
