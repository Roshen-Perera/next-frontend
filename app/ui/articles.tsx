"use client";

import { use } from "react";
import Image from "next/image";

export default function Articles({ articles }: { articles: Promise<any> }) {
  const allArticles = use(articles);
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

}
