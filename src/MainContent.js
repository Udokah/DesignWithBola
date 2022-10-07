import stylex from "@ladifire-opensource/stylex";
import Home from "home/Home";
import Designs from "designs/Designs";
import About from "about/About";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import CaseStudies from "case-studies/CaseStudies";

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
  const main = useRef(null);
  const designProcess = useRef(null);

  const scrollToDesignProcess = (e) => {
    main.current.scrollTo(0, designProcess.current.offsetTop);
  };

  return (
    <div ref={main} className={stylex(styles.root)}>
      <Routes>
        <Route exact path="/" element={<Home ref={designProcess} scrollToDesignProcess={scrollToDesignProcess} />} />
        <Route exact path="/case-studies" element={<CaseStudies renderAll={true} />} />
        <Route exact path="/designs" element={<Designs renderAll={true} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
