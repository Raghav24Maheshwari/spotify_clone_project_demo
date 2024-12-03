import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Link } from "react-router-dom";
const variants = {
  outline: {
    gray_200: "border border-gray-200 border-solid text-black-900",
  },
};
const shapes = {
  square: { rounded_none: "rounded-none" },
  rounded: { rounded: "rounded" },
};
const sizes = { xs: "pl-px py-px", sm: "pl-2 py-2" };
const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "rounded text-light_blue-900 border-gray-200 mt-0.5 cursor-pointer",
      labelClassName = "cursor-pointer capitalize",
      className = "flex items-center gap-2 cursor-pointer",
      name = "",
      children,
      label = "",
      shape = "",
      size = "",
      variant = "",
      color = "",
      errors = [],
      checked,
      id,
      onChange,
      showLink,
      ...restProps
    },
    ref
  ) => {
    const handleChange = () => {
      if (onChange) onChange(!checked);
    };
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          {showLink ? (
            <Link className={`${labelClassName}`} to="#">
              {label}
            </Link>
          ) : (
            <label className={`${labelClassName}`} htmlFor={id}>
              {label}
            </label>
          )}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);
CheckBox.propTypes = {
  inputClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([""]),
  ]),
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  showLink: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["gray-200"]),
  children: PropTypes.node, // Add this line
  errors: PropTypes.array,
  checked: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
export { CheckBox };