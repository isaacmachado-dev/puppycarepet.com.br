# Configuração do Banco de Dados PostgreSQL para PuppyCare

## 📋 Pré-requisitos

Você precisa ter o PostgreSQL instalado localmente ou usar Docker. Escolha uma das opções:

### Opção 1: Docker (Recomendado - Mais Rápido)
```powershell
# Iniciar o PostgreSQL com Docker Compose
docker-compose up -d

# Aguardar alguns segundos para o banco inicializar
Start-Sleep -Seconds 5

# Configurar o banco de dados
npm run db:setup
```

### Opção 2: PostgreSQL Instalado Localmente
1. Baixe e instale o PostgreSQL: https://www.postgresql.org/download/
2. Durante a instalação, defina uma senha para o usuário `postgres`
3. Anote a porta (padrão: 5432)

## 🔧 Configuração

### 1. Com Docker (Recomendado)

O arquivo `docker-compose.yml` já está configurado. Basta executar:

```powershell
# Iniciar o PostgreSQL
docker-compose up -d

# Configurar e popular o banco
npm run db:setup
```

**Credenciais padrão do Docker:**
- Host: localhost
- Porta: 5432
- Usuário: puppycare
- Senha: puppycare_pass
- Database: puppycare




### 2. Com PostgreSQL Local

#### Configurar a Conexão:

Edite o arquivo `.env`:
```
DATABASE_URL="postgresql://puppycare:puppycare_pass@localhost:5432/puppycare"
```

**Ajuste conforme sua instalação:**
- `puppycare` → seu usuário PostgreSQL
- `puppycare_pass` → sua senha
- `localhost` → endereço do servidor
- `5432` → porta do PostgreSQL
- `puppycare` → nome do banco de dados


#### Criar o Banco de Dados:
```powershell
# Conectar ao PostgreSQL (será solicitada a senha)
psql -U postgres
```

```sql
-- 1. Conectado ao PostgreSQL, execute:
CREATE DATABASE puppycare
  WITH ENCODING 'UTF8'
  LC_COLLATE 'pt_BR.UTF-8'
  LC_CTYPE 'pt_BR.UTF-8'
  TEMPLATE template0
;

-- 2. Criar usuário da APP:
CREATE USER puppycare WITH PASSWORD 'puppycare_pass';

-- 3. Evitar problemas de encoding e decoding caracteres pra UTF-8:
ALTER DATABASE puppycare SET client_encoding TO 'UTF8';
ALTER ROLE puppycare SET client_encoding TO 'UTF8';

-- 4. Conectar ao banco:
\c puppycare;

-- 5. Tornar o usuário dono do banco:
ALTER DATABASE puppycare OWNER TO puppycare;

-- 6. Permissões no schema public:
GRANT USAGE, CREATE ON SCHEMA public TO puppycare;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO puppycare;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO puppycare;

-- 7. Novas tabelas:

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO puppycare;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO puppycare;

```

## Evitar problemas de Encoding e Decoding UTF-8

```sql
ALTER DATABASE puppycare SET client_encoding TO 'UTF8';
ALTER ROLE puppycare SET client_encoding TO 'UTF8';
```


### 3. Aplicar as Migrações

Execute os seguintes comandos:

```powershell
# Gerar o Prisma Client
npm run prisma:generate

# Criar as tabelas no banco de dados
npx prisma db push

# (Opcional) Popular o banco com dados de teste
npm run seed
```

## 🧪 Verificar a Conexão

### Usando Prisma Studio (Interface Visual)
```powershell
npx prisma studio
```

Isso abrirá uma interface visual no navegador (http://localhost:5555) onde você pode ver e editar os dados.

### Usando psql (Cliente de Terminal)
```powershell
# Com Docker
docker exec -it puppycare-postgres psql -U puppycare -d puppycare

# Com instalação local
psql -U puppycare -d puppycare
```

## 🚨 Solução de Problemas

### Erro: "Can't reach database server"
- **Docker**: Verifique se o container está rodando: `docker ps`
- **Docker**: Inicie o container: `docker-compose up -d`
- **Local**: Verifique se o serviço PostgreSQL está rodando

### Erro: "password authentication failed"
- Verifique a senha no arquivo `.env`
- No PostgreSQL local, você pode redefinir a senha:
  ```sql
  ALTER USER puppycare WITH PASSWORD 'nova_senha';
  ```

### Erro: "database does not exist"
- Certifique-se de que criou o banco de dados (passo 2)
- Verifique o nome no `.env` (deve ser exatamente `puppycare`)

### Porta 5432 já em uso
- Outro serviço PostgreSQL pode estar usando a porta
- Altere a porta no `docker-compose.yml` e no `.env`
- Exemplo: `- "5433:5432"` no docker-compose e `:5433` no .env

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

# Formatar o schema
npx prisma format
```

## 📊 Comandos Úteis do Docker

```powershell
# Ver logs do PostgreSQL
docker-compose logs -f postgres

# Parar o PostgreSQL
docker-compose stop

# Iniciar o PostgreSQL
docker-compose start

# Remover o container e dados (CUIDADO!)
docker-compose down -v

# Acessar o shell do container
docker exec -it puppycare-postgres bash
```

## 🔄 Próximos Passos

Após configurar o banco de dados:

1. Execute `npm run prisma:generate` para gerar o Prisma Client
2. Execute `npx prisma db push` para criar as tabelas
3. Execute `npm run seed` para popular com dados de exemplo
4. Execute `npm run dev` para iniciar o servidor
5. Acesse http://localhost:4000/api para ver a documentação Swagger

## 📝 Notas Importantes

- **Desenvolvimento**: Use `npx prisma db push` para alterações rápidas
- **Produção**: Use `npx prisma migrate deploy` com migrações versionadas
- **Backup**: Sempre faça backup antes de executar `prisma migrate reset`
- **Segurança**: Nunca commite o arquivo `.env` com senhas reais no Git
- **Performance**: PostgreSQL oferece melhor performance para produção que SQLite
- **Recursos**: PostgreSQL suporta recursos avançados como JSON, full-text search, etc.

## 🎯 Vantagens do PostgreSQL

✅ **Performance superior** em ambientes de produção  
✅ **ACID compliant** - transações confiáveis  
✅ **Suporte a JSON/JSONB** - dados semi-estruturados  
✅ **Full-text search nativo**  
✅ **Extensões poderosas** (PostGIS, pg_trgm, etc.)  
✅ **Escalabilidade** horizontal e vertical  
✅ **Open source** e amplamente usado em produção  
