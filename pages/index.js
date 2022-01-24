import Head from "next/head";

export default function Home(props) {
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

      <h1>Title 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta,
        sequi tempora numquam quasi provident rerum itaque asperiores, excepturi
        consequatur illo quae animi iure est quas nihil recusandae fuga iste.
      </p>
    </div>
  );
}
