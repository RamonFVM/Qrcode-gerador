import { Controller, Post, Query } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {

    constructor( private qrcodeService:QrcodeService){}
    @Post('generater')
    async GeneratorQrcode(@Query('data') data: string) {
        
        if (!data) {
            throw new Error('Requer um parâmetro');
        } else {
           
            const qrCode = await this.qrcodeService.GerarQr(data);
            return { qrcode: qrCode };
        }
    }
}
