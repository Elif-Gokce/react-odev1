import React from "react";

interface KutuOzellikleri {
  children: React.ReactNode;
}

const Kutu: React.FC<KutuOzellikleri> = ({ children }) => {
  return (
    <div style={{ border: "2px solid black", padding: "20px", margin: "20px" }}>
      {children}
    </div>
  );
};

export default Kutu;
//Kutu componenti için test
