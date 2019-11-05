:: Remove any quotes inside each of the parameters.

set Name=%1
set Name=%Name:"=%

set Source=%2
set Source=%Source:"=%

set Destination=%3
set Destination=%Destination:"=%

:: Generate an MDB file.

pdb2mdb "%Source%%Name%.dll"

:: Copy the DLL, MDB, and XML files.

if exist "%Source%%Name%.dll" (
	copy "%Source%%Name%.dll" "%Destination%%Name%.dll"
)

if exist "%Source%%Name%.dll.mdb" (
	copy "%Source%%Name%.dll.mdb" "%Destination%%Name%.dll.mdb"
)

if exist "%Source%%Name%.xml" (
	copy "%Source%%Name%.xml" "%Destination%%Name%.xml"
)