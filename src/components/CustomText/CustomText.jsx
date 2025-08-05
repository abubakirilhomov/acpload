import React from 'react';
import PropTypes from 'prop-types';

const CustomText = ({
  type = 'text',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-roboto text-white';

  const textStyles = {
    title: `text-3xl font-bold ${baseClasses} md:text-4xl lg:text-5xl`,
    subtitle: `text-2xl font-semibold ${baseClasses} md:text-3xl lg:text-4xl`,
    secondSubtitle: `text-xl font-medium ${baseClasses} md:text-2xl lg:text-3xl`,
    heading: `text-lg font-semibold ${baseClasses} md:text-xl lg:text-2xl`,
    text: `text-base ${baseClasses} md:text-lg lg:text-xl`,
  };

  const getTextClass = () => {
    return textStyles[type] || textStyles.text;
  };

  return (
    <div className={`${getTextClass()} ${className}`} {...props}>
      {children}
    </div>
  );
};

CustomText.propTypes = {
  type: PropTypes.oneOf(['title', 'subtitle', 'secondSubtitle', 'heading', 'text']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// ✅ Remove defaultProps — no longer needed
// CustomText.defaultProps = {
//   type: 'text',
//   className: '',
// };

export default CustomText;
