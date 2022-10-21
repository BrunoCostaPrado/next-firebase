import type { NextPage } from "next";
import { Hello } from "./api/hello";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </>
  );
};

export default Home;
