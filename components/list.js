import React from "react";
import { isArray } from "../utils";
import styled from "styled-components";

const CenterDiv = styled.div`
  width: 50%;
  left: 50%;
`;

const List = (posts) => {
  if (!isArray(posts)) {
    return (
      <div>
        <span>No posts found :(</span>
      </div>
    );
  }
  return <CenterDiv>
      {
          posts.map((post, index) => (
              <h1>{post.data.children?.data.author_fullname}</h1>
          ))
      }
  </CenterDiv>;
};

export default List;
