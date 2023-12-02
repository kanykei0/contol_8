import { useEffect, useState } from "react";
import { QuotesListType } from "../../type";
import axiosApi from "../../axiosApi";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Quotes from "../../components/Quotes/Quoutes";
import quoteCategories from "../../components/QuoteCategories/QuoteCategories";
import QuotesList from "../QuotesList/QuotesList";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<QuotesListType>({});

  const params = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get("quotes.json");
      setQuotes(response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const uniqueCategories =
    quotes &&
    Object.values(quotes).reduce((acc, quote) => {
      if (!acc.includes(quote.category)) {
        acc.push(quote.category);
      }
      return acc;
    }, [] as string[]);

  const onDelete = async (quoteId: string) => {
    await axiosApi.delete("quotes/" + quoteId + ".json");
    await fetchData();
  };

  const page = quotes && (
    <div className="row">
      <div className="col-3">
        <ul className="list-unstyled">
          <li>
            <Link to="/" className="nav-link">
              All
            </Link>
          </li>
          {uniqueCategories.map((category) => {
            const categoryInfo = quoteCategories.find(
              (cat) => cat.id === category
            );
            return (
              <li key={category}>
                <Link to={`/quotes/${category}`} className="nav-link">
                  {categoryInfo?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col">
        {params ? (
          <QuotesList />
        ) : (
          <Quotes quotes={quotes} onDelete={onDelete} />
        )}
      </div>
    </div>
  );

  return <div>{loading ? <Spinner animation="border" /> : page}</div>;
};

export default Home;
