import 'module-alias/register'
import 'source-map-support/register'
import { CreateRepository } from './implementations/CreateRepository'
import { TransactionDecorator } from './implementations/decorators/TransactionDecorator'
import { CreateObject } from './interfaces/CreateObject'
import { ICreateRepository } from './interfaces/ICreateRepository'

const createRepository = new CreateRepository()
const obj: CreateObject = {
    username: 'Pepe'
}

async function create(repository: ICreateRepository): Promise<void> {
    console.log(await repository.create(obj))
}

create(createRepository)
    .then(() => {
        create(new TransactionDecorator(createRepository)).catch(console.error)
    })
    .catch(console.error)
