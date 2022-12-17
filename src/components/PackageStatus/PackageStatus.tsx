import React from "react";

type StatusProps = {
  status: string;
};

const PackageStatus = ({ status }: StatusProps) => {
  const statusPl = (status: string) =>
    status === "new" ? "Nowe" : "Pakowanie";
  return (
    <span
      style={{ border: "2px solid", borderRadius: "30px", padding: "0.5rem" }}
    >
      {statusPl(status)}
    </span>
  );
};

export default PackageStatus;
