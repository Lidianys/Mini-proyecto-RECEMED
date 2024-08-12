import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import LoginPageRut from "./LoginPageRut";

// Mock para useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("LoginPageRut Component", () => {
  test("renders input field and button", () => {
    render(
      <MemoryRouter>
        <LoginPageRut />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText(/Ingresa tu Rut/i);
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByText(/Siguiente/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("navigates to /login-password with RUT on button click", () => {
    render(
      <MemoryRouter>
        <LoginPageRut />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText(/Ingresa tu Rut/i);
    fireEvent.change(inputElement, { target: { value: "11111111-1" } });
    expect(inputElement.value).toBe("11111111-1"); // Verifica el valor del input

    const buttonElement = screen.getByText(/Siguiente/i);
    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledWith("/login-password", {
      state: { rut: "11111111-1" },
    });
  });

  test("shows alert if RUT is empty on button click", () => {
    // Mock para alert
    window.alert = jest.fn();

    render(
      <MemoryRouter>
        <LoginPageRut />
      </MemoryRouter>
    );

    const buttonElement = screen.getByText(/Siguiente/i);
    fireEvent.click(buttonElement);

    expect(window.alert).toHaveBeenCalledWith(
      "Por favor, ingrese un RUT válido."
    );
  });
});
