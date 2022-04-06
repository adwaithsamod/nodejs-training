import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("Projects")
export class Projects extends AbstractEntity{
    @PrimaryGeneratedColumn("uuid")
    public id:string;

    @Column({nullable:false})
    public name:string;

    @Column({nullable:true})
    public description:string;

    @Column({default:true})
    public isActive:boolean;
}