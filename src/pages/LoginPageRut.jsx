import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPageRut() {
  const [rut, setRut] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (rut) {
      navigate("/login-password", { state: { rut } });
    } else {
      alert("Por favor, ingrese un RUT válido.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">
          Ingrese su RUT
        </h1>
        <input
          type="text"
          placeholder="Ingresa tu Rut"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4 rounded-full placeholder-center"
        />
        <button
          onClick={handleNext}
          className="bg-rm-blue-100 hover:bg-rm-blue-200 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default LoginPageRut;