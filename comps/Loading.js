import Head from 'next/head'

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <Head>
        <title>Loading...</title>
      </Head>
      <div className="loader"></div>
      Loading...
    </div>
  );
};

export default Loading;
