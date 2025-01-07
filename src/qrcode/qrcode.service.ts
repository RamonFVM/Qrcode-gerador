import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';  

@Injectable()
export class QrcodeService {

    async GerarQr(data: string) {
    
        try {
            const qrcode = await QRCode.toDataURL(data);
            return qrcode;
        } catch (error) {
          throw new error (`Erro ao gerar o qrcode`)
        }
    }
}