import { CreateObject } from './CreateObject'

export interface ICreateRepository {
    create(obj: CreateObject): Promise<CreateObject>
}
