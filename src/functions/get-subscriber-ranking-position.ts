import { redis } from '../redis/client'

interface GetSubscriberRankingPositionParams {
    subscriberId: string
}

export async function getSubscriberRankingPosition({
    subscriberId,
}: GetSubscriberRankingPositionParams) {
    // zrevrank - Determina a posição de um membro dentro do ranking, ordenado do maior pro menor
    const rank = await redis.zrevrank('referral:ranking', subscriberId)

    if (rank === null) {
        return { position: null }
    }

    return { position: rank + 1 }
}
