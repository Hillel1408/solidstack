"use client";

import { useState } from "react";
import {
  Form,
  WeDoIt,
  WhatWeDo,
  Team,
  Intro,
  Partners,
  WhyWeDoIt,
  Loader,
  Footer,
} from "@/components";

export default function Home() {
  const [isVisbleContent, setIsVisibleContent] = useState(false);

  return (
    <main className="">
      {isVisbleContent ? (
        <>
          <Intro />
          <Partners />
          <WhatWeDo />
          <WeDoIt />
          <Team />
          <WhyWeDoIt />
          <Form />
          <Footer />
        </>
      ) : (
        <Loader onChangeVisible={(v) => setIsVisibleContent(v)} />
      )}
    </main>
  );
}
