# UAB Moodle - Links Azuis Sublinhados

Um _userscript_ que restaura o estilo padrão de _links_ azuis e sublinhados no [elearning.uab.pt](https://elearning.uab.pt/), que foi alterado por uma atualização do tema.

**Link para o projeto:** [Greasy Fork](https://greasyfork.org/en/scripts/596337-uab-moodle-blue-underlined-links)

<!-- ![captura de ecrã](https://placecorgi.com/1200/650) -->

## Como Foi Feito:

**Tecnologias usadas:** JavaScript, CSS (injetado via GM_addStyle), UserScript (metadados)

Este projeto nasceu de uma necessidade simples: o tema Moodle da UAB alterou a cor e o sublinhado dos links, tornando-os visualmente confusos. Depois de inspecionar o tema Boost com as DevTools do navegador, identifiquei os seletores CSS que estavam a ganhar a guerra de especificidade. A solução foi criar uma userscript que injeta uma folha de estilo com `html body a` e `!important` para garantir que as regras se sobrepõem a qualquer estilo do tema. Também tratei dos `<span>` internos (como o `.instancename` do Moodle) e deixei a barra de navegação superior intacta para não afetar o aspeto geral.

## Otimizações

A maior otimização foi limitar o âmbito das regras. Em vez de aplicar `color: blue` a tudo, usei seletores específicos que atingem apenas os links e os seus descendentes diretos. Também removi o `border-bottom` que o tema usava como sublinhado em alguns links, evitando que aparecessem dois sublinhados sobrepostos. O resultado é uma solução leve, sem quebras de layout e que respeita o resto do design do Moodle.

## Lições Aprendidas:

Este projeto ensinou-me bastante sobre especificidade em CSS e como os temas de CMS (como o Moodle) podem ser teimosos. Aprendi a usar as DevTools para diagnosticar conflitos de estilos, a escrever metadados de userscript corretamente e a publicar e manter o código no GreasyFork e no GitHub. Acima de tudo, percebi que uma solução bem documentada e com um README claro faz toda a diferença para quem a vai instalar.

## Exemplos:

Visite o meu portfólio:

**Portfólio:** [https://daniel-freire.com](https://daniel-freire.com/?utm_source=greasyfork-github)

---

Este projeto está licenciado sob a Licença MIT - veja o ficheiro [LICENSE](LICENSE) para mais detalhes.
