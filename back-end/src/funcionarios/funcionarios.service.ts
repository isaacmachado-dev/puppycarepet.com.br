import { Injectable } from '@nestjs/common';

@Injectable()
export class FuncionariosService {
  private readonly funcionarios = [
    { id: 1, name: 'Joel Miller', image: '/admin/funcionarios/joel.webp', position: 'administradores' },
    { id: 2, name: 'Ellie Williams', image: '/admin/funcionarios/ellie.jpg', position: 'funcionarios' },
    { id: 3, name: 'Rick Grimes', image: '/admin/funcionarios/rick.webp', position: 'condutor' },
    { id: 4, name: 'Morty', image: '/admin/funcionarios/morty.webp', position: 'condutor' },
  ];

  findAll() {
    return this.funcionarios;
  }
}
