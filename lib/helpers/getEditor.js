export default function getEditor(editor) {
  //   // EditorState Instantiations
  const {
    getEditorRef,
    getEditorState,
    getPlugins,
    getProps,
    getReadOnly,
    setEditorState,
    setReadOnly,
  } = editor;

  const editorRef = getEditorRef();
  const editorState = getEditorState();
  const plugins = getPlugins();
  const props = getProps();
  const isReadOnly = getReadOnly();

  return {
    editorRef,
    editorState,
    isReadOnly,
    plugins,
    props,
    setEditorState,
    setReadOnly,
  };
}
