import { plainToClass } from "class-transformer";
import { EmployeeRoles } from "../entities/EmployeeRoles";
import HttpException from "../exception/HttpException";
import { RolesRepository } from "../repository/RolesRepository";

export class RolesService {
    constructor(
        private roleRepository: RolesRepository
    ) {}
    public async getAllRoles() {
        return this.roleRepository.getAllRoles();
    }

    public async createRole(roleDetails: any) {
        try {
            const newRole = plainToClass(EmployeeRoles, {
                roleName: roleDetails.roleName,
            });
            const save = await this.roleRepository.saveRoleDetails(newRole);
            return save;
        } catch (err) {
            throw new HttpException(400, "Failed to create eRole");
        }
    }

    public async updateRole(roleId: string, roleDetails: any) {
       
        const updatedRole= await this.roleRepository.updateRoleDetails(roleId, roleDetails);
        
        return updatedRole;

       
    }

    public async deleteRole(roleId: string) {
        return this.roleRepository.softDeleteRoleById(roleId);
        
    }
}