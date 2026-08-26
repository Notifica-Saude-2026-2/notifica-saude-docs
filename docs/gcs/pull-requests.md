<h1 align="center">Gerenciamento de Pull Requests</h1>


<p align="center">O histórico de alterações consolidado está na <a href="../">página inicial da seção de GCS</a>.</p>

## Sumário

- [1. Introdução](#introducao)
- [2. Pull Requests não planejadas](#nao-planejadas)
- [3. Squash Merge](#squash-merge)

---

<a id="introducao"></a>

## 1. Introdução

No modelo **GitFlow**, todo código desenvolvido em uma *feature branch* deve ser integrado à branch `develop` por meio de um **Pull Request (PR)**. A branch `main` recebe código apenas de branches de release ou de *hotfix*.

O Pull Request permite que os demais membros da equipe revisem as alterações propostas antes que elas sejam incorporadas às branches principais do projeto.

O código contido em uma branch será mesclado às branches principais (`main` ou `develop`) se, e somente se, for aprovado por ao menos **um integrante da equipe**, preferencialmente alguém que não tenha participado diretamente do desenvolvimento da alteração.

Durante o processo de revisão, os membros da equipe podem:

- comentar sobre o código;
- sugerir melhorias;
- solicitar alterações; ou
- aprovar o Pull Request.

Após a aprovação e a verificação de que todos os testes foram executados corretamente, qualquer membro da equipe pode realizar o **merge** do Pull Request na branch de destino.

O título do Pull Request deve ser igual ao nome do **commit principal** realizado na branch, seguindo o [padrão de mensagens de commit](padrao-commits.md).

---

<a id="nao-planejadas"></a>

## 2. Pull Requests não planejadas

Durante o desenvolvimento podem surgir demandas não previstas, como correções emergenciais ou ajustes pontuais. Essas demandas devem ser tratadas como *issues não planejadas*, garantindo rastreabilidade e organização.

O fluxo definido é:

1. **Criação da issue.** A demanda deve ser registrada como uma issue, contendo uma descrição clara do problema ou da necessidade.

2. **Classificação.** A issue deve ser identificada como não planejada e vinculada ao board do projeto.

3. **Desenvolvimento.** Para melhorias não planejadas, a branch deve partir da `develop`. Para bugs críticos (*hotfix*), a branch deve partir da `main` e, ao final, ser mesclada na `main` e na `develop` simultaneamente. O fluxo padrão é:

    - criação da branch a partir da base apropriada (`develop` ou `main`);
    - implementação da solução;
    - commits conforme o padrão definido.

4. **Pull Request.** Após a implementação, deve ser aberto um PR vinculado à issue, indicando que se trata de uma demanda não planejada.

5. **Revisão e integração.** O PR deve passar por revisão, ser aprovado e, então, integrado à branch de destino, garantindo a qualidade da entrega.

---

<a id="squash-merge"></a>

## 3. Squash Merge

No processo de integração de código, adota-se a estratégia de **Squash Merge** como padrão para os Pull Requests direcionados à branch `develop`. Deve-se evitar o uso de squash direto na `main` em releases completas, de modo a preservar o histórico detalhado.

O Squash Merge consiste em consolidar todos os commits realizados em uma *feature branch* em um único commit no momento do merge. A abordagem tem como principal objetivo manter o histórico da branch principal limpo, linear e de fácil rastreabilidade.

Ao realizar o Squash Merge, devem ser seguidas as seguintes diretrizes:

- todos os commits da *feature branch* são comprimidos em um único commit;
- a mensagem desse commit deve ser clara, descritiva e refletir o objetivo completo da funcionalidade ou correção implementada;
- o título do commit resultante deve seguir o mesmo padrão definido para os Pull Requests;
- informações relevantes discutidas durante o Pull Request, como decisões técnicas ou observações importantes, devem ser incorporadas na descrição do commit quando necessário.

A adoção do Squash Merge traz os seguintes benefícios:

- redução de ruído no histórico de commits;
- melhor legibilidade e organização da branch `main`;
- facilidade na identificação das funcionalidades entregues;
- simplificação de eventuais processos de *rollback*.

Após a realização do Squash Merge, a *feature branch* pode ser excluída, mantendo o repositório organizado e alinhado às boas práticas do GitFlow.
