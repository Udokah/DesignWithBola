import stylex from "@ladifire-opensource/stylex";
import HashIcon from "icons/HashIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef } from "react";
import projects from "projects/projects";

const styles = stylex.create({
  sideNav: {
    width: "var(--side-nav-width)",
    flexShrink: 0,
    boxSizing: "border-box",
    paddingTop: 40,
    backgroundColor: "var(--sidebar-background)",
    ":hover .caretRightIcon": {
      visibility: "visible",
    },
    "@media (max-width: 991.98px)": {
      position: "absolute",
      left: "calc(0px - var(--side-nav-width))",
      minHeight: "calc(100vh - var(--header-height))",
      boxShadow: "var(--shadow)",
      transition: ".5s",
      zIndex: 1,
    },
  },
  menu: {
    position: "absolute",
    left: "calc(10px + var(--side-nav-width))",
    top: 10,
    backgroundColor: "rgba(255, 255, 255, .5)",
    width: 40,
    height: 40,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    border: 0,
    lineHeight: "100%",
    boxShadow: "var(--shadow)",
    cursor: "pointer",
    "@media(max-width: 991.98px)": {
      display: "flex",
    },
  },
  resetList: {
    margin: 0,
    padding: 0,
  },
  listItem: {
    textDecoration: "none",
    paddingLeft: 2,
    color: "var(--dark-text)",
    fontWeight: 600,
    fontSize: 13,
    fontFeatureSettings: '"ss02" on,"liga" on,"calt" on',
    display: "block",
    alignItems: "center",
    borderWidth: 1,
    boxSizing: "border-box",
    borderStyle: "solid",
    borderColor: "transparent",
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
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
  subNav: {
    display: "block",
    marginLeft: 38,
  },
  subNavItem: {
    display: "block",
    marginTop: 4,
  },
  linkItem: {
    textDecoration: "none",
    fontSize: "1.3em",
    ":hover": {
      color: "var(--accent)",
    },
  },
});

export default function SideNavigation() {
  const sideNav = useRef(null);
  let isSideNavVisible = false;

  const toggleSideNav = () => {
    if (isSideNavVisible) {
      sideNav.current.style.left = "calc(0px - var(--side-nav-width))";
    } else {
      sideNav.current.style.left = "0";
    }

    isSideNavVisible = !isSideNavVisible;
  };

  return (
    <div ref={sideNav} id="side-nav" className={stylex(styles.sideNav)}>
      <button
        className={stylex(styles.menu)}
        aria-label="Menu"
        onClick={toggleSideNav}
      >
        <HashIcon className={stylex(styles.hashIcon)} />
      </button>
      <nav className={stylex(styles.resetList, styles.nav)}>
        <ol className={stylex(styles.resetList)}>
          <li className={stylex(styles.resetList)}>
            <div className={stylex(styles.listItem)}>
              <div>
                <CaretRightIcon />
                <HashIcon className={stylex(styles.hashIcon)} />
                <Link className={stylex(styles.linkItem)} to="/">
                  Home
                </Link>
              </div>
            </div>
          </li>
          <li className={stylex(styles.resetList)}>
            <div className={stylex(styles.listItem)}>
              <div>
                <CaretRightIcon />
                <HashIcon className={stylex(styles.hashIcon)} />
                <Link className={stylex(styles.linkItem)} to="/work">
                  My Work
                </Link>
              </div>
              <div className={stylex(styles.subNav)}>
                {projects.map(([, project]) => (
                  <Link
                    className={stylex(styles.linkItem, styles.subNavItem)}
                    to={project.path}
                    key={project.path}
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li className={stylex(styles.resetList)}>
            <div className={stylex(styles.listItem)}>
              <div>
                <CaretRightIcon />
                <HashIcon className={stylex(styles.hashIcon)} />
                <Link className={stylex(styles.linkItem)} to="/designs">
                  UI Designs
                </Link>
              </div>
            </div>
          </li>
          <li className={stylex(styles.resetList)}>
            <div className={stylex(styles.listItem)}>
              <div>
                <CaretRightIcon />
                <HashIcon className={stylex(styles.hashIcon)} />
                <Link className={stylex(styles.linkItem)} to="/about">
                  About Me
                </Link>
              </div>
            </div>
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
