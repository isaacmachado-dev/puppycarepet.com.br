import { Injectable } from '@nestjs/common';
const FILE_PATH = 'src/funcionarios/funcionarios.json';

@Injectable()
export class FuncionariosService {
  private funcionarios = this.loadFuncionarios();

  private loadFuncionarios() {
    const fs = require('fs');
    try {
      if (fs.existsSync(FILE_PATH)) {
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        console.log('LIDO DO JSON:', data); // debug
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Erro ao ler o arquivo de funcionarios:', e);
    }
    // Se o arquivo não existir ou ocorrer um erro, retornar uma lista vazia
    return [];
  }


  private saveFuncionarios() {
    const fs = require('fs');
    fs.writeFileSync(FILE_PATH, JSON.stringify(this.funcionarios, null, 2), 'utf-8');
  }

  findAll() {
    return this.funcionarios;
  }

  updateFuncionario(id: number, data: Partial<{ name: string, email: string, type: string[] }>) {
    const index = this.funcionarios.findIndex(f => f.id === id);
    if (index === -1) return null;

    this.funcionarios[index] = {
      ...this.funcionarios[index],
      ...data,
    };
    this.saveFuncionarios(); // salva no disco!
    return this.funcionarios[index];
  }
}
