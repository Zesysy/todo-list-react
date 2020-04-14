import { useEffect } from "react";
import { useDispatch } from "react-redux";

import * as actions from "../../actions";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.signOut());
  }, [dispatch]);

  return null;
};

export default Logout;
