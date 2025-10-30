# Script de configuração rápida do MySQL para PuppyCare
# Execute este script no PowerShell do diretório back-end

Write-Host "🐕 PuppyCare - Configuração do Banco de Dados MySQL" -ForegroundColor Cyan
Write-Host ""

# Verificar se o Docker está disponível
Write-Host "Verificando Docker..." -ForegroundColor Yellow
$dockerAvailable = $null -ne (Get-Command docker -ErrorAction SilentlyContinue)

if ($dockerAvailable) {
    Write-Host "✅ Docker encontrado!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Escolha uma opção:" -ForegroundColor Cyan
    Write-Host "1. Usar Docker (Recomendado - mais rápido)" -ForegroundColor White
    Write-Host "2. Usar MySQL instalado localmente" -ForegroundColor White
    Write-Host "3. Sair" -ForegroundColor White
    
    $choice = Read-Host "Digite sua escolha (1, 2 ou 3)"
    
    if ($choice -eq "1") {
        Write-Host ""
        Write-Host "🐳 Iniciando MySQL com Docker..." -ForegroundColor Yellow
        
        # Parar e remover container antigo se existir
        docker stop puppycare-mysql 2>$null
        docker rm puppycare-mysql 2>$null
        
        # Iniciar com docker-compose
        if (Test-Path "docker-compose.yml") {
            Write-Host "Usando docker-compose..." -ForegroundColor Yellow
            docker-compose up -d
        } else {
            # Fallback para docker run
            Write-Host "Criando container MySQL..." -ForegroundColor Yellow
            docker run --name puppycare-mysql `
                -e MYSQL_ROOT_PASSWORD=password `
                -e MYSQL_DATABASE=puppycare `
                -p 3306:3306 `
                -d mysql:8.0
        }
        
        Write-Host "⏳ Aguardando MySQL inicializar (30 segundos)..." -ForegroundColor Yellow
        Start-Sleep -Seconds 30
        
        Write-Host "✅ MySQL rodando no Docker!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📝 Informações de conexão:" -ForegroundColor Cyan
        Write-Host "   Host: localhost" -ForegroundColor White
        Write-Host "   Porta: 3306" -ForegroundColor White
        Write-Host "   Usuário: root" -ForegroundColor White
        Write-Host "   Senha: password" -ForegroundColor White
        Write-Host "   Database: puppycare" -ForegroundColor White
        Write-Host ""
        
        # Configurar o banco
        Write-Host "🔧 Configurando o banco de dados..." -ForegroundColor Yellow
        npm run db:setup
        
        Write-Host ""
        Write-Host "✅ Configuração concluída!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📚 Comandos úteis:" -ForegroundColor Cyan
        Write-Host "   docker-compose stop     - Parar o MySQL" -ForegroundColor White
        Write-Host "   docker-compose start    - Iniciar o MySQL" -ForegroundColor White
        Write-Host "   docker-compose down     - Remover o MySQL" -ForegroundColor White
        Write-Host "   npm run prisma:studio   - Abrir interface visual" -ForegroundColor White
        Write-Host "   npm run dev             - Iniciar servidor" -ForegroundColor White
        
    } elseif ($choice -eq "2") {
        Write-Host ""
        Write-Host "📋 Usando MySQL local..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Certifique-se de que:" -ForegroundColor Yellow
        Write-Host "1. O MySQL está instalado e rodando" -ForegroundColor White
        Write-Host "2. O arquivo .env está configurado corretamente" -ForegroundColor White
        Write-Host "3. O banco 'puppycare' foi criado" -ForegroundColor White
        Write-Host ""
        
        $continue = Read-Host "Tudo configurado? (s/n)"
        
        if ($continue -eq "s" -or $continue -eq "S") {
            Write-Host "🔧 Configurando o banco de dados..." -ForegroundColor Yellow
            npm run db:setup
            
            Write-Host ""
            Write-Host "✅ Configuração concluída!" -ForegroundColor Green
        } else {
            Write-Host ""
            Write-Host "📖 Consulte o arquivo MYSQL_SETUP.md para instruções detalhadas" -ForegroundColor Cyan
        }
        
    } else {
        Write-Host "Saindo..." -ForegroundColor Yellow
        exit
    }
    
} else {
    Write-Host "⚠️  Docker não encontrado" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Você precisará:" -ForegroundColor Cyan
    Write-Host "1. Instalar o MySQL localmente (XAMPP, MySQL Community Server, etc.)" -ForegroundColor White
    Write-Host "2. Criar o banco 'puppycare'" -ForegroundColor White
    Write-Host "3. Configurar o arquivo .env com suas credenciais" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 Consulte o arquivo MYSQL_SETUP.md para instruções detalhadas" -ForegroundColor Cyan
    Write-Host ""
    
    $continue = Read-Host "MySQL já está configurado? (s/n)"
    
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
