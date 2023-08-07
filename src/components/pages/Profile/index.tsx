import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IUserContextAtributes } from "../../../@types/User";
import { parseUserDataResponse } from "../../../utils/parseUserDataResponse";
import { userInitialValue } from "../../../utils/userInitialValue";
import { api } from "../../../services/api";

import { Button, List, Title } from "../..";
import { notify } from "../../atoms/Toast";

import "./Profile.styles.scss";

export function Profile() {
  const [userData, setUserData] =
    useState<IUserContextAtributes>(userInitialValue);
  const navigate = useNavigate();
  const { id } = useParams();

  function handleExitProfile() {
    localStorage.removeItem("vr-case@user");
    navigate("/");
  }

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.users(Number(id));
        const parsedUserData = parseUserDataResponse(response);
        setUserData(parsedUserData);
      } catch (error) {
        if (error instanceof Error)
          notify(
            "Ops, houve um problema inesperado, tente recarregar a pagina."
          );
      }
    }

    getUserData();
  }, [id]);

  const fullName = `${userData.personInfos.firstName} ${userData.personInfos.lastName}`;
  return (
    <div className="profile">
      <div className="profile__exit-btn">
        <Button buttonType="button" onClick={handleExitProfile}>
          Sair
        </Button>
      </div>

      <div className="profile__container-img">
        <img
          src={userData.personInfos.image}
          alt="foto de perfil"
          width={240}
        />
      </div>

      <Title
        title={fullName}
        description={`@${userData.personInfos.username}`}
        darkVariation
      />

      <div className="profile__content">
        <List title="Informações pessoais" data={userData.personInfos} />
        <List title="Cabelo" data={userData.hair} />
        <List title="Endereço" data={userData.address} />
        <List title="Banco" data={userData.bank} />
        <List title="Empresa" data={userData.company} />
      </div>
    </div>
  );
}
