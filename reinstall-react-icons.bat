@echo off
echo Reinstalling react-icons...

:: Remove react-icons if it exists
npm uninstall react-icons

:: Install react-icons explicitly
npm install react-icons@5.5.0 --save

:: Verify installation
echo Verifying react-icons installation...
if exist "node_modules\react-icons" (
  echo ✅ react-icons successfully installed!
) else (
  echo ❌ Installation failed. Please try manually running: npm install react-icons@5.5.0 --save
)

pause