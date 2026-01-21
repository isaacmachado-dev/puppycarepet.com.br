import { Controller, Post, Body, Get, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CartService } from './cart.service';
// ✅ REMOVA: import type { Multer } from 'multer';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('atendimento')
  @UseInterceptors(FileInterceptor('file'))
  async createAtendimento(
    @UploadedFile() file: any,  
    @Body() body: any,
  ) {
    return this.cartService.createAtendimentoWithOptionalFile(body, file);
  }

  @Get('atendimentos')
  async getAtendimentos() {
    return this.cartService.getAtendimentos();
  }
}
