import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  root: {
    paddingBottom: 50,
    textAlign: "center",
    color: "var(--dark-text)",
  },
  introduction: {
    display: "inline-block",
    textAlign: "left",
    width: "100%",
    maxWidth: 700,

    paddingTop: 40,
    paddingBottom: 44,
    paddingRight: 40,
    paddingLeft: 40,
  },
  first: {
    fontWeight: 500,
    fontSize: 55,
    display: "block",
  },
  second: {
    fontSize: 50,
    lineHeight: 1.4,
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
      <div className={stylex(styles.introduction)}>
        <span className={stylex(styles.first)}> Hi!</span>
        <span className={stylex(styles.second)}>
          My name is Bola and I am a{" "}
          <span className={stylex(styles.highlight)}>Product Designer</span>{" "}
          based in London, UK.
        </span>
      </div>
      <div>My design process</div>
    </div>
  );
}
