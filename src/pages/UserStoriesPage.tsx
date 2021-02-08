import React, { useState, useRef, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import SideBar from "../components/sidebar";

const UserStoriesPage = (props: RouteComponentProps) => {
  const left = 300;
  const [collapse, setCollase] = useState<boolean>(false);
  const userStoriesRef = useRef<HTMLDivElement>();
  const handleTest = (e: React.MouseEvent<HTMLElement>) => {
    console.log("userStories:", props.match.url);
  };

  useEffect(() => {
    const { current } = userStoriesRef;

    if (!current) {
      return;
    } else {
      if (collapse) {
        current.style.marginLeft = "0";
      } else {
        current.style.marginLeft = `${left}px`;
      }
    }
  }, [collapse]);

  return (
    <>
      <SideBar {...props} collapse={collapse} handleTest={handleTest} />
      <div>UserStoriesPage</div>;
    </>
  );
};

export default UserStoriesPage;
