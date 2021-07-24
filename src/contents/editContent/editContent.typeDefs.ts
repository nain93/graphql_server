import { gql } from "apollo-server-core";

export default gql`
  type EditContentResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    editContent(id: Int!, title: String, desc: String): EditContentResult!
  }
`;
