import React from "react";
import { useState } from "react";
import {
  InputLabel,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { styled } from "@mui/system";
import { EyeSVG,EyeOffSVG } from "../../assets/Images";
const FormParent = styled(FormControl)({
  marginBottom: 24,
  fieldset: {},
  "& .MuiFormLabel-asterisk": {
    color: "var(--red-700)",
  },
  "& .MuiFormLabel-root": {
    color: "var(--gray-900_02)",
    "&.Mui-focused": {
      color: "var(--gray-900_02)",
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
    padding: "8px 16px",
    height: "24px",
    fontSize: "14px",
    lineHeight: "24px",
    color: "var(--gray-900_02)",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    "&.Mui-disabled": {
      opacity: 1,
      "& .MuiInputBase-input": {
        color: "var(--gray_700)",
        zIndex: 1,
        WebkitTextFillColor: "var(--gray_700)",
      },
      "& svg": {
        opacity: 1,
        zIndex: 2,
      },
      "& fieldset": {
        borderColor: "var(--gray-200)",
        backgroundColor: "var(--gray_50)",
        opacity: "1",
        zIndex: 0,
      },
      "&:hover fieldset": {
        opacity: "1",
        borderColor: "var(--gray-200)",
        backgroundColor: "var(--gray_50)",
      },
      "& img": {
        opacity: "1",
        zIndex: 1,
        cursor: "default",
      },
    },
    "& fieldset": {
      borderRadius: "8px",
      border: "1px solid var(--gray-200)",
      top: "-10px",
    },
    "&:hover fieldset": {
      borderColor: "var(--gray-200)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--gray-200)",
      borderWidth: "1px",
    },
  },
  "&.focus-none .Mui-focused fieldset": {
    borderColor: "var(--gray-200)",
    borderWidth: "1px",
  },
  "&.focus-none .MuiOutlinedInput-root:hover fieldset": {
    borderColor: "var(--gray-200)",
    borderWidth: "1px",
  },
});
const FloatingLabel = styled(InputLabel)({});
const CustomInput = styled(OutlinedInput)({});
const InputPassword = ({
  id,
  label,
  error,
  required,
  errorText,
  size,
  password,
  setPassword,
  isDoubleLineErr,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormParent
      fullWidth
      required={required ? true : false}
      size={size}
      className={isDoubleLineErr && error ? "add-margin" : ""}
    >
      <FloatingLabel htmlFor="outlined-adornment-password">
        {label}
      </FloatingLabel>
      <CustomInput
        id={id ? id : "outlined-adornment-password"}
        type={showPassword ? "text" : "password"}
        error={error ? true : false}
        variant="outlined"
        placeholder={label}
        value={password}
        onChange={(e) => {
          let password = e.target.value.trimStart();
          setPassword(password);
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              className="!mr-[-3px]"
            >
              {showPassword ? (
                <EyeSVG className="text-black-900" />
              ) : (
                <EyeOffSVG className="text-black-900" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      {errorText && (
        <span
          className={`text-sm text-red-700 absolute left-0 bottom-[-20px] ${
            isDoubleLineErr ? "bottom-[-40px]" : ""
          }`}
        >
          {errorText}
        </span>
      )}
    </FormParent>
  );
};
export { InputPassword };