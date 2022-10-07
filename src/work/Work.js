import projects from "work/projects";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div>
      Workk page
      <div>
        {projects.map(([, project], index) => (
          <Link key={index} to={project.path}>
            {project.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
