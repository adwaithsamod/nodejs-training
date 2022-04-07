import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("roles")
export class EmployeeRoles extends AbstractEntity{
    @PrimaryGeneratedColumn("increment")
    public role_id : string;

    @Column({nullable : false})
    public role_name : string;
}