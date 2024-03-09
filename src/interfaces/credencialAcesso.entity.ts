import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CredencialEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
  @PrimaryColumn()
  login: string;

  @Column()
  senha: string;
}