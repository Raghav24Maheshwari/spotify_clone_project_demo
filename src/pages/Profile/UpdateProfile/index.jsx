import { InputAdornment, Tooltip } from "@mui/material";
import React, { useState } from "react";
import {
  Img,
  Input,
  InputLabels,
  Text,
  PhoneInputComponent,
  EditorComponent,
} from "../../../components";
import { useTranslation } from "react-i18next";
import { getTextLengthOfTextEditor } from "../../../common/HelperFunction";
import { isValidPhoneNumber } from "react-phone-number-input";
const UpdateProfile = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    mobileNumber: "",
    mobileNumberError: "",
    about: "",
    aboutError: "",
  });
  return (
    <>
      <div className="flex md:flex-col justify-center itemms-start w-full gap-6 md:p-[18px]">
        <div className="w-[708px] md:w-full md:mt-6 mb-5">
          <div className="min-h-[100vh] md:h-auto md:py-8 border-gray-400 border rounded p-5">
            <div className="w-full mb-8">
              <Text className="text-[16px] font-semibold mb-[20px]">
                {t("profile.profilePicture")}
              </Text>
              <div className="relative w-[120px] h-[120px] mb-[16px]">
                <label htmlFor="profileImage" className="cursor-pointer">
                  <Img
                    src={"images/profile-default.svg"}
                    alt="Profile"
                    className="w-[120px] h-[120px] object-cover rounded-[50%]"
                  />
                  <input
                    id="profileImage"
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/jpeg, image/png"
                  />
                </label>
                {true ? (
                  <Img
                    zIndex="66"
                    src="images/img_cancel.svg"
                    alt="Profile"
                    className="w-7 h-7 object-cover rounded-[50%] absolute right-0 top-0 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                ) : null}
              </div>
              <Text className="text-[14px] text-gray-700 font-normal">
                {t("profile.uploadYourImage")}
              </Text>
            </div>

            <div className="w-full">
              <div className="flex justify-between mb-[4px] ">
                <Text className="text-[12px] font-semibold">
                  {t("profile.writeYourThoughts")}
                </Text>
                <Text className="flex-1 text-red-700 text-xs w-auto">*</Text>
                <Text className="text-[12px] font-normal">
                  <span
                  //   style={{ color: companyData?.aboutError ? "red" : "" }}
                  >
                    {true ? "dcsdcsdds" : 0}
                  </span>
                  /1000
                </Text>
              </div>
              <EditorComponent
                className={"mb-6 relative"}
                value={formData.about} // Corrected to reference formData.about
                onChange={(value) => {
                  let about = value;
                  let count = getTextLengthOfTextEditor(about);
                  setFormData((data) => {
                    if (count > 1000) {
                      return {
                        ...data,
                        about,
                        aboutError: t(
                          "errorMessages.MaxCharactersLimitShouldBeLessThan"
                        ),
                      };
                    } else {
                      return {
                        ...data,
                        about,
                        aboutError: "",
                      };
                    }
                  });
                }}
                error={formData.aboutError} // Display the error message if it exists
              />
            </div>
            <Text className="text-[16px] font-semibold mb-5">
              {t("common.contactPersonDetails")}
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 md:gap-0 w-full">
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.firstName")}
                  mandatoryAsterisk="*"
                />
                <Input
                  className="fill"
                  size="small"
                  value="fdgfd"
                  onChange={(firstName) => {
                    // let firstName = removeNonAlphabets(value);
                    if (firstName?.length > 50) return;
                    setFormData({
                      ...formData,
                      firstName,
                      firstNameError: "",
                    });
                  }}
                  error={formData?.firstNameError}
                />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.lastName")}
                  mandatoryAsterisk="*"
                />
                <Input
                  className="fill"
                  size="small"
                  value=""
                  onChange={(lastName) => {
                    // let lastName = removeNonAlphabets(value);
                    if (lastName?.length > 50) return;
                    setFormData({
                      ...formData,
                      lastName,
                      lastNameError: "",
                    });
                  }}
                  error={formData?.lastNameError}
                />
              </div>
            </div>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("common.emailAddress")}
              />
              <Input
                endAdornment={
                  <Tooltip
                    title={t("common.thisWillActAsYourUsernameToLogin")}
                    placement="bottom"
                  >
                    <div className="inline-flex">
                      <Img
                        className="h-[19px] w-[19px] md:mr-0 cursor-pointer"
                        src="images/img_info.svg"
                        alt="info_one"
                      />
                    </div>
                  </Tooltip>
                }
                className="fill"
                size="small"
                value=""
                onChange={(email) => {
                  if (email?.length > 100) return;
                  setFormData({
                    ...formData,
                    email,
                    emailError: "",
                  });
                }}
                disabled
              />
            </div>
            <div className="w-full relative">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("common.mobileNumber")}
                mandatoryAsterisk="*"
              />
              <PhoneInputComponent
                className="fill"
                size="small"
                value={formData?.mobileNumber}
                country={"pt"}
                onChange={(value, data) => {
                  let mobileNumber = value;
                  let countryCode = data?.dialCode;
                  const isValid =
                    mobileNumber == countryCode
                      ? true
                      : isValidPhoneNumber(`+${mobileNumber}`);
                  setFormData({
                    ...formData,
                    mobileNumber,
                    mobileNumberError: isValid
                      ? ""
                      : t("errorMessages.invalidMobileNumber"),
                    countryCode,
                  });
                }}
                error={formData?.mobileNumberError}
              />
              <Tooltip
                title={t(
                  "common.thisMustBeValidWhatsAppNumberToAccessFeaturesOnWhatsAppAppQuickly"
                )}
                placement="bottom"
              >
                <div className="inline-flex">
                  <Img
                    className="h-[19px] w-[19px] md:mr-0 cursor-pointer absolute right-[14px] top-[28px]"
                    src="images/img_info.svg"
                    alt="info_one"
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateProfile;
