import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function useAuthorization() {
  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      alert("Faça Login");
      history.replace("/login?error=nologin");
    }
  }, [history]);
}

export default useAuthorization;
