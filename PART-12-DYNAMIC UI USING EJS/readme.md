<!-- // -->
----------------AIM---------------------------
1-- dynammic ui - k mtlb h ki run time per html flile k datat m change hona like iss m 2case possible h 
case1 - koi website h or abi 3 user dak rha alg alg device s ok to tino ko same content dikk rha h uss website per kisi portion pai but content h wo change hora h but chnage sab k lya same h ok
case2 - koi website h ok 3 user same website ko open kr rha h but tino k lya content jo h run time pai wo alg ha, or chance h ki wo content bhi chnge hora h or aybe diff hiho or kya same yes its possible or bit both ok like gmail apni mail apna app ko dikga n ok
case3 - ki diff device pai screen size k acc, diff apis or sab bhi k according content bhi change hota h

2--  soon we will se about ejs , embede javascript which use to dynmic a our html ok

-----------for dynamic ui-------------------
1-- sabsa phla to jo content dikna h uski lkr ana hoga jo ki step1 hoga 
step2 mai fr eje s us krka usi show krga ok
2-- step1 m ek array banuga ok frr uss array m data store kruga as a value or object in key values paise from form data jo h recive krkrha h ok
3-- step2 ejs meaning embebd jabavscript - js within html-- javascript code inside html file ok - 

-----------------ejs-----------------------

what is ejs--------------------------------
0-- ejs is teplating engine ha means ej view engine h
1-- ejs h kya clear h woto ki javascript code inside html file
2-- iska 3sytnax hai 
a- <% %>, wo use hota h jiska ui sai direct use n ho code k ok
b - <%=%>, uska lya use hota h jiska direct use hota h ui m ok
c - <%- include('partial/html file like header)> , yha wo code of pic hota h jo her ek page means her ek html file m same hota h to uder partial krka asa kuch use hota h kuch iss tra smj lo ki like react m compmnent bna tha reuse krnak lya same wesa hi h aim ider bhi ok
3-- ek is m hota h partial jo ki use hota h reusing code k lya ok , kusch code fix h or wo 3-4 diff html means ejs file m use hora h to uss time iska use hota h

------------------------------download ejs
1-- ejs download krga prga as a pacakge for express memans as amidlle ware hi use hoga like path k time kya tha ok
2-- app.set k throgh hmko express ko btana hoga ki ((( templating engine use krkrha h jiska nae ejs h ))), 2 chij set krta h view engine , views yha option hota h bczyha defalt hota h ok but ejs must h bcz express or bhi templating engine support krtahh but view engine is for us ok

------------------------------using of ejs template
1-- JESA HI JS CODE STRT KRNA H TO 
<% JS CODE %> HTML CODE <%=%> 
ISS TRKA S JASI HTML CODE LIKNA H TO CLOSE KRO OR JAB STRT KRNA OR UI MVALUE SHOE KENI H = KSATH KRO OK
2-- res.render(file name,varaible jo dynaic h ok)

------------------------------working with partial
1-- jesa ki phla bath kri thi ki jo part code k repeation h usko avoid krna k lya use hota like react compnent for reuse ok
2-- views folder k under partial krka ek folder k jider wo part of ejs h ok
3-- <%- include("partial/html file where that repeation code is there ok")>
4-- or ider bhi partial k under hm wo dyn,ic wala kr skta h bcz eje hi to ha jissama yha sab hora h ok
5-- jo partial k under uska under kuch dynamic du-ikan h to <%=name jo main h lets ki wo vairable name vname ha > us vname ko defined krna must h
6-- to ab res.resnder jab hmna array bja ta use m object k roop  key valuye paire k sath send krna h ok

