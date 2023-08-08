@REM curl "https://dev178985.service-now.com/api/remote_help_request/v1/sn_it_request/?query=active=true" 
@REM --header "Accept: application/json" 
@REM --header "Content-Type: application/json" 
@REM {
@REM   "source":"Cerner",
@REM }

set "$URL=https://dev178985.service-now.com/api/remote_help_request/v1/sn_it_request/?query=active=true"
set "$h1=--header "Accept: application/json""
set "$h2=--header "Content-Type: application/json""
set "$source={"source":"Global",}"
set "$Auth=--user "admin":"qync4CDljS%@K2JN""

curl "%$URL%" %$h1% %$h2% %$source% %$Auth%

PAUSE