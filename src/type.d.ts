export interface FullQuote {
  category: string;
  author: string;
  text: string;
}

export interface QuotesList {
  [category: string]: FullQuote;
}
