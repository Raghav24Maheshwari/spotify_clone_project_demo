import React, { useEffect, useState } from "react";
import { InputAdornment, Tooltip } from "@mui/material";
import {
  Button,
  Input,
  InputLabels,
  InputPassword,
  Text,
  Img,
} from "../../components";
import { CheckBox } from "../../components/CheckBox";
import { PhoneInputComponent } from "../../components/PhoneInput";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CommonImage from "../../components/CommonImage";
import { CloseSVG } from "../../assets/Images";
import { useSignUp } from "../../hooks/userHooks/useSignUp";
import { isValidPhoneNumber } from "react-phone-number-input";
import { changeLoader } from "../../redux/reducers/loader";
import globalRequest from "../../prototype/globalRequest";
import { API_ROUTES } from "../../common/Enum";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  //states
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [showMusicList, setShowMusicList] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [musicCategories, setMusicCategories] = useState([]);
  const { signUp, signUpeErrors } = useSignUp(musicCategories);
  const [formData, setFormData] = useState({
    musicCategory: "",
    musicCategoryError: "",
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    mobileNumber: "",
    mobileNumberError: "",
    password: "",
    confirmPassword: "",
    confirmPasswordError: "",
    conditionsChecked: "",
  });

  const handleInputFocus = (flag) => {
    setShowMusicList(flag);
  };

  const handleSubmit = () => {
    signUp(formData);
  };

  useEffect(() => {
    if (signUpeErrors) {
      setFormData(signUpeErrors);
    }
    // eslint-disable-next-line
  }, [signUpeErrors]);

  const [filteredItems, setFilteredItems] = useState(null);
  const filterItems = (keyword) => {
    if (!keyword) {
      // Show all items if no keyword is entered
      setFilteredItems(musicCategories);
      return;
    }

    const filtered = musicCategories
      .filter((item) =>
        item?.name.toLowerCase().includes(keyword.toLowerCase())
      )
      .slice(0, 7); // Slice to include only the first 7 items

    if (filtered.length === 0) {
      setFilteredItems([t("common.other")]);
    } else {
      setFilteredItems(filtered);
    }
  };

  const getMusicCategoryList = async () => {
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.MUSIC_CATEGORY_LIST,
        "get",
        {},
        {},
        false
      );
      if (res?.message === "Success") {
        setMusicCategories(res?.data);
      }
    } catch (err) {
      console.error("error", err);
    } finally {
      dispatch(changeLoader(false));
    }
  };

  useEffect(() => {
    filterItems();
    getMusicCategoryList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (musicCategories?.length) {
      setFilteredItems(musicCategories);
    }
  }, [musicCategories]);
  useEffect(() => {
    if (
      formData.musicCategory &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.mobileNumber &&
      formData.password &&
      formData.confirmPassword &&
      formData.conditionsChecked
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [formData]);

  return (
    <>
      <div className="flex md:flex-col justify-center items-center w-full">
        <div className="w-[50%] md:w-full">
          <div className="absolute top-3 left-4 md:relative md:left-0 md:mb-10 md:pl-4">
            <Img
              src="images/Spotify_Full_Logo_RGB_Green.png"
              alt="Logo"
              className="w-[88px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-start items-center pt-5 max-h-[calc(100vh_-_50px)] md:max-h-full overflow-auto">
            <div className="w-full max-w-[427px] sm:px-4 flex flex-col justify-center items-start">
              <div className="pt-[20px] flex items-center mb-[20px]">
                <Img
                  src="images/backArrow.svg"
                  alt=""
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                <Text className="text-[24px] font-semibold ">
                  {t("common.signUp")}
                </Text>
              </div>
              <div className="w-full relative">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.selectMusicCategory")}
                  mandatoryAsterisk="*"
                />
                <Input
                  error={formData?.musicCategoryError}
                  onFocus={() => {
                    handleInputFocus(true);
                  }}
                  onBlur={() => {
                    handleInputFocus(false);
                  }}
                  placeholder={t("common.selectMusicCategory")}
                  endAdornment={
                    <InputAdornment position="start">
                      {searchKeyword ? (
                        <CloseSVG
                          className="w-[12px] cursor-pointer"
                          onClick={() => {
                            setSearchKeyword("");
                            setFilteredItems(musicCategories); // Reset to all items
                            setFormData((formData) => ({
                              ...formData,
                              musicCategoryError: "",
                            }));
                          }}
                        />
                      ) : (
                        <></>
                      )}
                    </InputAdornment>
                  }
                  className="fill"
                  size="small"
                  value={searchKeyword}
                  onChange={(value) => {
                    if (!value) setFilteredItems(musicCategories);
                    else {
                      filterItems(value);
                    }
                    setSearchKeyword(value);
                    setFormData((formData) => ({
                      ...formData,
                      musicCategoryError: "",
                    }));
                  }}
                />
                {showMusicList && (
                  <div className="w-full absolute left-0 border border-solid border-blue_gray_100 rounded-md bg-white_A700 mt-[-23px] bg-white-A700 z-[9] max-h-[240px] overflow-auto">
                    {filteredItems &&
                      filteredItems?.map((item, index) => (
                        <div
                          key={index} // Always include a unique key when rendering lists
                          className="overflow-hidden flex flex-col items-start justify-start py-2 px-4 border-b border-solid border-blue_gray_100 last:border-none hover:bg-light_green_50 cursor-pointer last:hover:rounded-b-md first:hover:rounded-t-md"
                          onMouseDown={(event) => {
                            event.preventDefault();
                            setFormData((formData) => ({
                              ...formData,
                              musicCategory: item?.id,
                              musicCategoryError: "",
                            }));
                            setSearchKeyword(
                              item?.name
                                ?.split(" ") // Split the string into an array of words
                                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
                                .join(" ") // Join them back into a single string
                            );
                            
                            setShowMusicList(false);
                          }}
                        >
                          <Text className="common-pointer font-lato text-sm not-italic text-gray_900 tracking-[0.32px]">
                            {item?.name
                              ?.split(" ") 
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() +
                                  word.slice(1).toLowerCase()
                              ) 
                              .join(" ")}{" "}
                          </Text>
                        </div>
                      ))}

                    {/* dfss */}
                  </div>
                )}
              </div>
              <Text className="text-[16px] font-semibold mb-[20px]">
                {t("common.contactPersonDetails")}
              </Text>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.firstName")}
                    mandatoryAsterisk="*"
                  />
                  <Input
                    className="fill"
                    size="small"
                    value={formData?.firstName}
                    error={formData?.firstNameError}
                    onChange={(firstName) => {
                      setFormData({
                        ...formData,
                        firstName,
                        firstNameError: "",
                      });
                    }}
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
                    value={formData?.lastName}
                    error={formData?.lastNameError}
                    onChange={(lastName) => {
                      setFormData({ ...formData, lastName, lastNameError: "" });
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.yourEmailAddress")}
                  mandatoryAsterisk="*"
                />
                <Input
                  endAdornment={
                    <InputAdornment position="start">
                      <Tooltip
                        className="relative right-[-8px]"
                        title={t("common.thisWillActAsYourUsernameToLogin")}
                        placement="top"
                        arrow
                      >
                        <div className="inline-flex">
                          <Img
                            className="h-[19px] w-[19px] md:mr-0 cursor-pointer"
                            src="images/img_info.svg"
                            alt="info_one"
                          />
                        </div>
                      </Tooltip>
                    </InputAdornment>
                  }
                  className="fill"
                  size="small"
                  value={formData?.email}
                  error={formData?.emailError}
                  onChange={(email) => {
                    if (email?.length > 100) return;
                    setFormData({ ...formData, email, emailError: "" });
                  }}
                />
              </div>
              <div className="w-full relative">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.yourMobileNumber")}
                  mandatoryAsterisk="*"
                />
                <PhoneInputComponent
                  className="fill"
                  size="small"
                  value={formData?.mobileNumber}
                  country={"in"}
                  error={formData?.mobileNumberError}
                  // onChange={(mobNo)=>{
                  //   setFormData({...formData,mobNo,mobileNumberError:''})
                  // }}
                  onChange={(value, data) => {
                    let mobileNumber = value;
                    let countryCode = data?.dialCode;
                    const isValid =
                      mobileNumber == countryCode
                        ? true
                        : isValidPhoneNumber(`+${mobileNumber}`);
                    setFormData({
                      ...formData,
                      countryCode,
                      mobileNumber,
                      mobileNumberError: isValid
                        ? ""
                        : t("errorMessages.invalidMobileNumber"),
                    });
                  }}
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
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.password")}
                  mandatoryAsterisk="*"
                />
                <InputPassword
                  id="institute-password"
                  className="fill"
                  size="small"
                  error={formData?.passwordError ? true : false}
                  errorText={formData?.passwordError}
                  password={formData?.password}
                  setPassword={(value) => {
                    let password = value;
                    setFormData({ ...formData, password, passwordError: "" });
                  }}
                  isDoubleLineErr={true}
                />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.confirmPassword")}
                  mandatoryAsterisk="*"
                />
                <InputPassword
                  id="institute-confirm-password"
                  className="fill"
                  size="small"
                  error={formData?.confirmPasswordError ? true : false}
                  errorText={formData?.confirmPasswordError}
                  password={formData?.confirmPassword}
                  setPassword={(value) => {
                    let confirmPassword = value;
                    setFormData({
                      ...formData,
                      confirmPassword,
                      confirmPasswordError: "",
                    });
                  }}
                  isDoubleLineErr={true}
                />
              </div>
              <div className="mb-[9px]">
                <CheckBox
                  id="AgreeToDataProcessingAgreement"
                  labelClassName="text-black-900 text-xs"
                  // label={t("common.iUnderstand&spotifyTermsAndConditions")}
                  label={
                    <>
                      <Text className="text-xs">
                        I understand & agree to{" "}
                        <span
                          className="underline text-light_blue-900 font-semibold cursor-pointer"
                          onClick={() => {
                            window.open(
                              "/spotify-term-and-conditions",
                              "_blank"
                            );
                          }}
                        >
                          {t("common.spotifyTermsAndConditions")}.
                        </span>
                      </Text>
                    </>
                  }
                  checked={formData?.conditionsChecked}
                  onChange={(value) => {
                    let conditionsChecked = value;
                    setFormData({
                      ...formData,
                      conditionsChecked,
                    });
                  }}
                />
              </div>
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full mb-[20px]"
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
                disabled={disabledBtn}
                onClick={handleSubmit}
              >
                {t("common.signUp")}
              </Button>
              <div className="text-center w-full">
                <Text>
                  {t("common.haveAnAccount")}{" "}
                  <span
                    className="!text-light_blue-900 text-center underline font-semibold text-[14px] cursor-pointer"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    {t("common.login")}
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <CommonImage />
      </div>
    </>
  );
};
export default SignUp;
