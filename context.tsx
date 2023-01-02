import React, { useState, FunctionComponent, ReactNode } from "react";
import axios from "axios";
import { sampleNews } from "./sampleNews";
import { newsItemProps, contextProps } from "./@type";

const GlobalContext = React.createContext<contextProps | null>(null);

interface Props {
  children: ReactNode;
}

const Provider: FunctionComponent<Props> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [news, setNews] = useState<newsItemProps[]>([]);
  const [keyword, setKeyword] = useState<string>("apple");
  const API_KEY = "43a32281832c4846b63647935650fcb8";

  // fetch news data by making api call
  const getNews = async (newText: string) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
    };

    // set keyword to state
    setKeyword(newText ? newText : "apple");

    try {
      //set loading to true
      setLoading(true);
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`,
        config
      );

      setLoading(false);

      const articles = data.articles.map((item: any, i: number) => {
        return {
          id: i + 1,
          author: item.author,
          title: item.title,
          description: item.description,
          url: item.url,
          urlToImage: item.urlToImage,
          publishedAt: item.publishedAt,
          content: item.content,
        };
      });

      setNews(articles);
    } catch (err) {
      setLoading(false);
      setNews(sampleNews);
      console.log(err, "news API fetch error");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        activeTab,
        setActiveTab,
        news,
        getNews,
        keyword,
        setKeyword,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
