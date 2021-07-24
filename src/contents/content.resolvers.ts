import client from "../client";

export default {
  Content: {
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
      });
    },
    photos: ({ id }) => {
      return client.photo.findMany({
        where: { contentId: id },
      });
    },
    question: ({ id }) => {
      return client.question.findMany({
        where: { contentId: id },
      });
    },
    comments: ({ id }) => {
      return client.comment.findMany({
        where: { contentId: id },
      });
    },
    bookMarks: ({ id }) => {
      return client.bookMark.findMany({
        where: { contentId: id },
      });
    },
  },
  Question: {
    answer: ({ id }) => {
      return client.answer.findMany({
        where: { questionId: id },
      });
    },
  },
};
