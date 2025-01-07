'use client'
import axios from "axios";
import { useState } from "react";



export function HomePage() {
    const [url,seturl]=useState<string>("")
    const [value,setValue]=useState<string>("")

    const Geradorqrcode=async()=>{
        try {

            if(value){
                
                const Qrcodedata= await axios.get(`http://localhost:4000/qrcode/generater?data=${value}`)
                if(Qrcodedata.data){

                    setValue(Qrcodedata.data)
                }
            }
        } catch (error) {
            console.error("Error ao gerar o qrcode", error)
        }


    }
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
            >
                Gerar Qrcode
                
            </button>

        </div>
    );
}