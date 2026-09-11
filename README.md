# Pack 360 Pro — Landing Page

Projeto Next.js pronto para deploy na Vercel.

## Estrutura importante

A raiz do repositório precisa conter `package.json`, `next.config.ts`, `src/` e `public/`.
A aplicação principal está em `src/app/page.tsx`.

## Antes de publicar

1. Edite `src/config/assets.ts` e coloque os checkouts reais do Premium e Starter.
2. Confirme quantidade de artes, garantia e licença comercial.
3. Configure seu próprio Meta Pixel se quiser rastreamento pela Meta.

## Vercel

- Framework Preset: Next.js
- Root Directory: deixe vazio / `./`
- Build Command: `npm run build`
- Install Command: `npm install`

Se os arquivos estiverem dentro de uma pasta extra no GitHub, ajuste o Root Directory da Vercel para essa pasta. Nesta versão, a recomendação é manter os arquivos diretamente na raiz do repositório.
