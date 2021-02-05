import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideBar = (props: RouteComponentProps, handleTest: string) => {
  //   const dispatch = useDispatch();
  //   const posts = useSelector((state) => state.postsReducer.posts);
  //   const handlePosts = useCallback(() => dispatch(getAsyncAction.request()), [
  //     dispatch,
  //   ]);

  return (
    <div id="sideBar">
      <div>클릭</div>
      {/* <div className="sideBarBrand d-flex justify-content-center align-items-center">
        <img src="http://placehold.it/180x35" />
      </div>

      <div id="accordion">
        {sideBar.map((value, index) => {
          return (
            <div className="card" key={value.listsId}>
              <div className="card-header">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link d-flex align-items-center"
                    data-toggle="collapse"
                    data-target={`#acc${value.listsId}`}
                    aria-expanded={`${index === 0 ? "true" : "false"}`}
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
                          to={`${match.url}/${value.listsUrl}/${value2.url}`}
                          activeClassName="selected"
                          key={index2}
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
      </div> */}
    </div>
  );
};

export default SideBar;
