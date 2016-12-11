// helpers

export function formatMessage(message, ...tokens) {
  return message.reduce((accumulation, part, i) => {
    return accumulation + tokens[i - 1] + part;
  });
}
