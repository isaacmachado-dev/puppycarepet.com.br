# Configuração do Banco de Dados MySQL Local para PuppyCare

## 📋 Pré-requisitos

Você precisa ter o MySQL instalado localmente. Escolha uma das opções:

### Opção 1: MySQL Community Server
1. Baixe e instale o MySQL Community Server: https://dev.mysql.com/downloads/mysql/
2. Durante a instalação, defina uma senha para o usuário `root`
3. Anote a porta (padrão: 3306)

### Opção 2: XAMPP (Recomendado para Windows)
1. Baixe o XAMPP: https://www.apachefriends.org/
2. Instale o XAMPP
3. Abra o XAMPP Control Panel
4. Inicie o serviço MySQL

### Opção 3: Docker (Mais rápido)
```powershell
docker run --name puppycare-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=puppycare -p 3306:3306 -d mysql:8.0
```

## 🔧 Configuração

### 1. Criar o Banco de Dados

#### Se você instalou MySQL diretamente:
```powershell
# Conecte ao MySQL (será solicitada a senha do root)
mysql -u root -p

# Dentro do MySQL, execute:
CREATE DATABASE puppycare CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

#### Se você usa XAMPP:
1. Abra o navegador e vá para: http://localhost/phpmyadmin
2. Clique em "New" (Novo)
3. Digite o nome: `puppycare`
4. Selecione "utf8mb4_unicode_ci" como collation
5. Clique em "Create" (Criar)

### 2. Configurar a Conexão

O arquivo `.env` já foi atualizado com:
```
DATABASE_URL="mysql://root:password@localhost:3306/puppycare"
```

**IMPORTANTE**: Ajuste os valores conforme sua instalação:
- `root` → seu usuário MySQL
- `password` → sua senha MySQL
- `localhost` → endereço do servidor (mantenha se for local)
- `3306` → porta do MySQL (mantenha se for padrão)
- `puppycare` → nome do banco de dados

### 3. Aplicar as Migrações

Execute os seguintes comandos no terminal do back-end:

```powershell
# Gerar o Prisma Client
npm run prisma:generate

# Criar as tabelas no banco de dados
npx prisma db push

# (Opcional) Popular o banco com dados de teste
npm run seed
```

## 🧪 Verificar a Conexão

Para testar se a conexão está funcionando:

```powershell
# Verificar o status do Prisma Studio
npx prisma studio
```

Isso abrirá uma interface visual no navegador (http://localhost:5555) onde você pode ver e editar os dados.

## 🚨 Solução de Problemas

### Erro: "Can't connect to MySQL server"
- Verifique se o MySQL está rodando
- No XAMPP: inicie o serviço MySQL no Control Panel
- No Windows Services: procure por "MySQL" e inicie o serviço

### Erro: "Access denied for user 'root'@'localhost'"
- Verifique a senha no arquivo `.env`
- Tente resetar a senha do MySQL

### Erro: "Unknown database 'puppycare'"
- Certifique-se de que criou o banco de dados (passo 1)
- Verifique o nome no `.env` (deve ser exatamente `puppycare`)

### Porta 3306 já em uso
- Outro serviço pode estar usando a porta
- Altere a porta no `.env` para outra (ex: 3307)
- No Docker: `-p 3307:3306`

## 📊 Comandos Úteis do Prisma

```powershell
# Ver o status das migrações
npx prisma migrate status

# Criar uma nova migração
npx prisma migrate dev --name nome_da_migracao

# Resetar o banco (CUIDADO: apaga todos os dados)
npx prisma migrate reset

# Abrir o Prisma Studio (interface visual)
npx prisma studio

# Validar o schema
npx prisma validate
```

## 🔄 Próximos Passos

Após configurar o banco de dados:

1. Execute `npm run prisma:generate` para gerar o Prisma Client
2. Execute `npx prisma db push` para criar as tabelas
3. Execute `npm run seed` para popular com dados de exemplo
4. Execute `npm run dev` para iniciar o servidor
5. Acesse http://localhost:4000/api para ver a documentação Swagger

## 📝 Notas

- **Desenvolvimento**: Use `npx prisma db push` para alterações rápidas
- **Produção**: Use `npx prisma migrate deploy` com migrações versionadas
- **Backup**: Sempre faça backup antes de executar `prisma migrate reset`
- **Segurança**: Nunca commite o arquivo `.env` com senhas reais no Git
