import jsonPlaceholder from "../apis/jsonPlaceholder";

//Below, we're returning a function inside the ACTION CREATOR. A Function or XXX are the only 2 things that an ACTION CREATOR can return, when using REACT-THUNK.
//Also, we're able to use async/await because we're using REACT THUNK. Otherwise, this an async/await synctax would give an error on a usual ACTION CREATOR.
export const fetchPosts = () => {
  // Below, the function can have 2 params, (dispatch, getState) but we don't need the getState in this scenario.
  return async function (dispatch) {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
