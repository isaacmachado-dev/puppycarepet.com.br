# Script de configuração rápida do PostgreSQL para PuppyCare
# Execute este script no PowerShell do diretório back-end

Write-Host "🐕 PuppyCare - Configuração do Banco de Dados PostgreSQL" -ForegroundColor Cyan
Write-Host ""

# Verificar se o Docker está disponível
Write-Host "Verificando Docker..." -ForegroundColor Yellow
$dockerAvailable = $null -ne (Get-Command docker -ErrorAction SilentlyContinue)

if ($dockerAvailable) {
    Write-Host "✅ Docker encontrado!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Escolha uma opção:" -ForegroundColor Cyan
    Write-Host "1. Usar Docker (Recomendado - mais rápido)" -ForegroundColor White
    Write-Host "2. Usar PostgreSQL instalado localmente" -ForegroundColor White
    Write-Host "3. Sair" -ForegroundColor White
    
    $choice = Read-Host "Digite sua escolha (1, 2 ou 3)"
    
    if ($choice -eq "1") {
        Write-Host ""
        Write-Host "🐳 Iniciando PostgreSQL com Docker..." -ForegroundColor Yellow
        
        # Parar e remover container antigo se existir
        docker stop puppycare-postgres 2>$null
        docker rm puppycare-postgres 2>$null
        
        # Iniciar com docker-compose
        if (Test-Path "docker-compose.yml") {
            Write-Host "Usando docker-compose..." -ForegroundColor Yellow
            docker-compose up -d
        } else {
            # Fallback para docker run
            Write-Host "Criando container PostgreSQL..." -ForegroundColor Yellow
            docker run --name puppycare-postgres `
                -e POSTGRES_USER=puppycare `
                -e POSTGRES_PASSWORD=puppycare_pass `
                -e POSTGRES_DB=puppycare `
                -p 5432:5432 `
                -d postgres:16-alpine
        }
        
        Write-Host "⏳ Aguardando PostgreSQL inicializar (10 segundos)..." -ForegroundColor Yellow
        Start-Sleep -Seconds 10
        
        Write-Host "✅ PostgreSQL rodando no Docker!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📝 Informações de conexão:" -ForegroundColor Cyan
        Write-Host "   Host: localhost" -ForegroundColor White
        Write-Host "   Porta: 5432" -ForegroundColor White
        Write-Host "   Usuário: puppycare" -ForegroundColor White
        Write-Host "   Senha: puppycare_pass" -ForegroundColor White
        Write-Host "   Database: puppycare" -ForegroundColor White
        Write-Host ""
        
        # Configurar o banco
        Write-Host "🔧 Configurando o banco de dados..." -ForegroundColor Yellow
        npm run db:setup
        
        Write-Host ""
        Write-Host "✅ Configuração concluída!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📚 Comandos úteis:" -ForegroundColor Cyan
        Write-Host "   docker-compose stop     - Parar o PostgreSQL" -ForegroundColor White
        Write-Host "   docker-compose start    - Iniciar o PostgreSQL" -ForegroundColor White
        Write-Host "   docker-compose down     - Remover o PostgreSQL" -ForegroundColor White
        Write-Host "   npm run prisma:studio   - Abrir interface visual" -ForegroundColor White
        Write-Host "   npm run dev             - Iniciar servidor" -ForegroundColor White
        Write-Host ""
        Write-Host "   Acessar banco via psql:" -ForegroundColor Cyan
        Write-Host "   docker exec -it puppycare-postgres psql -U puppycare -d puppycare" -ForegroundColor White
        
    } elseif ($choice -eq "2") {
        Write-Host ""
        Write-Host "📋 Usando PostgreSQL local..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Certifique-se de que:" -ForegroundColor Yellow
        Write-Host "1. O PostgreSQL está instalado e rodando" -ForegroundColor White
        Write-Host "2. O arquivo .env está configurado corretamente" -ForegroundColor White
        Write-Host "3. O banco 'puppycare' foi criado" -ForegroundColor White
        Write-Host "4. O usuário 'puppycare' tem permissões" -ForegroundColor White
        Write-Host ""
        
        $continue = Read-Host "Tudo configurado? (s/n)"
        
        if ($continue -eq "s" -or $continue -eq "S") {
            Write-Host "🔧 Configurando o banco de dados..." -ForegroundColor Yellow
            npm run db:setup
            
            Write-Host ""
            Write-Host "✅ Configuração concluída!" -ForegroundColor Green
        } else {
            Write-Host ""
            Write-Host "📖 Consulte o arquivo POSTGRES_SETUP.md para instruções detalhadas" -ForegroundColor Cyan
        }
        
    } else {
        Write-Host "Saindo..." -ForegroundColor Yellow
        exit
    }
    
} else {
    Write-Host "⚠️  Docker não encontrado" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Você precisará:" -ForegroundColor Cyan
    Write-Host "1. Instalar o PostgreSQL localmente" -ForegroundColor White
    Write-Host "2. Criar o banco 'puppycare' e usuário" -ForegroundColor White
    Write-Host "3. Configurar o arquivo .env com suas credenciais" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 Consulte o arquivo POSTGRES_SETUP.md para instruções detalhadas" -ForegroundColor Cyan
    Write-Host ""
    
    $continue = Read-Host "PostgreSQL já está configurado? (s/n)"
    
    if ($continue -eq "s" -or $continue -eq "S") {
        Write-Host "🔧 Configurando o banco de dados..." -ForegroundColor Yellow
        npm run db:setup
        
        Write-Host ""
        Write-Host "✅ Configuração concluída!" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "🚀 Próximo passo: Execute 'npm run dev' para iniciar o servidor!" -ForegroundColor Green
Write-Host ""
