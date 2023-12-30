import Comment from "./Comment";

const CommentList = ({ commentsList }) => {
  // console.log("commentlist", commentsList);

  return (
    <div className="flex flex-col gap-3">
      {commentsList?.map((comment, i) => (
        <div key={i}>
          <Comment comment={comment} />
          <div className="ml-5">
            <CommentList commentsList={comment?.commentsList} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
