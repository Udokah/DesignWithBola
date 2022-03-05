import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  header: {
    backgroundColor: "var(--header-background)",
    height: "var(--header-height)",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    position: "sticky",
    top: 0,
  },
  title: {
    fontWeight: 600,
  },
});

export default function Header() {
  return (
    <header className={stylex(styles.header)}>
      <div className={stylex(styles.title)}>Bola - Product Designer</div>
    </header>
  );
}
