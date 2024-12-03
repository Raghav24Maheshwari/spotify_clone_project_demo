import React from "react";
import { Text } from "../Text";
const InputLabels = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-start w-full mb-1">
          <Text
            className={`${
              !!props?.textColor ? props?.textColor : "text-gray-900_02"
            } text-xs w-auto font-semibold`}
          >
            {props?.labelText}
          </Text>
          {!!props?.mandatoryAsterisk ? (
            <Text className="flex-1 text-red-700 text-xs w-auto">
              {props?.mandatoryAsterisk}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};
export { InputLabels };