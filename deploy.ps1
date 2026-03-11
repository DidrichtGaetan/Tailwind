# deploy.ps1 - Script de déploiement Tu Viaje Lingüístico
# Usage: .\deploy.ps1
# Usage avec message de commit: .\deploy.ps1 -Message "description des changements"

param(
    [string]$Message = "Build: mise a jour du site"
)

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOIEMENT TU VIAJE LINGUISTICO" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Encodage UTF-8 SANS BOM (evite la corruption des accents)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# 1. Compiler le CSS Tailwind
Write-Host "[1/4] Compilation CSS Tailwind..." -ForegroundColor Yellow
npx tailwindcss -i ./style.css -o ./dist/output.css --minify
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERREUR: La compilation CSS a echoue!" -ForegroundColor Red
    exit 1
}
Write-Host "  CSS compile avec succes!" -ForegroundColor Green

# 2. Copier tous les fichiers HTML dans dist/ (Copy-Item preserve l'encodage original)
Write-Host ""
Write-Host "[2/4] Copie des fichiers HTML vers dist/..." -ForegroundColor Yellow
Copy-Item -Path ".\*.html" -Destination ".\dist\" -Force
Copy-Item -Path ".\style.css" -Destination ".\dist\style.css" -Force
Copy-Item -Path ".\script.js" -Destination ".\dist\script.js" -Force
# Copie les ressources avec robocopy (evite le double-nesting dist/ressources/ressources)
robocopy ".\ressources" ".\dist\ressources" /E /NFL /NDL /NJH /NJS | Out-Null
Write-Host "  Fichiers copies avec succes!" -ForegroundColor Green

# 3. Corriger les chemins CSS dans dist/ (dist/output.css -> output.css)
# Utilise UTF-8 sans BOM pour ne PAS corrompre les accents
Write-Host ""
Write-Host "[3/4] Correction des chemins CSS dans dist/..." -ForegroundColor Yellow
Get-ChildItem -Path ".\dist\*.html" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, $utf8NoBom)
    $fixed = $content -replace 'href="dist/output\.css"', 'href="output.css"'
    if ($content -ne $fixed) {
        [System.IO.File]::WriteAllText($_.FullName, $fixed, $utf8NoBom)
        Write-Host ("  Corrige: " + $_.Name) -ForegroundColor Gray
    }
}
Write-Host "  Chemins corriges avec succes!" -ForegroundColor Green

# 4. Git add, commit, push
Write-Host ""
Write-Host "[4/4] Deploiement sur GitHub (-> Netlify)..." -ForegroundColor Yellow
git add dist/
git add *.html
git add style.css
git add script.js
git commit -m $Message
git push
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERREUR: Le push Git a echoue!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  DEPLOIEMENT REUSSI!" -ForegroundColor Green
Write-Host "  Netlify va mettre a jour le site" -ForegroundColor Green
Write-Host "  dans environ 1-2 minutes." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

