import React, { useState, useRef, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import SideBar from "../components/sidebar";
import UserStoriesPage from "./UserStoriesPage";

const TEST_QUERY = gql`
  query {
    users {
      data {
        id
        name
        email
      }
    }
  }
`;

interface IAlbum {
  album: string;
  i: string;
  title: string;
  id: string;
  user: string;
  name: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface ISideBarRefProps {
  sideBarRef: HTMLDivElement;
}

interface IhandleTest {
  handleTest: () => void;
}
const MainPage = (props: RouteComponentProps) => {
  const { loading, error, data } = useQuery(TEST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  const left = 300;
  const [collapse, setCollase] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const MainPageRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => setCollase(!collapse);
  const handleTest = () => {
    console.log("handleTest");
  };
  // useEffect(() => {
  //   if (collapse) {
  //     sideBarRef.current.style.left = `-${left}px`;
  //     MainContainerRef.current.style.marginLeft = "0";
  //   } else {
  //     sideBarRef.current.style.left = "0";
  //     MainContainerRef.current.style.marginLeft = `${left}px`;
  //   }
  // }, [collapse]);

  const users = data.users.data;
  const { id, name, email } = users;
  console.log("users data:", users);
  return (
    <div id="mainPage">
      {/* 문제부분 */}
      {/* <SideBar {...props} handleTest={handleTest} /> */}
      메인페이지
      <div className="usersWrap" ref={MainPageRef}>
        {users.map((user: IUser, i: IAlbum) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
        {/* {albumData.map((album: IAlbum, i: IAlbum) => {
        return (
          <div key={album.id}>
            <p>{album.title}</p> */}
        {/* {console.log(album.user.name)} */}
        {/* {album.user.map((user: IAlbum, i: IAlbum) => {
              return (
                <div key={i}>
                  <p>{user.name}</p>
                </div>
              );
            })} */}
        {/* </div> */}
        {/* ); */}
        {/* })} */}
      </div>
    </div>
  );
};

export default MainPage;
