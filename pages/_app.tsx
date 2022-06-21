import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import "../styles/Home.scss";
import "../styles/Post.scss";
import "../styles/Header.scss";
import "../styles/createpost.scss";
export const client = new ApolloClient({
  uri: "https://blogappsimple.herokuapp.com/",
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
