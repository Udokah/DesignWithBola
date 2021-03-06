import stylex from "@ladifire-opensource/stylex";
import Home from "home/Home";
import Work from "work/Work";
import Designs from "designs/Designs";
import About from "about/About";
import { Routes, Route } from "react-router-dom";
import projects from "projects/projects";

const styles = stylex.create({
  root: {
    backgroundColor: "var(--content-background)",
    color: "var(--dark-text)",
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    padding: 20,
  },
});

export default function MainContent() {
  return (
    <div className={stylex(styles.root)}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work" element={<Work />} />
        {projects.map(([Component, project], index) => (
          <Route
            key={project.path}
            exact
            path={project.path}
            element={<Component />}
          />
        ))}
        <Route exact path="/designs" element={<Designs />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
