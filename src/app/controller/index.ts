/**
 * Wraps Controllers for easy import from other modules
 */
import { Repository } from "typeorm";
import { Employee } from "../entities/Employee";
import { DepartmentRepository } from "../repository/DepartmentRepository";
import { EmployeeRepository } from "../repository/EmployeeRepository";
import { ProjectsRepository } from "../repository/ProjectsRepository";
import { DepartmentService } from "../services/DepartmentService";
import { EmployeeService } from "../services/EmployeeService";
import { ProjectsService } from "../services/ProjectsService";
import DepartmentController from "./DepartmentController";
import EmployeeController from "./EmployeeController";
import HealthController from "./HealthController";

import ProjectsController from "./ProjectsController";

// const employee = new Employee();
const employeeRepository = new EmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);

const departmentRepository = new DepartmentRepository();
const departmentService = new DepartmentService(departmentRepository);

const projectsRepository= new ProjectsRepository();
const projectsService=new ProjectsService(projectsRepository);

export default [
  new HealthController(),
  new EmployeeController(employeeService),
  new DepartmentController(departmentService),
  new ProjectsController(projectsService)
];
