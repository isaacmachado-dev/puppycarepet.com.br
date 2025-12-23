// Controller base para endpoints do cart
import { Controller, Post, Body, Get, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CartService } from './cart.service';
import type { Multer } from 'multer';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('atendimento')
  @UseInterceptors(FileInterceptor('file'))
  async createAtendimento(
    @UploadedFile() file: Multer.File,
    @Body() body: any,
  ) {
    // Suporta multipart/form-data com arquivo (campo 'file') e JSON puro
    return this.cartService.createAtendimentoWithOptionalFile(body, file);
  }

  @Get('atendimentos')
  async getAtendimentos() {
    return this.cartService.getAtendimentos();
  }
}
