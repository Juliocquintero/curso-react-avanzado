import { useContext } from 'react'
import { authContext } from "../hoc/AuthContext/AuthContext";

const useAuth = () => {
  return useContext(authContext);
}

export default useAuth