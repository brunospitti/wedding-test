import React from "react";
import { Link } from "gatsby";

export default class IndexProjectPage extends React.PureComponent {
  render() {
    const { projects } = this.props;

    return (
      <div>
        {projects.map(({ node: project }) => {
          const info = project.frontmatter;
          return (
            <div
              className="content"
              style={{ border: "1px solid #333", padding: "2em 4em" }}
              key={project.id}
            >
              <p>
                <Link className="has-text-primary" to={project.fields.slug}>
                  {info.title}
                </Link>
              </p>
              <div>
                {info.brief_description}
                <br />
                {info.screenshot && info.screenshot.relativePath}
                <br />
                {info.description}
                <br />
                {info.what_i_learned}
                <br />
                {info.technologies.map((tech, i) => (
                  <div key={i}>{tech}</div>
                ))}
                <br />
                {info.live_url && info.live_url}
                <br />
                {info.github_url && info.github_url}
                <br />
                <br />
                <br />
                <Link className="button is-small" to={project.fields.slug}>
                  Keep Reading →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
