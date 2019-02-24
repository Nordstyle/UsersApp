import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #24292e;
`;

const PostCol = styled.th`
  width: 70%;
`;

const AuthorCol = styled.th`
  width: 30%;
`;

export const List = ({ children }) => {
  if (!children) {
    return null
  }
  return (
    <Table>
      <thead>
        <tr>
          <PostCol>Post Name</PostCol>
          <AuthorCol>Author</AuthorCol>
        </tr>
      </thead>
      <tbody>
        { children  }
      </tbody>
    </Table>
  );
};
