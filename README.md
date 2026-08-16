# Site esportivo — Maria Valentina

Site estático com duas páginas, pronto para publicar no GitHub Pages:

- `index.html`: perfil e trajetória da atleta.
- `conquistas.html`: títulos, competições e premiações com filtros.
- `assets/js/dados-conquistas.js`: único arquivo que precisa ser editado para incluir novos resultados.

## Como abrir no computador

Dê dois cliques em `index.html`. O site funciona sem instalação e sem internet.

## Como adicionar um título ou premiação

1. Abra `assets/js/dados-conquistas.js` com o Bloco de Notas.
2. Copie uma linha parecida com o novo resultado.
3. Cole a cópia antes do `];` no fim do arquivo.
4. Troque ano, resultado, competição e categoria.
5. Salve o arquivo.

Exemplo de título:

```js
{ ano: 2026, tipo: "titulo", resultado: "Campeã", competicao: "Nome do campeonato", categoria: "Sub-17" },
```

Exemplo de premiação:

```js
{ ano: 2026, tipo: "premio", resultado: "Melhor levantadora", competicao: "Nome do campeonato", categoria: "Sub-17" },
```

Importante: deixe uma vírgula entre uma linha e outra. Não apague os sinais `{`, `}`, aspas ou colchetes.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie **o conteúdo desta pasta** para a raiz do repositório. O arquivo `index.html` precisa ficar na raiz.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione publicação a partir de uma branch.
5. Escolha a branch `main`, a pasta `/ (root)` e salve.

O GitHub mostrará o endereço público quando a publicação terminar.

## Privacidade

Como o site é público e a atleta é menor de idade, endereço residencial, documentos pessoais e dados bancários do currículo original não foram incluídos. O site mostra somente informações esportivas, idade calculada automaticamente e os contatos autorizados de e-mail e WhatsApp.
