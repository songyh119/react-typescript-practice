import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  ButtonHTMLAttributes,
} from "react";
import {
  match,
  Route,
  RouteComponentProps,
  RouterChildContext,
  withRouter,
} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { sideBar } from "../../utils/sideBar";
import "./index.css";

interface IParams extends RouteComponentProps {
  collapse: boolean;
  handleTest: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const SideBar = ({ match, collapse, handleTest }: IParams) => {
  const left = 300;
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = sideBarRef;

    if (!current) {
      return;
    } else {
      if (collapse) {
        current.style.left = `-${left}px`;
      } else {
        current.style.left = "0";
      }
    }
  }, [collapse]);

  console.log("side bar props:", match.url);

  return (
    <div id="sideBar" ref={sideBarRef}>
      <div>sideBar</div>
      <div onClick={handleTest}>test2 Click</div>
      <NavLink to={`/`}>main</NavLink>
      <NavLink to={`/user-stories`}>user-stories</NavLink>
      <div className="sideBarBrand d-flex justify-content-center align-items-center">
        <img src="http://placehold.it/180x35" />
      </div>

      <div id="accordion">
        {sideBar.map((value, index) => {
          return (
            <div className="card" key={value.listsId}>
              <div className="card-header">
                <h5 className="mb-0">
                  <button
                    className=""
                    data-toggle="collapse"
                    data-target={`#acc${value.listsId}`}
                    // aria-expanded={`${index === 0 ? "true" : "false"}`}
                  >
                    <i className={`listsIcon ${value.listsIcon}`}></i>
                    {value.listsTitle}
                    <i className="fas fa-angle-down arrow"></i>
                  </button>
                </h5>
              </div>

              <div
                id={`acc` + value.listsId}
                className={`collapse ${index === 0 && "show"}`}
                data-parent="#accordion"
              >
                <div className="card-body">
                  <ul>
                    {value.list.map((value2, index2) => {
                      return (
                        <NavLink
                          // to={`${match.url}/${value.listsUrl}/${value2.url}`}
                          to={`${value2.url}`}
                          activeClassName="selected"
                          key={index2}
                          onClick={() =>
                            console.log(
                              `match.url: ${match.url} value.listsUrl: ${value.listsUrl} value2.url ${value2.url}`
                            )
                          }
                        >
                          <li>{value2.title}</li>
                        </NavLink>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
