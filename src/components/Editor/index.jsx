import React from "react";
import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const EditorComponent = ({ className, value, onChange, error, disabled }) => {
  const handleEditorDataChange = (event, editor) => {
    const data = editor.getData();
    onChange(data);
  };
  const editorConfig = {
    toolbar: [
      'heading', '|',
      'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'
      // , 'mediaEmbed'
    ],
    link: {
      addTargetToExternalLinks: true,
      decorators: [
        {
          mode: 'manual',
          label: 'Open in a new tab',
          attributes: {
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        }
      ]
    }
  };
  return (
    <div
      className={className}
    >
      <CKEditor
        className="h-[80px]"
        editor={ClassicEditor}
        config={editorConfig}
        data={value}
        onChange={handleEditorDataChange}
        disabled={disabled}
      />
      {error && (
        <span className="text-sm text-red-700 font-normal absolute left-0">
          {error}
        </span>
      )}
    </div>
  );
};
export default EditorComponent;
EditorComponent.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};






