'use client'
import axios from "axios";
import { useState } from "react";

export function HomePage() {
  const [url, setUrl] = useState<string>(''); 
  const [value, setValue] = useState<string>(''); 

  const Geradorqrcode = async () => {
    try {
      if (value) {
        
        const Qrcodedata = await axios.post('http://localhost:4000/qrcode/generater', {
          data: value 
        });

        if (Qrcodedata.data && Qrcodedata.data.qrcode) {
          setUrl(Qrcodedata.data.qrcode); 
        }
      }
    } catch (error) {
      console.error("Erro ao gerar o QR code", error);
    }
  };

  

  return (
    <div className="flex flex-col justify-center items-center text-center m-8">
      <h1 className="font-medium m-4 text-5xl mb-4">Gerador de Qrcode</h1>

      <input
        className="border min-w-96 rounded-xl m-6 p-4 placeholder-gray-700 focus:outline-none"
        type="text"
        placeholder="Coloque sua url aqui ou texto"
        value={value}
        onChange={(e) => setValue(e.target.value.toLocaleLowerCase())}
      />

      <button
        className="bg-emerald-500 text-white w-72 p-4 rounded-2xl hover:bg-emerald-800 text-lg hover:transition-all hover:ease-out hover:duration-500 hover:scale-110"
        type="submit"
        onClick={Geradorqrcode}
      >
        Gerar Qrcode
      </button>


      {url && (
        <div className="mt-6 flex justify-center items-center bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-10 ">
          <img src={url}  alt="Qr Code Gerado"  className="w-48 h-48 rounded-lg border-2 border-emerald-500 shadow-md hover:shadow-2xl transition-shadow duration-300"  />
        </div>
      )}
    </div>
  );
}