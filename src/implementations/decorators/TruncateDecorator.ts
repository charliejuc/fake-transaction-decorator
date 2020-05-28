import { CreateObject } from '@/interfaces/CreateObject'
import { CreateRepositoryDecorator } from '../abstracts/CreateRepositoryDecorator'

export class TruncateDecorator extends CreateRepositoryDecorator {
    async create(obj: CreateObject): Promise<CreateObject> {
        console.log('TRUNCATE DATABASE')

        return await this.createRepository.create(obj)
    }
}
