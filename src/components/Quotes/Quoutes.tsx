import React from "react";
import { QuotesListType } from "../../type";
import QuoteItem from "./QuoteItem";

interface Props {
  quotes: QuotesListType | null;
  onDelete: (quoteId: string) => void;
}

const Quotes: React.FC<Props> = ({ quotes, onDelete }) => {
  return (
    <>
      <div>
        {quotes ? (
          Object.keys(quotes).map((key) => (
            <QuoteItem
              key={key}
              id={key}
              author={quotes[key].author}
              category={quotes[key].category}
              text={quotes[key].text}
              onDelete={() => onDelete(key)}
            />
          ))
        ) : (
          <div className="mt-5 text-secondary">No Posts</div>
        )}
      </div>
    </>
  );
};

export default Quotes;
