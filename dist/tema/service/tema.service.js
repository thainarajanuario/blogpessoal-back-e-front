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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tema_entity_1 = require("../entities/tema.entity");
let TemaService = class TemaService {
    constructor(temaRepository) {
        this.temaRepository = temaRepository;
    }
    async findAll() {
        return await this.temaRepository.find({
            relations: {
                postagem: true
            }
        });
    }
    async findById(id) {
        let tema = await this.temaRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true
            }
        });
        if (!tema)
            throw new common_1.HttpException('Tema não existe', common_1.HttpStatus.NOT_FOUND);
        return tema;
    }
    async findByDescricao(descricao) {
        return await this.temaRepository.find({
            where: {
                descricao: (0, typeorm_2.ILike)(`%${descricao}%`)
            },
            relations: {
                postagem: true
            }
        });
    }
    async create(tema) {
        return await this.temaRepository.save(tema);
    }
    async update(tema) {
        let buscarTema = await this.findById(tema.id);
        if (!buscarTema || !buscarTema.id)
            throw new common_1.HttpException('Tema Não Existe', common_1.HttpStatus.NOT_FOUND);
        return await this.temaRepository.save(tema);
    }
    async delete(id) {
        let buscarTema = await this.findById(id);
        if (!buscarTema)
            throw new common_1.HttpException('Tema não encontrada', common_1.HttpStatus.NOT_FOUND);
        return await this.temaRepository.delete(id);
    }
};
TemaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tema_entity_1.Tema)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TemaService);
exports.TemaService = TemaService;
//# sourceMappingURL=tema.service.js.map