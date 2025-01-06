import { Controller, Post, Query } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {

    constructor( private qrcodeService:QrcodeService){}

    @Post('generater')
    async GeneratorQrcode(@Query('data') data:string){
        if(!data){
            throw new Error('Requer um parametro')
        }else{
            
            return this.qrcodeService.Generatorqr(data)

        }

        
    }
}
