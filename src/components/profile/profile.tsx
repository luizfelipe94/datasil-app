import { Avatar, Text } from "@chakra-ui/react";
import { Logout, UserInfo } from "./styles";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";


export const Profile = () => {

  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const signoutHandle = () => {
    signout();
    navigate("/login");
  };

  return (
    <div>
      <UserInfo>
        <Avatar size="md" name="Luiz Silva" src="https://avatars.githubusercontent.com/u/19862057?v=4" />
        <div>
          <Text fontSize="md">{user?.name || ""}</Text>
        </div>
      </UserInfo>
      <Logout onClick={() => signoutHandle()}>
        <CiLogout size={30}/>
      </Logout>
    </div>
  );
};