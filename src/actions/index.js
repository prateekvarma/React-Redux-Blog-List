import jsonPlaceholder from "../apis/jsonPlaceholder";

//FOLLOWING IS A BAD EXAMPLE OF MAKING AN REQUEST FROM AN EXTERNAL API - FROM AN ACTION CREATOR
//THE NEXT COMMIT WILL FIX THIS.
export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts')

  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
