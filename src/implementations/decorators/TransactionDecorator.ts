import { CreateObject } from '@/interfaces/CreateObject'
import { CreateRepositoryDecorator } from '../abstracts/CreateRepositoryDecorator'

export class TransactionDecorator extends CreateRepositoryDecorator {
    async create(obj: CreateObject): Promise<CreateObject> {
        console.log('BEGIN TRANSACTION')

        const createdObj = await this.createRepository.create(obj)

        console.log(createdObj)

        console.log('END TRANSACTION')

        return createdObj
    }
}
