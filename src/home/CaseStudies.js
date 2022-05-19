import stylex from "@ladifire-opensource/stylex";
import rebelliousRecording from "videos/rebellious.webm";

const styles = stylex.create({
  caseStudies: {
    marginTop: 80,
  },
  caseStudiesWrapper: {
    marginTop: 40,
  },
  card: {
    display: "inline-flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: 900,
    marginBottom: 70,
    justifyContent: "space-between",
    textAlign: "left",
    "@media (max-width: 767.98px)": {
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left !important",
      gap: "1rem",
      maxWidth: 500,
    },
  },
  rightToLeft: {
    flexDirection: "row-reverse",
    textAlign: "right",
  },
  video: {
    width: 480,
    maxWidth: "100%",
    height: 420,
    backgroundColor: "transparent",
    pointerEvents: "none",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    lineHeight: 1.4,
    display: "inline-block",
  },
  divider: {
    width: 80,
  },
  title: {
    fontSize: "1.7em",
    color: "var(--dark-text)",
    fontFamily: "var(--font-serif)",
    fontWeight: 700,
    ":hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  subtitle: {
    fontSize: "1.3em",
  },
  description: {
    marginTop: 8,
  },
  more: {
    fontWeight: 800,
    fontSize: "0.8em",
    display: "inline-block",
    marginTop: 20,
    backgroundColor: "var(--accent)",
    color: "var(--white)",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 20,
    cursor: "pointer",
  },
});

export default function CaseStudies() {
  return (
    <div className={stylex(styles.caseStudies)}>
      <h1 className="main-heading">Case Studies</h1>
      <div className={stylex(styles.caseStudiesWrapper)}>
        <CaseStudyCard
          videoSrc={rebelliousRecording}
          title="Rebellious Fashion"
          subTitle="UX Design"
          description="Solved user's pain points by redesigning Rebellious Fashion across desktop and mobile to ensure a compelling user journey."
        />
        <CaseStudyCard
          rightToLeft={true}
          title="Reconnect"
          subTitle="UX Design"
          description="Solved user's pain points by redesigning Rebellious Fashion across desktop and mobile to ensure a compelling user journey."
        />
      </div>
    </div>
  );
}

function CaseStudyCard({
  title,
  subTitle,
  description,
  href,
  videoSrc,
  rightToLeft = false,
}) {
  return (
    <div className={stylex(styles.card, rightToLeft && styles.rightToLeft)}>
      <video
        muted={true}
        loop={true}
        className={stylex(styles.video)}
        controls
        autoPlay={true}
      >
        <source src={videoSrc} type="video/webm" />
      </video>
      <div className={stylex(styles.divider)} />
      <div className={stylex(styles.contentContainer)}>
        <div className={stylex(styles.content)}>
          <a className={stylex(styles.title)} href={href}>
            {title}
          </a>
          <div className={stylex(styles.subtitle)}>{subTitle}</div>
          <div className={stylex(styles.description)}>{description}</div>
          <a className={stylex(styles.more)} href={href}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
