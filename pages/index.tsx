import type { GetServerSideProps, NextPage } from "next";
import { useQuery } from "@apollo/client";
import { getAllPosts } from "../graphql/queries";
import Post from "../components/Post";
import Header from "../components/Header";
import { client } from "./_app";
import Link from "next/link";

interface IAuthor {
  id: string;
  name: string;
  age: number;
  posts: IPost[];
}
interface IPost {
  id: string;
  name: string;
  content: string;
  genre: string;
  author: IAuthor;
}

const Home: NextPage = ({ data }: any) => {
  // const { data, loading, error } = useQuery(getAllPosts);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="Home">
      <Header />
      <div className="Home__container">
        {data?.posts.map((post: IPost) => (
          <Link href={post.id}>
            <a>
              <Post key={post.id} post={post} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

//getserversideprops fetch graphQL from server
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: getAllPosts,
    //refresh cache every time
    fetchPolicy: "no-cache",
  });
  return { props: { data } };
};
