# ---------------------------------------------------------------------------
# Backup phonebook_db before any destructive operation.
#
#   $env:MYSQL_PWD = '<root password>'
#   powershell -File db\backup.ps1
#
# Writes db\backups\phonebook_db_<timestamp>.sql
# ---------------------------------------------------------------------------
$ErrorActionPreference = "Stop"

$backupDir = Join-Path $PSScriptRoot "backups"
New-Item -ItemType Directory -Force $backupDir | Out-Null

$stamp   = Get-Date -Format "yyyyMMdd_HHmmss"
$out     = Join-Path $backupDir "phonebook_db_$stamp.sql"
$mysqldump = "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe"

& $mysqldump -u root phonebook_db | Out-File -Encoding utf8 $out
if ($LASTEXITCODE -ne 0) {
    throw "mysqldump failed with exit code $LASTEXITCODE"
}

Write-Host "Backup written to $out"
