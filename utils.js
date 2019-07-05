export const word = width => ({
  block: 'text',
  elem: 'word',
  elemMods: { width },
});

export const words = (...wordWidths) => wordWidths.map(width => word(width.trim()));
export const wordsFromString = wordString => words(...wordString.split('+'));