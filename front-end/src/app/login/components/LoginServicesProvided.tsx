import React from "react";

export default function LoginServicesProvided() {
  return (
    <>
      <label>Serviços Prestados</label>
      <input
        type="radio"
        id="banho"
        name="banho"
        value="banho"
        className="mr-2"
      />
      <label htmlFor="banho" className="mr-4">
        Banho
      </label>
      <input type="radio" id="tosa" name="tosa" value="tosa" className="mr-2" />
      <label htmlFor="tosa" className="mr-4">
        Tosa
      </label>
      <input
        type="radio"
        id="levaetraz"
        name="levaetraz"
        value="levaetraz"
        className="mr-2"
      />
      <label htmlFor="levaetraz" className="mr-4">
        Leva e Traz
      </label>
    </>
  );
}
