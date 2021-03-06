import stylex from "@ladifire-opensource/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MyDesignProcess from "home/MyDesignProcess";
import CaseStudies from "home/CaseStudies";

const styles = stylex.create({
  root: {
    paddingBottom: 50,
    textAlign: "center",
    color: "var(--dark-text)",
  },
  introduction: {
    display: "inline-block",
    textAlign: "center",
    minHeight: "75vh",
    marginTop: 40,
    paddingTop: 150,
    paddingBottom: 150,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: "var(--white)",
    border: "2px solid var(--accent)",
    "@media (min-width: 576px)": {
      width: "80%",
    },
  },
  first: {
    fontFamily: "var(--font-serif)",
    fontWeight: 700,
    fontSize: 55,
    display: "block",
    marginBottom: "1rem",
  },
  second: {
    fontSize: 32,
    lineHeight: 1.4,
  },
  highlight: {
    backgroundColor: "var(--accent)",
    color: "var(--white)",
    fontWeight: 500,
  },
  scrollDownButton: {
    position: "absolute",
    left: 0,
    right: 0,
    color: "var(--dark-text)",
    animation: "bounce 3s infinite",
    cursor: "pointer",
  },
  scrollDownWrapper: {
    position: "relative",
    marginTop: 20,
  },
});

export default function Home() {
  return (
    <div className={stylex(styles.root)}>
      <p className={stylex(styles.introduction)}>
        <span className={stylex(styles.first)}>Hi! 👋🏾</span>
        <span className={stylex(styles.second)}>
          My name is Bola.<br />I am a{" "}
          <span className={stylex(styles.highlight)}>Product Designer</span>{" "}
          based in London, UK.
        </span>
      </p>
      <div className={stylex(styles.scrollDownWrapper)}>
        <a href="#design-process" className={stylex(styles.scrollDownButton)} aria-label="Scroll down">
          <FontAwesomeIcon size="3x" icon={faChevronDown} />
        </a>
      </div>
      <MyDesignProcess />
      <CaseStudies />
    </div>
  );
}
