import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import default style
const PhoneInputComponent = ({ ...props }) => {
  return (
    <>
      <PhoneInput
        specialLabel={""}
        country={props?.country}
        onChange={(value, data) => {
          props?.onChange(value, data);
        }}
        value={props?.value}
        inputStyle={{
          borderColor: props.touched && props.error ? "#DC362E" : undefined,
        }}
        containerStyle={{
          position: "relative",
          display: "inline-block",
        }}
        buttonStyle={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          border: "none",
          background: "none",
        }}
        dropdownStyle={{
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        {...props}
      />
      {props?.error && (
        <span className="text-sm text-red-700 absolute left-0 bottom-[5px]">
          {props?.error}
        </span>
      )}
    </>
  );
};
export { PhoneInputComponent };