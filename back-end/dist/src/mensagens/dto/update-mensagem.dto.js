"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMensagemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_mensagem_dto_1 = require("./create-mensagem.dto");
class UpdateMensagemDto extends (0, swagger_1.PartialType)(create_mensagem_dto_1.CreateMensagemDto) {
}
exports.UpdateMensagemDto = UpdateMensagemDto;
//# sourceMappingURL=update-mensagem.dto.js.map