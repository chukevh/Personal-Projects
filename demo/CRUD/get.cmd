set "$URL=http://localhost:8080/api/v1/student"
set "$GET=--request GET"
set "$h1=--header "Accept:application/json""
set "$Auth=--user 'admin':'admin'"
set "$user={"name:"Roger","email":"roger.msrk@hotmail.com","dob":"1995-09-22"}"
@REM "qync4CDljS%@K2JN""

curl "%$URL%" %$GET% %$h1% 

@REM %$user%
@REM %$Auth%

PAUSE