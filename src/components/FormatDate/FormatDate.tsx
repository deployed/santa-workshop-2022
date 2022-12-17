import React from "react";

type DateProps = {
  strangeDate: string;
};

const FormatData = ({ strangeDate }: DateProps) => {
  const properDate = new Date(strangeDate);
  return (
    <span>
      {properDate.getDate()}-{properDate.getMonth() + 1}-
      {properDate.getFullYear()}
    </span>
  );
};

export default FormatData;
