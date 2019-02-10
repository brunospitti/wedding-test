import React from "react";
import { Link } from "gatsby";

import { HTMLContent } from "./helpers/Content";

export default class IndexWorkExperience extends React.PureComponent {
  render() {
    const { workExperiences } = this.props;

    return (
      <div>
        {workExperiences.map(({ node: work }) => {
          const info = work.frontmatter;
          const infoHTML = work.html;
          return (
            <div
              className="content"
              style={{ border: "1px solid #333", padding: "2em 4em" }}
              key={work.id}
            >
              <p>
                <Link className="has-text-primary" to={work.fields.slug}>
                  {info.title}
                </Link>
              </p>
              <div>
                {info.period}
                <br />
                {info.brief_description}
                <br />
                <br />
                <HTMLContent content={infoHTML} />
                <br />
                {info.technologies.map((tech, i) => (
                  <div key={i}>{tech}</div>
                ))}
                <br />
                <br />
                <Link className="button is-small" to={work.fields.slug}>
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
