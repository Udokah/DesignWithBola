import "./App.css";
import Header from "Header";
import stylex from "@ladifire-opensource/stylex";
import SideNavigation from "SideNavigation";
import MainContent from "MainContent";
import { HashRouter as Router } from "react-router-dom";

const styles = stylex.create({
  content: {
    boxSizing: "border-box",
    height: "calc(100vh - var(--header-height))",
    display: "flex",
  },
});

export default function App() {
  return (
    <Router>
      <Header />
      <section className={stylex(styles.content)}>
        <SideNavigation />
        <MainContent />
      </section>
    </Router>
  );
}
