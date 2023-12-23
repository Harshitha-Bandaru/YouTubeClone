import CommentList from "./CommentList";

const commentsList = [
  {
    name: "Harshi",
    time: "7 days ago",
    commentText: "lorem ipsum lorem ipsum",
    commentsList: [
      {
        name: "Harshi",
        time: "7 days ago",
        commentText: "lorem ipsum lorem ipsum",
        commentsList: [
          {
            name: "Harshi",
            time: "7 days ago",
            commentText: "lorem ipsum lorem ipsum",
            commentsList: [
              {
                name: "Harshi",
                time: "7 days ago",
                commentText: "lorem ipsum lorem ipsum",
                commentsList: [
                  {
                    name: "Harshi",
                    time: "7 days ago",
                    commentText: "lorem ipsum lorem ipsum",
                  },
                ],
              },
            ],
          },
          {
            name: "Sowmy",
            time: "2 days ago",
            commentText: "lorem ipsum lorem ipsum",
            commentsList: [
              {
                name: "Harshi",
                time: "7 days ago",
                commentText: "lorem ipsum lorem ipsum",
              },
            ],
          },
        ],
      },
      {
        name: "Sowmy",
        time: "2 days ago",
        commentText: "lorem ipsum lorem ipsum",
      },
    ],
  },
  {
    name: "Harshi",
    time: "7 days ago",
    commentText: "lorem ipsum lorem ipsum",
  },
  {
    name: "Harshi",
    time: "7 days ago",
    commentText: "lorem ipsum lorem ipsum",
  },
  {
    name: "Harshi",
    time: "7 days ago",
    commentText: "lorem ipsum lorem ipsum",
  },
  {
    name: "Harshi",
    time: "7 days ago",
    commentText: "lorem ipsum lorem ipsum",
  },
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-4">{commentsList.length} Comments</h1>
      <CommentList commentsList={commentsList} />
    </div>
  );
};

export default CommentsContainer;
