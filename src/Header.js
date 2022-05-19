import stylex from "@ladifire-opensource/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "icons/Logo";
import { Link } from "react-router-dom";

const styles = stylex.create({
  header: {
    backgroundColor: "var(--header-background)",
    height: "var(--header-height)",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 0,
    overflow: "hidden",
  },
  title: {
    fontWeight: 600,
    flex: 1,
    "@media (max-width: 575.98px)": {
      display: "none",
    },
  },
  logoWrap: {
    flex: 1,
  },
  logo: {
    padding: 20,
    ":hover": {
      backgroundColor: "#000",
    },
  },
  link: {
    padding: 20,
    color: "var(--white)",
    textAlign: "center",
    ":hover": {
      backgroundColor: "#000",
    },
  },
});

export default function Header() {
  return (
    <header className={stylex(styles.header)}>
      <h1 className={stylex(styles.logoWrap)}>
        <Link to="/">
          <Logo className={stylex(styles.logo)} />
        </Link>
      </h1>
      <div className={stylex(styles.title)}>Bola - Product Designer</div>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/bolanle-akinyemi-6b6b37220/"
            target="_blank"
            rel="noreferrer noopener"
            className={stylex(styles.link)}
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/designwithbola/"
            className={stylex(styles.link)}
            aria-label="Instagram"
          >
            <FontAwesomeIcon size="xl" icon={faInstagram} />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="mailto:bola.akinyemi@hotmail.com"
            className={stylex(styles.link)}
            aria-label="Mail"
          >
            <FontAwesomeIcon size="xl" icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </header>
  );
}
