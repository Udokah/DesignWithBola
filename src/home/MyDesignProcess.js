import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  process: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 100,
  },
  processCardWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 900,
    marginTop: 10,
    boxSizing: "border-box",
  },
  processCard: {
    width: 170,
    height: 170,
    borderRadius: 6,
    position: "relative",
    perspective: 500,
    boxSizing: "border-box",
  },
  processCardContent: {
    transition: "transform 1s",
    transformStyle: "preserve-3d",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    backgroundColor: "white",
    color: "var(--accent)",
    boxShadow: "0 10px 30px rgb(0, 0, 0, .1)",
  },
  front: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    fontWeight: 600,
  },
  back: {
    transform: "rotateY(180deg)",
    fontSize: 15,
    padding: 10,
    lineHeight: 1.4,
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
    border: "1px solid var(--accent)",
  },
  frontAndBack: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    backfaceVisibility: "hidden",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  icon: {
    fontSize: "4rem",
  },
});

export default function MyDesignProcess() {
  return (
    <div id="design-process" className={stylex(styles.process)}>
      <h1 className="main-heading">My Design Process</h1>
      <div className={stylex(styles.processCardWrapper)}>
        <ProcessCard
          backgroundImage="linear-gradient(rgb(254, 198, 46) 50%, rgb(255 152 0))"
          color="#000"
          title="Research"
          icon="🔎"
          description="I start by Identifying, researching and understanding the initial problem at hand."
        />
        <ProcessCard
          backgroundImage="linear-gradient(rgb(221 102 76) 50%, rgb(202 64 33))"
          color="#fff"
          title="Define"
          icon="✍🏾"
          description="The next step is to define an apparent problem based on user research."
        />
        <ProcessCard
          backgroundImage="linear-gradient(rgb(150, 80, 251) 50%, rgb(101 43 185))"
          color="#fff"
          title="Develop"
          icon="🏗"
          description="I focus on developing solutions to the identified problems by creating a low-fidelity design of the final product."
        />
        <ProcessCard
          backgroundImage="linear-gradient(rgb(39, 162, 248) 50%, rgb(30 127 195))"
          color="#fff"
          title="Deliver"
          icon="♻️"
          description="Deliver and listen; I provide a solution that works and receive feedback on improvements."
        />
      </div>
    </div>
  );
}

function ProcessCard({ title, icon, description }) {
  return (
    <div className={stylex(styles.processCard)} data-process-card>
      <div
        className={stylex(styles.processCardContent)}
        data-process-card-content
      >
        <div className={stylex(styles.front, styles.frontAndBack)}>
          <div className={stylex(styles.icon)}>{icon}</div>
          <div>{title}</div>
        </div>
        <div className={stylex(styles.back, styles.frontAndBack)}>
          {description}
        </div>
      </div>
    </div>
  );
}
