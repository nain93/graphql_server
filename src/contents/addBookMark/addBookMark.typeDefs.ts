import { gql } from "apollo-server-core";

export default gql`
  type bookMarkResult {
    ok: Boolean!
    id: Int!
    error: String
  }
  type Mutation {
    addBookMark(id: Int!): bookMarkResult
  }
`;
