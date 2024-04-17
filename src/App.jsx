import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig } from "./store/homeSlice";
//import useSelector and useDispatch and slices

function App() {
  const { url } = useSelector((state) => state.home); //retrive required state from states in slice
  // console.log(url);
  const dispatch = useDispatch();
  useEffect(() => {
    apiTesting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfig(res));
    });
  };
  return (
    <>
      <h1>
        FlickFinder
        {url?.total_pages}
      </h1>
    </>
  );
}

export default App;
