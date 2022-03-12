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
    width: "100%",
    maxWidth: 900,
    marginTop: 40,
    paddingTop: 150,
    paddingBottom: 150,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: "var(--white)",
    border: "2px solid var(--accent)",
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
  scrollDownButton: {
    position: "absolute",
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
      <div className={stylex(styles.introduction)}>
        <span className={stylex(styles.first)}> Hi!</span>
        <span className={stylex(styles.second)}>
          My name is Bola and I am a{" "}
          <span className={stylex(styles.highlight)}>Product Designer</span>{" "}
          based in London, UK.
        </span>
      </div>
      <div className={stylex(styles.scrollDownWrapper)}>
        <a className={stylex(styles.scrollDownButton)}>
          <FontAwesomeIcon size="3x" icon={faChevronDown} />
        </a>
      </div>
      <MyDesignProcess />
      <CaseStudies />
    </div>
  );
}
