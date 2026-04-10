interface Props {
  params: {
    id: string;
  };
}

const ArticleDetailPage = ({ params }: Props) => {
  return (
    <div>
      <h1>Article {params.id}</h1>
      {/* Article detail content goes here */}
    </div>
  );
};

export default ArticleDetailPage;
