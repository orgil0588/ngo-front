import React from "react";
import NewsDetail from "../Components/NewsDetail";
function NewsDetailPage() {
  return (
    <div>
      <NewsDetail
        image={image}
        category={category}
        creadtedAt={createdAt}
        content={content}
      />
    </div>
  );
}

export default NewsDetailPage;
