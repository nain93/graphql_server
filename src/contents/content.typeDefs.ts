import { gql } from "apollo-server-core";

export default gql`
  type Photo {
    id: Int!
    contentId: Int!
    photoUrl: String!
    photoName: String!
    winCount: Int!
    createdAt: String!
    updatedAt: String!
  }
  type BookMark {
    id: Int!
    userId: Int!
    contentId: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Comment {
    id: Int!
    password: String!
    desc: String!
    contentId: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Answer {
    id: Int!
    body: String
    winCount: Int!
    questionId: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Question {
    id: Int!
    questionBody: String
    contentId: Int!
    answer: [Answer]
    winCount: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Content {
    id: Int
    user: User
    views: Int
    question: [Question]
    bookMarks: [BookMark]
    comments: [Comment]
    photos: [Photo]
    title: String
    desc: String
    type: String
    userId: Int
    createdAt: String
    updatedAt: String
  }
`;
