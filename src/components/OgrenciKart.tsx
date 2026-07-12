import React from "react";

interface OgrenciOzellikleri {
  isim: string;
  bolum: string;
  yas: number;
  hobiler: string[];
  aktifMi?: boolean; // opsiyonel
}

const OgrenciKart: React.FC<OgrenciOzellikleri> = ({
  isim,
  bolum,
  yas,
  hobiler,
  aktifMi = true // default değer
}) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "250px"
      }}
    >
      <h2>{isim}</h2>
      <p>Bölüm: {bolum}</p>
      <p>Yaş: {yas}</p>
      <p>Hobiler: {hobiler.join(", ")}</p>
      {aktifMi ? (
        <span style={{ color: "green" }}>Aktif</span>
      ) : (
        <span style={{ color: "red" }}>Pasif</span>
      )}
    </div>
  );
};
// OgrenciKart componenti için test

export default OgrenciKart;
