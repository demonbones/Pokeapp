import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  // para leer el valor de un contexto se nesecita el contexto y
  // hook useContext
  const { userName } = useContext(UserNameContext);
  const location = useLocation();

  if (userName) return <>{children}</>;
  else
    return (
      <Navigate to="/" state={{ from: location.pathname + location.search }} />
    );
};

export default ProtectedRouter;
