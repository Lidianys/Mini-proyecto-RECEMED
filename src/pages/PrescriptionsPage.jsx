import { format } from "date-fns";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const PrescriptionsPage = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const authToken = localStorage.getItem("authToken");

  const fetchPrescriptions = async (pageNumber) => {
    const url = `http://rec-staging.recemed.cl/api/patients/prescriptions?page=${pageNumber}`;
    try {
      console.log("Token", authToken);
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, 
        },
      });
      console.log(response);
      if (!response.ok) {
        const errorText = await response.text(); 
        throw new Error(`Error ${response.status}: ${errorText}`);
      }
      const data = await response.json();
      console.log("Recetas", data);
      setPrescriptions(data.data);
      setTotalPages(data.meta.total_pages);
      setLoading(false);
      setError(null); 
    } catch (error) {
      console.error("Error fetching prescriptions:", error);
      setError(
        "No se pudieron cargar las recetas. Por favor, intente más tarde."
      ); 
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchPrescriptions(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case "Receta Simple":
        return "bg-blue-200"; // Color para Receta Simple
      case "Retenida":
        return "bg-green-200"; // Color para Receta Retenida
      default:
        return "bg-gray-200"; // Color por defecto
    }
  };

  return (
    <div className="p-4">
      <Header />
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p> 
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prescriptions.map((prescription) => (
              <div
                key={prescription.id}
                className={`p-4 rounded-lg ${getBackgroundColor(
                  prescription.type
                )} flex flex-col h-80`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex justify-between items-center border-b-2 border-blue-500 pb-2 mb-2">
                      <span className="text-lg font-semibold">
                        Folio: {prescription.folio}
                      </span>
                      <span className="text-lg font-semibold text-blue-500">
                        Receta de medicamentos
                      </span>
                    </div>
                    <p className="mb-4">
                      Fecha de emisión:{" "}
                      {format(new Date(prescription.inserted_at), "dd/MM/yyyy")}
                    </p>
                    <h2 className="text-xl font-semibold text-blue-600 mb-2">
                      DR: {prescription.doctor.first_name}{" "}
                      {prescription.doctor.last_name}
                    </h2>
                    <p className="mb-4">{prescription.doctor.speciality}</p>
                    <p className="mb-4">Código: {prescription.code}</p>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg w-40">
                      Ver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={handlePreviousPage}
              disabled={page <= 1}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Anterior
            </button>
            <button
              onClick={handleNextPage}
              disabled={page >= totalPages}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PrescriptionsPage;