import { Img, Text } from "../../components";
import React from "react";
import { useTranslation } from "react-i18next";
const DataProcessingAgreement = () => {
  const { t } = useTranslation();
  return (
    <>
      <header className="fixed left-0 right-0 top-0 py-5 pl-[20px] pr-8 md:pl-12 md:pr-4 border-gray-200 border-b border-solid bg-white-A700 z-[9]">
        <Img
          src="images/Spotify_Full_Logo_RGB_Green.png"
          alt="Logo"
          className="w-[88px] object-cover"
        />
      </header>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-[950px] bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-gray-700 text-base">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Why do we use it?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>

            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Why do we use it?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>

          {/* <div className="text-gray-700 text-base">
 
            {htmlContent ? (
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            ) : null}
          </div> */}
        </div>
      </div>
    </>
  );
};
export default DataProcessingAgreement;
