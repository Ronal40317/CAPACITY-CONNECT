@echo off
cd /d "%~dp0"
where py >nul 2>&1
if %errorlevel%==0 (
  py -m http.server 8000
) else (
  python -m http.server 8000
)
