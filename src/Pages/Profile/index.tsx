import { useContext, useEffect } from "react";
import usersApi from "../../services/usersApi";
import { UserContext } from "../../context/user";
import { useParams } from "react-router-dom";

export function Profile() {
  const { id } = useParams();
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    async function getUserData() {
      const { data } = await usersApi.get(`/${id}`);
      dispatch({ ...data });
    }

    getUserData();
  }, [dispatch, id]);

  return <>Todas as infos</>;
}
