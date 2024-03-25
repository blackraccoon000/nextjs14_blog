import {getPostData} from "@/lib/posts";
import CountUp from "./CountUp.client";
import MyForm from "./MyForm.server";

type Props = {
  params: {
    id: string;
  };
};

const PostsPage = async ({params}: Props) => {
  const postData = await getPostData(params.id);

  if (!postData) {
    return <div>データが存在しません</div>;
  }

  return (
    <article>
      <h1>{postData.title}</h1>
      <div>
        <p>{postData.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: postData.contentHtml,
        }}
      />
      <CountUp />
      <MyForm />
    </article>
  );
};

export default PostsPage;
