export const getTextLengthOfTextEditor = (text) => {
    // Remove HTML tags and newline characters and count remaining characters
    return text.replace(/<[^>]*>/g, "").replace(/\n/g, "").length;
  };