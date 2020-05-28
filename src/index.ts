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

console.log()
console.log('------------------NO DECORATED----------------------')
create(createRepository)
    .then(async () => {
        console.log()
        console.log('---------------------DECORATED----------------------')
        await create(new TransactionDecorator(createRepository)).catch(
            console.error
        )
        console.log()
    })
    .catch(console.error)
