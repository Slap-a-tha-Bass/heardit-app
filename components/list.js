import { isArray } from "../utils";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 22.5%;
  padding: 2%;
  border: 1px dashed rgb(255, 115, 0);
  margin: 1.25%;
`;

const List = ({ posts }) => {
  return (
    <Container>
      {isArray(posts) ? (
        posts.map((post, index) => {
          const postData = post.data;
          return (
            <Card key={`${postData.id}-${index}`}>
              <h5>{postData.title}</h5>
            </Card>
          );
        })
      ) : (
        <h4>No posts found :(</h4>
      )}
    </Container>
  );
};

export default List;
