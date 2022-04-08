import { getConnection, Repository } from "typeorm";
import { EmployeeRoles } from "../entities/EmployeeRoles";


export class RolesRepository extends Repository<EmployeeRoles> {

    public async getAllRoles(){
        const RoleRepo = getConnection().getRepository(EmployeeRoles);
        return RoleRepo.findAndCount();
    }
    
    public async saveRoleDetails(roleDetails: EmployeeRoles) {
        const employeeRepo = getConnection().getRepository(EmployeeRoles);
        return employeeRepo.save(roleDetails);
    }

    public async updateRoleDetails(roleId: string, roleDetails: any) {
        const roleRepo = getConnection().getRepository(EmployeeRoles);
        const updateRoleDetails = await roleRepo.update({ roleId: roleId, deletedAt: null }, {
            roleName: roleDetails.name ? roleDetails.name : undefined,
        });
        return updateRoleDetails;
    }

    public async softDeleteRoleById(roleId: string) {
        const roleRepo = getConnection().getRepository(EmployeeRoles);
        return roleRepo.softDelete({
            roleId
        });
    }
}