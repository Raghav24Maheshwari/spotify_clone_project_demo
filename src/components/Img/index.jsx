import React from "react";
import PropTypes from "prop-types";
const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  onClick,
  onError,
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
      onError={onError}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  onError: PropTypes.func,
};






