import { getPostById } from "../graphql/queries";
import { client } from "./_app";
import Header from "../components/Header";
const Info = ({ data }: any) => {
  return (
    <div className="Home">
      <Header />
      <div className="SlugInfo">
        <div className="Slug">
          <div className="Slug__top">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6O7O-oUgn2kzDzliJHB13aNxCRev1GQUPA&usqp=CAU"
              alt=""
              className="Slug__avatar"
            />
            <div className="Slug__info">
              <span className="Slug__name">{data?.post?.name}</span>
              <span className="Slug__genre">{data?.post?.genre}</span>
            </div>
          </div>
          <div className="Slug__bottom">
            <p className="text">{data?.post?.content}</p>
          </div>
          <div className="Author_info">
            <span className="Author__info__text">
              Name of Author:{data?.post?.author?.name}
            </span>
            <span className="Author__info__text">
              Age of Author:{data?.post?.author?.age}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const { data } = await client.query({
    query: getPostById,
    variables: {
      postId: slug,
    },
  });
  return {
    props: {
      data,
    },
  };
}
