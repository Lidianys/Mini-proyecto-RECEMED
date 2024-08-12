import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPagePassword() {
  const [password, setPassword] = useState("");
  const [rut, setRut] = useState(""); 
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.rut) {
      setRut(location.state.rut);
    } else {
      alert("RUT no disponible. Por favor, regrese al inicio.");
      navigate("/");
    }
  }, [location.state, navigate]);

  const handleLogin = async () => {
    if (!rut || !password) {
      alert("Por favor, ingrese el RUT y la contraseña.");
      return;
    }

    try {
      const response = await fetch(
        "http://rec-staging.recemed.cl/api/users/log_in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              rut,
              password,
            },
          }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.errors?.detail || "Error en la autenticación"
        );
      }

      const data = await response.json();


      localStorage.setItem("authToken", data.data.token); 

      if (data.data && data.data.profiles && data.data.profiles.length > 0) {
        const firstProfile = data.data.profiles[0];
        const fullName = `${firstProfile.first_name || ""} ${
          firstProfile.last_name || ""
        }`.trim();

        localStorage.setItem("userName", fullName || "Usuario");
      } else {
        localStorage.setItem("userName", "Usuario");
      }

      navigate("/dashboard"); 
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la autenticación. Verifica el RUT y la contraseña.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">
          Ingrese su Contraseña
        </h1>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded-full placeholder-center focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handleLogin}
          className="bg-rm-blue-100 hover:bg-rm-blue-200 text-white font-bold py-3 px-4 rounded-full w-full"
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default LoginPagePassword;