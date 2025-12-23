// Serviço base para lógica do cart no backend
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Decimal } from '@prisma/client/runtime/library';
import * as fs from 'fs';
import * as path from 'path';
import { File } from 'multer';

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

  async createAtendimentoWithOptionalFile(body: any, file?: File) {
    // Aceita tanto um payload JSON direto quanto um campo 'data' contendo JSON em multipart
    let payload: any = body;
    if (typeof body?.data === 'string') {
      try {
        payload = JSON.parse(body.data);
      } catch (e) {
        // mantém body original se não for JSON válido
      }
    }

    const data = {
      ID_CLIENTE: Number(payload.ID_CLIENTE),
      ID_PET: Number(payload.ID_PET),
      ID_SERVICO: Number(payload.ID_SERVICO),
      VALOR_COBRADO: payload.VALOR_COBRADO ? new Decimal(String(payload.VALOR_COBRADO)) : new Decimal('0'),
      TIPO: payload.TIPO ?? 'Atendimento',
      NOTAS: payload.NOTAS ?? null,
      TELEFONE_DONO: payload.TELEFONE_DONO ?? null,
      IDADE_PET: payload.IDADE_PET ?? null,
      PORTE_PET: payload.PORTE_PET ?? null,
    };

    const atendimento = await this.prisma.aTENDIMENTOS.create({ data });

    if (file && atendimento?.ID_ATENDIMENTO) {
      const uploadsDir = path.join(process.cwd(), 'uploads', 'atendimentos');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const ext = path.extname(file.originalname) || '.bin';
      const filename = `${atendimento.PUBLIC_ID || atendimento.ID_ATENDIMENTO}-${Date.now()}${ext}`;
      const destPath = path.join(uploadsDir, filename);
      fs.writeFileSync(destPath, file.buffer);

      await this.prisma.aTENDIMENTO_IMAGENS.create({
        data: {
          ID_ATENDIMENTO: atendimento.ID_ATENDIMENTO,
          CAMINHO_IMAGEM: destPath,
        },
      });
    }

    return atendimento;
  }
}
