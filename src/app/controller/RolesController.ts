import { NextFunction, Response } from "express";
import multer from "multer";
import APP_CONSTANTS from "../constants";
import { RolesService } from "../services/RolesService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";

class RolesController extends AbstractController {

    private upload = multer({ dest: "./public/uploads/"});
    constructor(
      private rolesService: RolesService,
    ) {
      super(`${APP_CONSTANTS.apiPrefix}/roles`);
      this.initializeRoutes();
    }
  
    protected initializeRoutes = (): void => {
        
        this.router.post(
            `${this.path}`,
            // validationMiddleware(CreateEmployeeDto, APP_CONSTANTS.body),
            // this.asyncRouteHandler(this.createEmployee)
            this.createRole
          );
        
        this.router.get(
            `${this.path}`,
            // authorize(),
            this.asyncRouteHandler(this.getAllRoles)
          );

          this.router.put(
            `${this.path}/:roleId`,
            this.asyncRouteHandler(this.updateRole)
          );

          this.router.delete(
            `${this.path}/:roleId`,
            this.asyncRouteHandler(this.deleteRole)
          );

    }


    private createRole = async (
      request: RequestWithUser,
      response: Response,
      next: NextFunction
    ) => {
      try {
        const data = await this.rolesService.createRole(request.body);
        response.send(
          this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
        );
      } catch (err) {
        next(err);
      }
    }

    private getAllRoles = async (
      request: RequestWithUser,
      response: Response,
      next: NextFunction
    ) => {
      const data = await this.rolesService.getAllRoles();
      response.send(
        this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
      );
    }

    private updateRole = async (
      request: RequestWithUser,
      response: Response,
      next: NextFunction
    ) => {
        const data = await this.rolesService.updateRole(request.params.roleId, request.body);
        response.status(201).send(
          this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
        );
    }

    private deleteRole = async (
      request: RequestWithUser,
      response: Response,
      next: NextFunction
    ) => {
      const data = await this.rolesService.deleteRole(request.params.roleId);
      response.status(201).send(
        this.fmt.formatResponse(data, Date.now() - request.startTime, "OK")
      );
    }
}

export default RolesController;