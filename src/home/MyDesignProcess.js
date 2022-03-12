import stylex from "@ladifire-opensource/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faPenToSquare,
  faObjectUngroup,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

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
    borderRadius: 6,
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
});

export default function MyDesignProcess() {
  return (
    <div className={stylex(styles.process)}>
      <h1>My Design Process</h1>
      <div className={stylex(styles.processCardWrapper)}>
        <ProcessCard
          backgroundColor="#fec62e"
          color="#000"
          title="Research"
          icon={faChalkboardTeacher}
          description="I start by Identifying, researching and understanding the initial problem at hand."
        />
        <ProcessCard
          backgroundColor="#ef4f2b"
          color="#fff"
          title="Define"
          icon={faPenToSquare}
          description="The next step is to define an apparent problem based on user research."
        />
        <ProcessCard
          backgroundColor="#9650fb"
          color="#fff"
          title="Develop"
          icon={faObjectUngroup}
          description="I focus on developing solutions to the identified problems by creating a low-fidelity design of the final product."
        />
        <ProcessCard
          backgroundColor="#27a2f8"
          color="#fff"
          title="Deliver"
          icon={faHandHoldingHeart}
          description="Deliver and listen; I provide a solution that works and receive feedback on improvements."
        />
      </div>
    </div>
  );
}

function ProcessCard({ title, icon, description, backgroundColor, color }) {
  return (
    <div className={stylex(styles.processCard)} data-process-card>
      <div
        className={stylex(styles.processCardContent)}
        style={{ backgroundColor, color }}
        data-process-card-content
      >
        <div className={stylex(styles.front, styles.frontAndBack)}>
          <FontAwesomeIcon size="3x" icon={icon} />
          <div>{title}</div>
        </div>
        <div className={stylex(styles.back, styles.frontAndBack)}>
          {description}
        </div>
      </div>
    </div>
  );
}