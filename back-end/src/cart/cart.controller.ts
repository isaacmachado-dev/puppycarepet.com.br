// Controller base para endpoints do cart
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('atendimento')
  async createAtendimento(@Body() data: any) {
    return this.cartService.createAtendimento(data);
  }

  @Get('atendimentos')
  async getAtendimentos() {
    return this.cartService.getAtendimentos();
  }
}
