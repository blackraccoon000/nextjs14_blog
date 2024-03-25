import {getAllPostIds} from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

const TopPage = async () => {
  const allPostIds = await getAllPostIds();
  console.log(allPostIds);

  return (
    <main>
      <div className="flex flex-col gap-3">
        {allPostIds.map((postId, i) => (
          <Link key={i} href={`/posts/${postId}`}>
            {postId}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default TopPage;
