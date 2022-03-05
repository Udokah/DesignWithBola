import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  root: {
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: 50,
  },
  card: {
    width: "100%",
    maxWidth: 700,
    color: "var(--dark-text)",
    paddingTop: 44,
    paddingBottom: 44,
    paddingRight: 40,
    paddingLeft: 40,
    lineHeight: 1.5,
  },
  first: {
    fontWeight: 500,
    fontSize: 55,
    display: "block",
  },
  second: {
    fontSize: 50,
  },
  highlight: {
    wordWrap: "nowwrap",
    backgroundColor: "var(--accent)",
    whiteSpace: "nowrap",
    color: "var(--white)",
    fontWeight: 500,
  },
});

export default function Home() {
  return (
    <div className={stylex(styles.root)}>
      <div className={stylex(styles.card)}>
        <span className={stylex(styles.first)}> Hi!</span>
        <span className={stylex(styles.second)}>
          My name is Bola and I am a{" "}
          <span className={stylex(styles.highlight)}>Product Designer</span>{" "}
          based in London, UK.
        </span>
      </div>
    </div>
  );
}
