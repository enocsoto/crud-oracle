import { BaseEntity } from 'src/common/config/base.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @BeforeInsert()
  checkFiledsBeforeInsert() {
    this.email = this.email.toLocaleLowerCase().trim();
    this.firstName = this.firstName.toLocaleLowerCase().trim();
    this.lastName = this.lastName.toLocaleLowerCase().trim();
  }

  @BeforeUpdate()
  checkFiledsBeforeUpdate() {
    this.checkFiledsBeforeInsert();
  }
}
