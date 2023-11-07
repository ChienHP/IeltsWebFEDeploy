import { Editor } from "../../../node_modules/@tinymce/tinymce-react/lib/cjs/main/ts/index";

export const EditorWrap = ({value, onChange}) => {
  return (
    <Editor
      apiKey="3ybenkspg56q99vgv88170npov83hsmybghawpra6srms960"
      value={value}
      onEditorChange={(value, editor) => {
        onChange(value);
      }}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help | table",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};
