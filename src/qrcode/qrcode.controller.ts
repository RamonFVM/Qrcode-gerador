import { Controller, Post, Body } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {
    constructor(private qrcodeService: QrcodeService) {}

    @Post('generater')
    async GeneratorQrcode(@Body() body: { data: string }) {
       
        if (!body.data) {
            throw new Error('Requer um parâmetro "data"');
        } else {
           
            const qrCode = await this.qrcodeService.GerarQr(body.data);
            return { qrcode: qrCode };
        }
    }
}