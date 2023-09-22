import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'


@Entity()

export class EUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    phone: number;
}
