import React from "react";
import OgrenciKart from "./OgrenciKart";

interface ListeOzellikleri {
  ogrenciler: {
    isim: string;
    bolum: string;
    yas: number;
    hobiler: string[];
    aktifMi?: boolean;
  }[];
}

const OgrenciListe: React.FC<ListeOzellikleri> = ({ ogrenciler }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {ogrenciler.map((o, index) => (
        <OgrenciKart key={index} {...o} />
      ))}
    </div>
  );
};

export default OgrenciListe;
// OgrenciListe componenti için test satırı

