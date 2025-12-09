// Serviço base para lógica do cart no backend
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async createAtendimento(data: any) {
    return this.prisma.aTENDIMENTOS.create({ data });
  }

  async getAtendimentos() {
    return this.prisma.aTENDIMENTOS.findMany({
      include: { CLIENTE: true, PET: true, SERVICO: true }
    });
  }
}
