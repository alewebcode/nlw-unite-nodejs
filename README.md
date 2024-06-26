![image](https://github.com/alewebcode/nlw-unite-nodejs/assets/2896461/e3b36ee6-863b-4fba-a15a-9d7b3e284efe)

No NLW unite desenvolvemos o backend da aplicação Pass.in, que trata da gestão de participantes em eventos presenciais.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

<h3>Requisitos funcionais</h3>
✔️ O organizador deve poder cadastrar um novo evento<br/>
✔️ O organizador deve poder visualizar dados de um evento<br/>
✔️ O organizador deve poser visualizar a lista de participantes<br/>
✔️ O participante deve poder se inscrever em um evento<br/>
✔️ O participante deve poder visualizar seu crachá de inscrição<br/>
✔️ O participante deve poder realizar check-in no evento

<h3>Regras de negócio</h3>
✔️ O participante só pode se inscrever em um evento uma única vez<br/>
✔️ O participante só pode se inscrever em eventos com vagas disponíveis<br/>
✔️ O participante só pode realizar check-in em um evento uma única vez<br/>

<h3>Requisitos não-funcionais</h3>
✔️ O check-in no evento será realizado através de um QRCode

## ✨ Tecnologias utilizadas
NodeJs<br/>
TypeScript<br/>
Fastify<br/>
Prisma

## Documentação da API (Swagger)
https://nlw-unite-nodejs-h1jj.onrender.com/docs
