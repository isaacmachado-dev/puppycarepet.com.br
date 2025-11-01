import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
export declare class PetsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPetDto: CreatePetDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updatePetDto: UpdatePetDto): Promise<any>;
    remove(id: string): Promise<any>;
}
