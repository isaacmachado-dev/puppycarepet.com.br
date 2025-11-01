import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  async create(createStatusDto: CreateStatusDto) {
    return this.prisma.status.create({
      data: {
        ...createStatusDto,
        timestamp: createStatusDto.timestamp ? new Date(createStatusDto.timestamp) : new Date(),
      },
    });
  }

  async findAll() {
    return this.prisma.status.findMany({
      include: {
        ordem: true,
      },
    });
  }

  async findOne(id: string) {
    const status = await this.prisma.status.findUnique({
      where: { id },
      include: {
        ordem: true,
      },
    });

    if (!status) {
      throw new NotFoundException(`Status com ID ${id} não encontrado`);
    }

    return status;
  }

  async update(id: string, updateStatusDto: UpdateStatusDto) {
    await this.findOne(id);
    return this.prisma.status.update({
      where: { id },
      data: {
        ...updateStatusDto,
        timestamp: updateStatusDto.timestamp ? new Date(updateStatusDto.timestamp) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.status.delete({
      where: { id },
    });
  }
}

