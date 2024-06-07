import { AuthContext } from "@/context/auth-provider";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};