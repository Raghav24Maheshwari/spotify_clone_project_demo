export const getTextLengthOfTextEditor = (text) => {
    // Remove HTML tags and newline characters and count remaining characters
    return text.replace(/<[^>]*>/g, "").replace(/\n/g, "").length;
  };
  export const capitalizeFirstLetter = (word) => {
    if (!word || typeof word !== "string") {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };