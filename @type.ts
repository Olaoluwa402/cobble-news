import React from "react";

type Bool = true | false;
export interface newsItemProps {
  id: number;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface contextProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  news: newsItemProps[];
  getNews: (newText: string) => void;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  loading: Bool;
}
