import { AbstractController } from "../util/rest/controller";
import APP_CONSTANTS from "../constants";
import {ProjectsService} from "../services/ProjectsService"
import RequestWithUser from "../util/rest/request";
import {Router,NextFunction, Response} from "express"
import validationMiddleware from "../middleware/validationMiddleware";
import { CreateProjectDto } from "../dto/CreateProject";
import HttpException from "../exception/HttpException";

class ProjectController extends AbstractController{
    constructor(
        private projectsService:ProjectsService
    )
    {
        super(`${APP_CONSTANTS.apiPrefix}/Projects`);
    this.initializeRoutes();
    }
    protected initializeRoutes=(): void =>{
        this.router.post(
            `${this.path}`,
          validationMiddleware(CreateProjectDto,APP_CONSTANTS.body ),
           this.asyncRouteHandler( this.createProject)
        );
    }
    private createProject = async (
        request: RequestWithUser,
        response: Response,
        next: NextFunction
      ) => {
          try{
            const data = await this.projectsService.createProject(request.body);
                    response.send(
                        this.fmt.formatResponse(data,Date.now() - request.startTime,'OK')
                    );
          }
          catch(err){
            //   throw new HttpException(400,"Adithya aan main.);
              next(err);
          }
        
        }
}
export default ProjectController;