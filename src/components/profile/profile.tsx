import { Avatar, Text } from "@chakra-ui/react";
import { Logout, UserInfo } from "./styles";
import { CiLogout } from "react-icons/ci";


export const Profile = () => {
  return (
    <div>
      <UserInfo>
        <Avatar size="md" name="Luiz Silva" src="https://avatars.githubusercontent.com/u/19862057?v=4" />
        <div>
          <Text fontSize="md">Luiz Silva</Text>
        </div>
      </UserInfo>
      <Logout>
        <CiLogout size={30}/>
      </Logout>
    </div>
  );
};