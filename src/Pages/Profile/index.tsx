import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../../context/user";
import usersApi from "../../services/usersApi";
import { Button } from "../../components";

import "./Profile.styles.scss";

export function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { dispatch } = useContext(UserContext);

  function handleExitProfile() {
    navigate("/");
  }

  useEffect(() => {
    async function getUserData() {
      const { data } = await usersApi.get(`/${id}`);
      dispatch({ ...data });
    }

    getUserData();
  }, [dispatch, id]);

  return (
    <div className="profile">
      <div className="profile__exit-btn">
        <Button buttonType="button" onClick={handleExitProfile}>
          Sair
        </Button>
      </div>
    </div>
  );
}
