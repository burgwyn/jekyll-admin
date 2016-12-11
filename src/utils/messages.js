// containers/views/DocumentEdit

export const MSG_COULD_NOT_FIND_DOCUMENT = `Could not find the document.`;

export const MSG_DELETE_CONFIRMATION = 'Are you sure that you want to delete "${filename}" ?';

export const MSG_UNSAVED_CHANGES = 'You have unsaved changes on this page. Are you sure you want to leave?';

// helpers

export function formatMessage(message, ...tokens) {
  return message.reduce((accumulation, part, i) => {
    return accumulation + tokens[i - 1] + part;
  });
}
