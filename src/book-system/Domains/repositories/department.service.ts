import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Department, DepartmentDTO } from "../entities/department.entity";
import { Repository, getRepository } from "typeorm";
import { thisExpression } from "@babel/types";

@Injectable()
export class DepartmentService {

    constructor(@InjectRepository(Department) private departmentRepository: Repository<Department>){}

    async findAllDepartments(){
        return await this.departmentRepository.find();
    }

    async findDepartmentById(id: string){
        const department = await this.departmentRepository.findOne({where: id});
        if(!department){
            throw new HttpException("Department not found", HttpStatus.NOT_FOUND);
        }

        return department;
    }

    async createDepartment(data: DepartmentDTO){
        const department = await this.departmentRepository.create(data);
        await this.departmentRepository.save(department);

        return department;
    }

    async updateDepartmentById(id: string, data: DepartmentDTO){
        const department = await this.departmentRepository.findOne({where: id});

        if(!department){
            throw new HttpException("Department not found", HttpStatus.NOT_FOUND);
        }

        await this.departmentRepository.update(id, data);

        return department;
    }

    async deleteDepartment(id: string){
        const department = await this.departmentRepository.findOne({where: id});
        if(!department){
            throw new HttpException("Department not found", HttpStatus.NOT_FOUND);
        }

        await this.departmentRepository.delete(id);

        return department;
    }

    async findDepartmentByName(name: string): Promise<Department[]>{
        const departments = await getRepository(Department)
            .createQueryBuilder('department')
            .where('department.name like :name', {name: '%'+name+'%'})
            .getMany();

        return departments;
    }
}