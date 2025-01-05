export function Header() {
    return (
        <div className="flex justify-center m-0 items-center bg-[#2F4F4F] p-8">
            
            <div className="h">
                <img 
                    className="w-20 h-20" 
                    src="https://cdn.icon-icons.com/icons2/3002/PNG/512/qrcode_icon_187848.png" 
                    alt="QRCode" 
                />
            </div>
            
            <header className="font-mono text-2xl text-white">Faça seu qrcode aqui</header>

            <div className="h">
                <img 
                    className="w-20 h-20" 
                    src="https://cdn.icon-icons.com/icons2/3002/PNG/512/qrcode_icon_187848.png" 
                    alt="QRCode" 
                />
            </div>
        </div>
    );
}