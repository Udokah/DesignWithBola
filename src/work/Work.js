import projects from "projects/projects";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div>
      Workk page
      <div>
        {projects.map(([, project], index) => (
          <Link key={project.path} to={project.path}>
            {project.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
