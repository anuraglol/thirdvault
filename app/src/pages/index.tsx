import {MainLayout} from "@/layouts";
import { Hero } from "@/components";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
};

export default Home;
