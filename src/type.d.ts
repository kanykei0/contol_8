export interface QuoteMutation {
  category: string;
  author: string;
  text: string;
}

export interface FullQuote {
  id: string;
  category: string;
  author: string;
  text: string;
}

export interface QuotesListType {
  [quoteId: string]: FullQuote;
}
