import Comment from "./Comment";

const CommentList = ({ commentsList }) => {
  console.log("commentlist", commentsList);
  console.log("nes", commentsList?.commentsList);
  return (
    <div className="flex flex-col gap-3">
      {commentsList?.map((comment) => (
        <>
          <Comment comment={comment} />
          <div className="ml-5">
            <CommentList commentsList={comment?.commentsList} />
          </div>
        </>
      ))}
    </div>
  );
};

export default CommentList;
