set "$URL=http://localhost:8080/api/v1/student/1?name=Lin&email=erica.xg@hotmail.com"
set "$PUT=-X PUT"
set "$h1=-H "Content-Type:application/json""
set "$Auth=--user 'admin':'admin'"
set "$user=-d "{\"name\":\"Roger\",\"email\":\"roger.msrk@hotmail.com\",\"dob\":\"1995-09-22\"}""
@REM "qync4CDljS%@K2JN""

curl "%$URL%" %$PUT%

@REM %$Auth%

PAUSE

@REM curl "https://dev178985.service-now.com/api/now/table/incident?sysparm_limit=1" \
@REM --request GET \
@REM --header "Accept:application/json" \
@REM --user 'admin':'admin'