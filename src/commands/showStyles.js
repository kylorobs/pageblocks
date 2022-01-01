/* eslint-disable no-shadow */
export function showStyles(editor) {
  editor.Commands.add('show-styles', {
    getRowEl(editor) {
      return editor.getContainer().closest('.editor-row');
    },
    getStyleEl(row) {
      return row.querySelector('.styles-container');
    },

    run(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = '';
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = 'none';
    },
  });
}
