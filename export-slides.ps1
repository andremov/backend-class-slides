# Export all Slidev slides to PDF

$slidevFiles = @(
    "01-week/01-introduccion-curso.md",
    "01-week/02-info-previa.md",
    "01-week/03-introduccion-backend.md",
    "01-week/04-introduccion-javascript.md",
    "02-week/05-git-basico.md",
    "02-week/06-javascript-basico.md",
    "02-week/08-javascript-intermedio.md",
    "04-week/11-javascript-avanzado-1.md",
    "07-week/17-git-2.md",
    "07-week/18-node.md",
    "07-week/19-endpoints.md",
    "07-week/20-typescript.md",
    "08-week/21-arquitectura.md",
    "08-week/22-paradigmas.md",
    "08-week/23-mongoose.md",
    "00-filler/06b-docker.md",
    "00-filler/08b-equipo.md",
    "00-filler/09b-agile.md",
    "00-filler/10b-dry-vs-wet.md",
    "00-filler/11b-lint.md",
    "00-filler/12b-pipelines.md",
    "10-week/27-embedidos.md",
    "10-week/28-autenticacion.md",
    "10-week/29-encriptacion.md",
    "11-week/29-pruebas.md",
    "11-week/30-supertest.md"
)

foreach ($file in $slidevFiles) {
    $output = $file -replace '\.md$', '.pdf'
    Write-Host "Exporting $file to $output..." -ForegroundColor Cyan
    npx slidev export $file --output $output --dark
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  Success" -ForegroundColor Green
    } else {
        Write-Host "  Failed" -ForegroundColor Red
    }
}

Write-Host "`nAll exports complete!" -ForegroundColor Green
