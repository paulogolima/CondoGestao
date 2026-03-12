# 🏢 CondoGestao

Sistema completo de gestão de condomínios desenvolvido com Node.js, Express e MySQL.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-5.0-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)
![License](https://img.shields.io/badge/license-ISC-lightgrey)

## 📋 Sobre o Projeto

O **CondoGestao** é uma solução moderna e escalável para gerenciar todas as operações de um condomínio, desde cadastro de moradores e unidades até controle financeiro e reservas de áreas comuns.

## 🚀 Tecnologias

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web minimalista
- **Sequelize** - ORM para MySQL
- **MySQL** - Banco de dados relacional
- **JWT** - Autenticação via tokens
- **bcrypt** - Criptografia de senhas

### Frontend *(em desenvolvimento)*
- HTML5, CSS3, JavaScript

## ✨ Funcionalidades Implementadas

### 👤 Gestão de Usuários
- ✅ Cadastro de usuários (admin/morador)
- ✅ Login com autenticação JWT
- ✅ Controle de permissões (admin/user)
- ✅ CRUD completo de usuários

### 🏠 Gestão de Unidades
- ✅ Cadastro de unidades (bloco, número)
- ✅ Status (ocupado/vago)
- ✅ CRUD completo

### 👥 Gestão de Moradores
- ✅ Cadastro de moradores
- ✅ Vinculação com unidades
- ✅ Tipos (proprietário/inquilino)
- ✅ CRUD completo

### 🔐 Segurança
- ✅ Senha criptografada (bcrypt)
- ✅ Autenticação via JWT
- ✅ Middleware de autorização
- ✅ Validação de admin

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- MySQL 8.0+
- Git

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/paulogolima/CondoGestao.git
cd CondoGestao/backend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na pasta `backend/` com:
```env
# Banco de Dados
DB_NAME=condo_gestao
DB_USER=root
DB_PASS=sua_senha
DB_HOST=localhost
DB_DIALECT=mysql

# Servidor
PORT=3000

# JWT
JWT_SECRET=sua_chave_secreta_aqui
JWT_EXPIRES_IN=7d
```

4. **Crie o banco de dados**
```sql
CREATE DATABASE condo_gestao;
```

5. **Inicie o servidor**
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## 📡 API - Endpoints

### Autenticação (público)
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/usuarios/cadastrar` | Cadastrar novo usuário |
| POST | `/usuarios/login` | Login (retorna token JWT) |

### Usuários (requer autenticação)
| Método | Endpoint | Permissão | Descrição |
|--------|----------|-----------|-----------|
| GET | `/usuarios/listar` | Admin | Listar todos os usuários |
| PUT | `/usuarios/:id` | Admin | Atualizar usuário |
| DELETE | `/usuarios/:id` | Admin | Deletar usuário |

### Unidades (requer autenticação)
| Método | Endpoint | Permissão | Descrição |
|--------|----------|-----------|-----------|
| POST | `/unidade/cadastrar` | Admin | Cadastrar unidade |
| GET | `/unidade/listar` | Usuário | Listar unidades |
| PUT | `/unidade/:id` | Admin | Atualizar unidade |
| DELETE | `/unidade/:id` | Admin | Deletar unidade |

### Moradores (requer autenticação)
| Método | Endpoint | Permissão | Descrição |
|--------|----------|-----------|-----------|
| POST | `/morador/cadastrar` | Admin | Cadastrar morador |
| GET | `/morador/listar` | Usuário | Listar moradores |
| PUT | `/morador/:id` | Admin | Atualizar morador |
| DELETE | `/morador/:id` | Admin | Deletar morador |

> **Autenticação**: Inclua `Authorization: Bearer {seu_token}` no header das requisições protegidas.

## 🗂️ Estrutura do Projeto

```
CondoGestao/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # Configuração Sequelize
│   │   ├── controller/
│   │   │   ├── userController.js    # Lógica de usuários
│   │   │   ├── unidadeController.js # Lógica de unidades
│   │   │   └── moradorController.js # Lógica de moradores
│   │   ├── middlewares/
│   │   │   └── auth.js              # Autenticação JWT
│   │   ├── model/
│   │   │   ├── User.js              # Model de usuário
│   │   │   ├── Unidade.js           # Model de unidade
│   │   │   └── Morador.js           # Model de morador
│   │   ├── routes/
│   │   │   ├── userRoutes.js        # Rotas de usuários
│   │   │   ├── unidadeRoutes.js     # Rotas de unidades
│   │   │   └── moradorRoutes.js     # Rotas de moradores
│   │   └── server.js                # Configuração do servidor
│   ├── .env.example                 # Exemplo de variáveis
│   ├── .gitignore                   # Arquivos ignorados
│   └── package.json                 # Dependências
├── frontend/                        # Em desenvolvimento
└── README.md
```

## 🛣️ Roadmap - Próximas Implementações

### 🎯 Fase 1 - Financeiro (próxima)
- [ ] Taxas de condomínio por unidade
- [ ] Lançamentos (despesas e receitas)
- [ ] Geração de boletos
- [ ] Controle de inadimplência
- [ ] Relatórios financeiros

### 🎯 Fase 2 - Reservas
- [ ] Cadastro de áreas comuns (salão, churrasqueira, quadra)
- [ ] Sistema de agendamento
- [ ] Calendário de disponibilidade
- [ ] Regras de uso e taxas

### 🎯 Fase 3 - Comunicação
- [ ] Avisos e comunicados do síndico
- [ ] Notificações por email/SMS
- [ ] Enquetes e votações
- [ ] Chat interno

### 🎯 Fase 4 - Controle de Acesso
- [ ] Registro de visitantes
- [ ] Cadastro de veículos
- [ ] Controle de entregas/encomendas
- [ ] Prestadores de serviço

### 🎯 Fase 5 - Manutenção
- [ ] Registro de ocorrências
- [ ] Ordens de serviço
- [ ] Histórico de manutenções

### 🎯 Fase 6 - Assembleia
- [ ] Convocação de assembleias
- [ ] Votação online
- [ ] Atas automáticas
- [ ] Gestão de documentos

### 🎯 Fase 7 - Melhorias
- [ ] Dashboard com indicadores
- [ ] Portal do morador (frontend completo)
- [ ] App mobile
- [ ] Integração com bancos
- [ ] Backup automático
- [ ] Testes automatizados

## 🧪 Testes

Para rodar os testes *(em desenvolvimento)*:
```bash
npm test
```

## 📄 Documentação API

A documentação completa da API está disponível em:
- [testes_thunder_client.txt](testes_thunder_client.txt) - Exemplos de requisições

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 👨‍💻 Autor

**Paulo Golima**
- GitHub: [@paulogolima](https://github.com/paulogolima)

## 📝 Licença

Este projeto está sob a licença ISC.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
