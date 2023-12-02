import { useEffect, useState } from "react";
import { FullQuote } from "../../type";
import axiosApi from "../../axiosApi";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<FullQuote[]>([]);
  const quoteCategories = [
    { title: "Star Wars", id: "star-wars" },
    { title: "Famous People", id: "famous-people" },
    { title: "Saying", id: "saying" },
    { title: "Humour", id: "humour" },
    { title: "Motivational", id: "motivational" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosApi.get("quotes.json");
        setQuotes(response.data);
      } finally {
        setLoading(false);
      }
    };

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

  const page = quotes && (
    <div className="row">
      <div className="col-3">
        <ul className="list-unstyled">
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
      <div className="col"></div>
    </div>
  );

  return <div>{loading ? <Spinner animation="border" /> : page}</div>;
};

export default Home;
