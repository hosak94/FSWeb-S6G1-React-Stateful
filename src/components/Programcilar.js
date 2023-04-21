/*
Programcilar Talimatları

Şu kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-programcilar.gif

Bu bileşen, bir yandan programlama alanındaki öncülerin bir listesini,
ve diğer tarafta o anda öne çıkan programcının idsini izler. Yani 2 adet state dilimi!
Aynı zaman içinde yalnız bir harika programcıyı öne çıkarabiliriz.

Yorumları takip edin.
*/

import React, { useState } from "react";

/* ADIM 0  */

// Bu değişkeni YALNIZCA bir state dilimini başlatmak için kullanın!
// JSX'te şu anda bu kuralı çiğneyen bir şey var...
// Export syntaxı, test kitaplığının diziyi içe aktarabilmesi için gereklidir.
export const enIyilerListesi = [
  { id: "1", isim: "Ada Lovelace" },
  { id: "2", isim: "Grace Hopper" },
  { id: "3", isim: "Evelyn Boyd Granville" },
  { id: "4", isim: "Mary Kenneth Keller" },
  { id: "5", isim: "Frances Allen" },
  { id: "6", isim: "Carol Shaw" },
];

export default function Programcilar() {
  const [liste, setListe] = useState(enIyilerListesi);
  const [oneCikanId, setOneCikanId] = useState(null);
  // İki state dilimine ihtiyacımız olduğundan, state hooku iki kez kullanmamız gerekecek..
  // Bir yanda programcılar listesi, diğer yanda öne çıkan programcının idsi.

  const oneCikaninIsmi = () => {
    // Bunu sona bırakın!
    // Bu bir event handler değil, yardımcıdır. Kullanımını JSX'te gözlemleyin.
    // Öne çıkan geliştiricinin _isim_ adını döndürmek için her iki state dilimini kullanacak.
    // Closureların güzelliği, argümanlar yoluyla bilgi enjekte etmeye gerek kalmadan programın
    // bu bölgesinden her iki state dilimini de "görebilmemiz"dir.
    const oneCikan = liste.find((dev) => dev.id === oneCikanId);
    return oneCikan ? oneCikan.isim : "";
  };

  const stil = {
    fontSize: "1.5em",
    marginTop: "0.5em",
    color: oneCikanId ? "gold" : "royalblue", // 🤔 kutlarken renk gold'a dönecek
  };

  return (
    <div className="widget-programmers container">
      <h2>Programcılar</h2>
      <div className="programmers">
        {liste.map((dev) => (
          <div className="programmer" key={dev.id}>
            {dev.isim}{" "}
            <button
              onClick={() => {
                setOneCikanId(dev.id);
              }}
            >
              Kutla
            </button>
          </div>
        ))}
      </div>
      <div id="featured" style={stil}>
        {oneCikanId
          ? `🎉 Hadi ${oneCikaninIsmi()} kutlayalım! 🥳`
          : "Harika bir programcı seçin"}
      </div>
    </div>
  );
}
