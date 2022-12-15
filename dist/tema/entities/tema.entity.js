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
exports.Tema = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const postagem_entity_1 = require("../../postagem/entities/postagem.entity");
let Tema = class Tema {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Tema.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Tema.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => postagem_entity_1.Postagem }),
    (0, typeorm_1.OneToMany)(() => postagem_entity_1.Postagem, (postagem) => postagem.tema),
    __metadata("design:type", Array)
], Tema.prototype, "postagem", void 0);
Tema = __decorate([
    (0, typeorm_1.Entity)({ name: "tb_temas" })
], Tema);
exports.Tema = Tema;
//# sourceMappingURL=tema.entity.js.map