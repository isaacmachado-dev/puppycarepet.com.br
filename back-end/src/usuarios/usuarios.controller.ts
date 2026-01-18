import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  Res,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CreateUsuarioDto, LoginDto } from './dto/create-usuario.dto';

class UpdateFotoDto {
  foto: string | null;
}

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  @ApiOperation({ summary: 'Criar usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  async create(@Body() body: CreateUsuarioDto) {
    return this.usuariosService.create(body);
  }

  @Post('login')
  @ApiOperation({ summary: 'Autenticar usuário e retornar JWT por EMAIL' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  async login(@Body() body: LoginDto) {
    return this.usuariosService.login(body.email, body.senha);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
  async findAll() {  // ✅ SEM @Res()
    return this.usuariosService.findAll();  // Nest manda JSON automático
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID_USUARIO' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id/foto')
  @ApiOperation({ summary: 'Atualizar foto do usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID_USUARIO' })
  async updateFoto(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateFotoDto,
  ) {
    return this.usuariosService.updateFoto(id, body.foto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados do usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID_USUARIO' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID_USUARIO' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(id);
  }
}
