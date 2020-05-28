import { ICreateRepository } from '@/interfaces/ICreateRepository'
import { CreateObject } from '@/interfaces/CreateObject'

export abstract class CreateRepositoryDecorator implements ICreateRepository {
    protected createRepository: ICreateRepository

    constructor(createRepository: ICreateRepository) {
        this.createRepository = createRepository
    }

    abstract create(obj: CreateObject): Promise<CreateObject>
}
