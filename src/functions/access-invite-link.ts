import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface AccessInviteLinkParams {
    subscriberId: string
}

export async function accessInviteLink({
    subscriberId,
}: AccessInviteLinkParams) {
    await redis.hincrby('referral:access-count', subscriberId, 1)
}

// Estruturas de dados do REDIS

// chave/valor
// lists[] são Array`s todos comandos que começam com l
// hashes{} são "objetos" comandos que começam com h
// sorted sets como se fosse arrays, ordenados por coluna - comandos que começam com z
// json
