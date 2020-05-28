import { ICreateRepository } from '@/interfaces/ICreateRepository'
import { CreateObject } from '@/interfaces/CreateObject'

export class CreateRepository implements ICreateRepository {
    async create(obj: CreateObject): Promise<CreateObject> {
        obj.id = Math.random().toString(32).slice(2)

        return obj
    }
}
