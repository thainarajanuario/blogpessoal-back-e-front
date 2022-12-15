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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const jwt_auth_guard_1 = require("../../auth/guard/jwt-auth.guard");
const usuario_entity_1 = require("../entities/usuario.entity");
const usuario_service_1 = require("../service/usuario.service");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    findAll() {
        return this.usuarioService.findAll();
    }
    async create(usuario) {
        return this.usuarioService.create(usuario);
    }
    async update(usuario) {
        return this.usuarioService.update(usuario);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)('/cadastrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Put)('/atualizar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "update", null);
UsuarioController = __decorate([
    (0, swagger_1.ApiTags)('Usuario'),
    (0, common_1.Controller)('/usuarios'),
    (0, dist_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map