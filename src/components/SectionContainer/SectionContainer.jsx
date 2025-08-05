import React from "react";
import PropTypes from "prop-types";

const SectionContainer = ({ children, className, ...props }) => {
  return (
    <section
      className={`w-full py-8 md:py-12 lg:py-14 max-w-7xl mx-auto px-4 ${className}`}
      {...props}
    >
      <div className="">{children}</div>
    </section>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};



export default SectionContainer;
