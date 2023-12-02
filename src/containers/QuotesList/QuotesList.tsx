import React, { useEffect, useState } from "react";
import axiosApi from "../../axiosApi";
import { useParams } from "react-router-dom";
import { QuotesListType } from "../../type";
import Quotes from "../../components/Quotes/Quoutes";
import { Spinner } from "react-bootstrap";

const QuotesList: React.FC = () => {
  const [quotes, setQuotes] = useState<QuotesListType | null>(null);
  const [loading, setLoading] = useState(false);

  const { category } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      if (category) {
        const response = await axiosApi.get(
          `quotes.json?orderBy="category"&equalTo="${category}"`
        );
        setQuotes(response.data);
        return response.data;
      } else {
        const response = await axiosApi.get("quotes.json");
        setQuotes(response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, [category]);

  const onDelete = async (quoteId: string) => {
    await axiosApi.delete("quotes/" + quoteId + ".json");
    await fetchData();
  };

  return (
    <>
      {loading ? <Spinner /> : <Quotes quotes={quotes} onDelete={onDelete} />}
    </>
  );
};

export default QuotesList;
