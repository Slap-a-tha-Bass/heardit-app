import Head from "next/head";
import { useState, useEffect } from "react";
import List from "../components/list";
import styled from "styled-components";

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home(props) {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const res = await fetch("/api/heardit");
      const hearditResponse = await res.json();
      setPosts(hearditResponse.data.children);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Heardit-App</title>
        <meta name="description" content="A place to hear everything" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <CenterDiv>
        <h1>Posts</h1>
      </CenterDiv>
      {<List posts={posts} />}
    </div>
  );
}
