import Head from "next/head";
import React from "react";
import Container from "../components/container/container";
import { suffix } from "../components/data/data";
import Login from "../components/login"

const LoginPage = () => {

  return (
    <div>
      <Head>
        <title>Login {suffix}</title>
        <meta property="og:title" content="Login" key="title" />
      </Head>

      <Container>
        <div className="flex justify-center">
          <div className="text-center mx-2 px-2 md:px-48 py-8 border-solid border-[#ab9863ff] border-2 bg-[#e3ca88ff] shadow-2xl">
            <h1 className="text-3xl md:text-3xl mb-10">Mein Konto</h1>
            <Login site={true} />
          </div>
        </div>

      </Container>
    </div>
  );
};

export default LoginPage;