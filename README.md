<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=5636D3&labelColor=0A1033">

 <img src="https://img.shields.io/static/v1?label=Ignite&message=ReactNative&color=5636D3&labelColor=0A1033" alt="NLW 06" />
</p>


<h1 align="center">Ignite Gym</h1>

<img alt="gif-cell" src="https://github.com/FabricioAllves/ignite-gym/blob/main/mobile/src/assets/ReadmeLogo.png"/>

## 💻 Projeto
<!-- OQUE E´? -->
Aplicativo para listar exercicios a fazer na academia

<!-- QUAIS TECNOLOGIA USEI? -->
## ✨ Tecnologias e bibliotecas utilizadas

- [ ] React Native - Expo
- [ ] Native base
- [ ] Typescript
- [ ] HookForm
- [ ] Axios
- [ ] Context Api
- [ ] AsyncStorage
- [ ] Autenticação JWT





<!-- QUAL É O PROBLEMA QUE ESSE PROJETO RESOLVE E OQUE ELE FAZ? -->
## :hammer_and_wrench: Features 

- [ ] Fazer cadastro de usuario e login
- [ ] Mostrar vários exercícios disponíveis no app e visualiza-los como sao feitos
- [ ] Marcar exercício feito e mostra-lo no histotico separado por data do dia em que foi feito
- [ ] Editar senha e foto de perfil


## ♨️ Desafios e aprendizados durante o desenvolvimento
- Fazer o uso do **Native base** para trazer agilidade no projeto usando os compoentes já prontos e tambem fazer a estilização dos mesmo.
- Usar o hook useForm do **hookForm** para fazer validações em formularios. Usando essa biblioteca quando se tem varios inputs, conseguimos reduzir o uso  e a necessidade dos states na aplicação além de trabalharmos com mais flexilidade e produtividade para fazer as regras no mesmo. Por exemplo no campo de email com a ajuda da lib yup, fizemos um schema para separar melhor o codigo e fazendo os requires dos inputs, fazendo com que no futuro caso seja preciso fazer uma manutençao, esteja mais facil de trabalhar na nova feature.
- Usar o **Context Api** para compartilharmos estados, funções de modo global sem precisar ficar repassando de componente para componente.
- Fazer a usuario pesistir informaçoes ao sair do aplicativo usando o **AsyncStorage**.
-  Fazer integração e consumir uma **API** usando o **Axios**



## ⚙️ Executando o projeto
Pré requisitos para rodar o projeto:
- Node.js (LTS) instalado na maquina
- Gerenciador de pacote NPM ou YARN



```bash
# Clone o repositório
$ git clone https://github.com/FabricioAllves/ignite-gym.git

# Entre no repositório
$ cd ignite-gym

# Com NPM
# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# Com YARN
# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn start
```






## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<br />

<div align="center">
  <small>Desenvolvido por Fabricio Henrique</small>
</div>
