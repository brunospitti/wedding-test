import React from 'react';
import PropTypes from 'prop-types';

const ProjectPreview = () => <div>ProjectPreview</div>;

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProjectPreview;
