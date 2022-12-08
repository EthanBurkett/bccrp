import React from "react";
import { useRouter } from "next/router";

type Props = {};

const Application = (props: Props) => {
  const router = useRouter();
  return <div>{router.query.id}</div>;
};

export default Application;
