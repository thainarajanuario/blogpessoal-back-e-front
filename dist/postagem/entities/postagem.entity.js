"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postagem = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const tema_entity_1 = require("../../tema/entities/tema.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
let Postagem = class Postagem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Postagem.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Postagem.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 1000, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Postagem.prototype, "texto", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Postagem.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => tema_entity_1.Tema }),
    (0, typeorm_1.ManyToOne)(() => tema_entity_1.Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    }),
    __metadata("design:type", tema_entity_1.Tema)
], Postagem.prototype, "tema", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => usuario_entity_1.Usuario }),
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Postagem.prototype, "usuario", void 0);
Postagem = __decorate([
    (0, typeorm_1.Entity)({ name: "tb_postagens" })
], Postagem);
exports.Postagem = Postagem;
function MaxLenght() {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=postagem.entity.js.map