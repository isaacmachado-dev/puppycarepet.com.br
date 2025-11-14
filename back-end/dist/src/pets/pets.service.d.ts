import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetSyncBatchRequestDto } from './dto/pet-sync.dto';
export declare class PetsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPetDto: CreatePetDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePetDto: UpdatePetDto): Promise<any>;
    remove(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batchUpsert(body: PetSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    private applyOne;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
