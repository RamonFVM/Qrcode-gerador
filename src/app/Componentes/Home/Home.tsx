export function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center text-center m-8">
            <h1 className="font-medium m-4 text-5xl mb-4">Gerador de Qrcode</h1>
            <input className="border min-w-96 rounded-xl m-6 p-4 placeholder-gray-700 " type="text"  placeholder="Coloque sua url aqui"/>
        </div>
    )
}