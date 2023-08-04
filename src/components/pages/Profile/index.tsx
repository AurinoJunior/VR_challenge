import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../../../context/user";
import { IResponseUserData } from "../../../@types/User";
import { parseUserDataResponse } from "../../../utils/parseUserDataResponse";
import usersApi from "../../../services/usersApi";

import { Button, List, Title } from "../..";

import "./Profile.styles.scss";
import { notify } from "../../atoms/Toast";

export function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state, dispatch } = useContext(UserContext);

  function handleExitProfile() {
    navigate("/");
  }

  useEffect(() => {
    async function getUserData() {
      try {
        const { data } = await usersApi.get<IResponseUserData>(`/${id}`);
        const parsedUserData = parseUserDataResponse(data);
        dispatch(parsedUserData);
      } catch (error) {
        if (error instanceof Error)
          notify(
            "Ops, houve um problema inesperado, tente recarregar a pagina."
          );
      }
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

      <div className="profile__content">
        <List title="Informações pessoais" data={state.personInfos} />
        <List title="Cabelo" data={state.hair} />
        <List title="Endereço" data={state.address} />
        <List title="Banco" data={state.bank} />
        <List title="Empresa" data={state.company} />
      </div>
    </div>
  );
}
