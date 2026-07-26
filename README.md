# 🥋 Força para Jiu-Jítsu

Site estático (HTML + CSS + JS puro) para acompanhar o treino de força focado em jiu-jítsu na academia.

## Funcionalidades

- **Abas Seg–Sex** — abre automaticamente no treino do dia atual.
- **Checklist diário** — marque os exercícios concluídos; reseta sozinho a cada dia.
- **Registro de carga (kg)** — anote o peso de cada exercício; fica salvo no navegador.
- **Vídeo por exercício** — cole um link do YouTube e ele aparece incorporado no card.
- **Aba Regras** — faixas de repetições, finalizadores de pegada e filosofia do treino.

Tudo é salvo no `localStorage` do navegador — não precisa de servidor nem banco de dados.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `jiujitsu-workout`).
2. Envie os arquivos desta pasta:

   ```bash
   git init
   git add .
   git commit -m "Treino de força para jiu-jítsu"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/jiujitsu-workout.git
   git push -u origin main
   ```

3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
5. Em ~1 minuto o site estará em `https://SEU-USUARIO.github.io/jiujitsu-workout/`.

## Estrutura

| Arquivo | Função |
| --- | --- |
| `index.html` | Estrutura da página |
| `styles.css` | Visual (tema escuro, mobile-first) |
| `script.js` | Dados do treino + lógica (abas, checklist, cargas, vídeos) |

Para editar o treino, altere o array `WORKOUT_DAYS` no início do `script.js`.
