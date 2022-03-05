import stylex from "@ladifire-opensource/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const styles = stylex.create({
  header: {
    backgroundColor: "var(--header-background)",
    height: "var(--header-height)",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    overflow: "hidden",
  },
  title: {
    fontWeight: 600,
  },
  logo: {
    visibility: "hidden",
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
      <div className={stylex(styles.logo)}>Logo</div>
      <div className={stylex(styles.title)}>Bola - Product Designer</div>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/bolanle-akinyemi-6b6b37220/"
            className={stylex(styles.link)}
          >
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/designwithbola/"
            className={stylex(styles.link)}
          >
            <FontAwesomeIcon size="xl" icon={faInstagram} />
          </a>
          <a
            href="mailto:bola.akinyemi@hotmail.com"
            className={stylex(styles.link)}
          >
            <FontAwesomeIcon size="xl" icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </header>
  );
}
