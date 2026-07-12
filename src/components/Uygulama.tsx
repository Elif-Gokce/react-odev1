
import OgrenciListe from "./OgrenciListe";
import Kutu from "./Kutu";

function Uygulama() {
  const ogrenciler = [
    { isim: "Ali", bolum: "Bilgisayar Müh.", yas: 21, hobiler: ["Satranç", "Kodlama"], aktifMi: true },
    { isim: "Ayşe", bolum: "Elektrik Müh.", yas: 22, hobiler: ["Resim", "Müzik"] }, // aktifMi yok → default true
    { isim: "Mehmet", bolum: "Makine Müh.", yas: 23, hobiler: ["Futbol"], aktifMi: false }
  ];

  return (
    <Kutu>
      <h1>Öğrenci Profilleri</h1>
      <OgrenciListe ogrenciler={ogrenciler} />
    </Kutu>
  );
}

export default Uygulama;

