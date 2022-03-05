import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  root: {
    backgroundColor: "var(--content-background)",
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "scroll",
  },
});

export default function MainContent() {
  return <div className={stylex(styles.root)}>MainContent</div>;
}
