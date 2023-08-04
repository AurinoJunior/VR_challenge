import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../../context/user";
import { IResponseUserData } from "../../@types/User";
import { parseUserDataResponse } from "../../utils/parseUserDataResponse";
import usersApi from "../../services/usersApi";

import { Button, Title } from "../../components";
import { PersonInfos } from "./partials/PersonInfos";

import "./Profile.styles.scss";

export function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state, dispatch } = useContext(UserContext);

  function handleExitProfile() {
    navigate("/");
  }

  useEffect(() => {
    async function getUserData() {
      const { data } = await usersApi.get<IResponseUserData>(`/${id}`);
      const parsedUserData = parseUserDataResponse(data);
      dispatch(parsedUserData);
    }

    getUserData();
  }, [dispatch, id]);

  const fullName = `${state.personInfos.firstName} ${state.personInfos.lastName}`;
  return (
    <div className="profile">
      <div className="profile__exit-btn">
        <Button buttonType="button" onClick={handleExitProfile}>
          Sair
        </Button>
      </div>

      <div className="profile__container-img">
        <img src={state.personInfos.image} alt="foto de perfil" width={240} />
      </div>

      <Title
        title={fullName}
        description={`@${state.personInfos.username}`}
        darkVariation
      />

      <PersonInfos />
    </div>
  );
}
