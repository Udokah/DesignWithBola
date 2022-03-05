import stylex from "@ladifire-opensource/stylex";
import HashIcon from "icons/HashIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const styles = stylex.create({
  sideNav: {
    width: 240,
    boxSizing: "border-box",
    paddingTop: 40,
    backgroundColor: "var(--sidebar-background)",
    ":hover .caretRightIcon": {
      visibility: "visible",
    },
  },
  resetList: {
    margin: 0,
    padding: 0,
  },
  link: {
    paddingLeft: 2,
    color: "var(--dark-text)",
    fontWeight: 600,
    fontSize: 13,
    fontFeatureSettings: '"ss02" on,"liga" on,"calt" on',
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    boxSizing: "border-box",
    borderStyle: "solid",
    borderColor: "transparent",
    height: 32,
    ":hover": {
      borderColor: "#18a0fb",
      cursor: "pointer",
    },
  },
  hashIcon: {
    marginLeft: 12,
    marginRight: 12,
  },
  caretRightIcon: {
    color: "#b3b3b3",
    visibility: "hidden",
  },
  nav: {
    borderTop: "1px solid #e5e5e5",
  },
});

export default function SideNavigation() {
  return (
    <div id="side-nav" className={stylex(styles.sideNav)}>
      <nav className={stylex(styles.resetList, styles.nav)}>
        <ol className={stylex(styles.resetList)}>
          <li className={stylex(styles.resetList)}>
            <a className={stylex(styles.link)}>
              <CaretRightIcon />
              <HashIcon className={stylex(styles.hashIcon)} />
              About Me
            </a>
          </li>
          <li className={stylex(styles.resetList)}>
            <a className={stylex(styles.link)}>
              <CaretRightIcon />
              <HashIcon className={stylex(styles.hashIcon)} />
              My Work
            </a>
          </li>
          <li className={stylex(styles.resetList)}>
            <a className={stylex(styles.link)}>
              <CaretRightIcon />
              <HashIcon className={stylex(styles.hashIcon)} />
              Contact Me
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

function CaretRightIcon() {
  return (
    <span id="caret-right-icon" className={stylex(styles.caretRightIcon)}>
      <FontAwesomeIcon size="xs" icon={faCaretRight} />
    </span>
  );
}
