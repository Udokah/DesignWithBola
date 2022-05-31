import stylex from "@ladifire-opensource/stylex";
import Home from "home/Home";
import Work from "work/Work";
import Designs from "designs/Designs";
import Contact from "contact/Contact";
import { Routes, Route } from "react-router-dom";

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
        <Route exact path="/designs" element={<Designs />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
