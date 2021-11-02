import Head from 'next/head';
import Nav from '../../components/NavBar'
import { useRouter } from 'next/router' 
import Layout from '../../components/Layout'

export const Feed = ({ articles, pageNumber }) => {
  const router = useRouter();
  return articles.length ? (
    <div className="">
      <Head>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + ' and more!'} />
      </Head>
    
      <Layout/> 
<div className=" grid py-20 justify-center items-center bg-[#C7D2FE] bg-opacity-25">
  <div className=" max-w-3xl" >
          {articles.map((article, index) => (
            <div key={index} className="p-10 w-50  ">
              <h1 className="cursor-pointer items-center font-semibold text-xl rounded-sm bg-red-500 py-3 px-6 text-white hover:text-yellow-400 ">" {article.title} " </h1>
              {!!article.urlToImage && <img 
              layout ='responsive'
              height={1080}
              width={1920}
              src={article.urlToImage} />}
                 <p className=" flex max-w-md border-b-2 items-center">{article.description}</p>
                 <p className="max-w-md  text-sm">DATE PUBLISHED : {article.publishedAt[0] + article.publishedAt[1]+article.publishedAt[2]+article.publishedAt[3]+article.publishedAt[4] +article.publishedAt[5]+article.publishedAt[6]+article.publishedAt[7]+article.publishedAt[8]+article.publishedAt[9]}</p>
                 <button  className=" font-medium text-white bg-blue-700 px-3 py-2 justify-center items-center hover:bg-blue-400"onClick={() => (window.location.href = article.url)}> Read More</button>
            </div>
          ))}
        </div>
</div>
        <div className={"flex flex-row justify-center items-center p-3 text-semibold  bg-[#C7D2FE] bg-opacity-25 "}>
          <div
            className=" bg-red-200 font-semibold cursor-pointer rounded-lg py-3 px-6 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-opacity-50"
            onClick={() => {
              if (pageNumber > 1) {
                router.push(`/News/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Back
          </div>

          <div className="bg-black rounded-sm text-white hover:text-red-600 py-3 px-6 font-extrabold ">#{pageNumber}</div>

          <div
            className="bg-red-200 font-semibold  p-2 cursor-pointer rounded-lg py-3 px-6 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 "
            onClick={() => {
              if (pageNumber < 5) {

                router.push(`/News/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next 
          </div>
        </div>
    </div>
  ) : (
    <div className=" bg-[#C7D2FE] bg-opacity-25 font-extrabold justify-center items-center h-screen">
    <Nav/>
      <div className=" ">
        <h1>Oops! That's all for today!!</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q="stockmarket"&sortBy=publishedAt&language=en&pageSize=9&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  ).then(res => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed
