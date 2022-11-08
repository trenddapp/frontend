import GraphemeSplitter from 'grapheme-splitter'

// unicodeLength returns the length of the given string.
export const unicodeLength = (unicode: string): number => {
  return new GraphemeSplitter().splitGraphemes(unicode).length
}
