import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
    app.post(
        '/subscriptions',
        {
            schema: {
                summary: 'Subscribes someone to the event',
                tags: ['subscription'],
                description: 'description for subscribes routes',
                body: z.object({
                    name: z.string(),
                    email: z.email(),
                }),
                response: {
                    201: z.object({
                        name: z.string(),
                        email: z.email(),
                    }),
                },
            },
        },
        async (request, reply) => {
            const { name, email } = request.body

            // criação da inscrição do banco de dados

            return reply.status(201).send({
                name,
                email,
            })
        }
    )
}
