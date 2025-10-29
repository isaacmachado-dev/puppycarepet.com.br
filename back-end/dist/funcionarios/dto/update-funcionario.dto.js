"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFuncionarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_funcionario_dto_1 = require("./create-funcionario.dto");
class UpdateFuncionarioDto extends (0, swagger_1.PartialType)(create_funcionario_dto_1.CreateFuncionarioDto) {
}
exports.UpdateFuncionarioDto = UpdateFuncionarioDto;
//# sourceMappingURL=update-funcionario.dto.js.map