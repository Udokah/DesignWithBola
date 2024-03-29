import stylex from "@ladifire-opensource/stylex";
import rebelliousRecording from "videos/rebellious.webm";

const styles = stylex.create({
  caseStudiesWrapper: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    gap: 70,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    gap: "3rem",
    width: "100%",
    maxWidth: 900,
    margin: "auto",
    justifyContent: "space-between",
    textAlign: "left",
    "@media (max-width: 767.98px)": {
      flexDirection: "column !important",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left !important",
      gap: "1rem !important",
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
    backgroundColor: "#000",
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

export default function CaseStudies({renderAll}) {
  const caseStudies = [
    {
      rightToLeft: false,
      videoSrc: rebelliousRecording,
      title: 'Rebellious Fashion',
      subTitle: 'UX Design',
      description: 'Solved user\'s pain points by redesigning Rebellious Fashion across desktop and mobile to ensure a compelling user journey.',
    },
    {
      rightToLeft: true,
      videoSrc: '',
      title: 'Reconnect',
      subTitle: 'UX Design',
      description: 'Solved user\'s pain points by redesigning Rebellious Fashion across desktop and mobile to ensure a compelling user journey.',
    },
    {
      rightToLeft: false,
      videoSrc: '',
      title: 'Extra 1',
      subTitle: 'UX Design',
      description: 'Solved user\'s pain points by redesigning Rebellious Fashion across desktop and mobile to ensure a compelling user journey.',
    },
    {
      rightToLeft: true,
      videoSrc: '',
      title: 'Extra 2',
      subTitle: 'UX Design',
      description: 'Solved user\'s pain points by redesigning Rebellious Fashion across desktop and mobile to ensure a compelling user journey.',
    },
  ];

  const getCaseStudiesToRender = () => {
    const caseStudiesToRender = [];

    for (let i = 0; i < caseStudies.length; i++) {
      if (!renderAll && i === 2) {
        break;
      }

      caseStudiesToRender.push(
        <CaseStudyCard
          key={`${caseStudies[i].title}-${i}`} // Append `-i` just in case `title` is the same
          rightToLeft={caseStudies[i].rightToLeft}
          videoSrc={caseStudies[i].videoSrc}
          title={caseStudies[i].title}
          subTitle={caseStudies[i].subTitle}
          description={caseStudies[i].description}
        />
      );
    }

    return caseStudiesToRender;
  };

  return (
    <section>
      <h1 className="main-heading">Case Studies</h1>
      <div className={stylex(styles.caseStudiesWrapper)}>
        {getCaseStudiesToRender()}
      </div>
    </section>
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
