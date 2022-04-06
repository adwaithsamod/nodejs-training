
import { plainToClass } from "class-transformer";
import { ProjectsRepository } from "../repository/ProjectsRepository";
import { Projects } from "../entities/Projects";


export class ProjectsService {
    constructor(
        private projectsRepository: ProjectsRepository
    ) {}
  public async createProject(projectInput: any){
      const projectData=plainToClass(Projects, {
          "name":projectInput.name,
          description:"Keyvalue 123"
      });
      const savedDetails=await this.projectsRepository.createProject(projectData);
      return savedDetails;
  }
    
}