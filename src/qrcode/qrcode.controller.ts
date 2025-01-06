import { Controller, Post } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {

    constructor( private qrcodeService:QrcodeService){}

    @Post()
    GeneratorQrcode(){

        return this.qrcodeService.Generatorqr()
    }
}
