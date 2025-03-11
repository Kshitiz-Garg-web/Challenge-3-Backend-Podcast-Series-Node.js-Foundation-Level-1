// 1 event driven 
//1.1- event driven ma kuch iss tra h ki koi action hua h suppose kisi user k throght to jider user n action kya h wha ek listener h jiska passs kuch callbacks means ku kam h krna ko jo wo kam trigger krga ,,,to jesa hi wo listen krha h to ki yes abb time aga h to abb yha permsiion deta h event loop or frr event handler wo kam kr deta h means ki rewct kr tha h,,,,,,,,,,,,,,,,ager m sai smj rha hu to ek h jo sunn rha h or wo persmision yha key deta h ek llop ko jab usko suni dai ki abb time key dena k ----key wo kam h ok----or event loop wo keey deta usss chij ko hnalder jisko wo kam rkna hota h kuch isi tra h kya


// 2 single thread
//2.1 all kam event loop kr rha h quee bna kr ek line 
//2.2 thread pool hota h kisss ka workers k ------ each worker have own thread
//2.3 main excution kam m kruga event loop rest pass to worker thread
//2.4 jo kam time taken wala hota h wo worker thread ko deta h or jo kan worker thread k pura hota h to worlkker thread wo kam lkr return jata h event loop k pass btana k lya ki yha kam hoga or kuich kam h kya
//2.5 work from event loop to wrokers----register callback && finsihed work from worker to event loop -----operation complete call back
//2.6 jo kam hoker aa rha h wo frr sab jkr waite krta h queen m  at the end frr hmna apna kam k hisab s ek perority set kr rki kuch type of work k lya ki phla isst ype k work hona chai or frrr yha walal

//3 V8 vs libuv
//case 1 V8
//3.1 v8 englkine ek chrome k h --- or sab diff operting system k lya diff v8 engkine h per h wo google k hi 
//3.2 v8 engine diff krtika s diff code lines h alg alg system k lya per hmere code file to same hi to hota yha ki v8 engine hmere code ko leta h but design iss tra h ki wo mere code ko her system k lya adjust krka seth krta h basak uska samna koi s bhi operating system ho 
//3.3 open sourse h 
//case 2 LIBUV
//3.1 SAME ALSO MULTI PLATEFORM H LIKE V8 KI  diff sysy like lenux,window etc k lya diff liki but as a user hmko isi chinta n krni h hmko to ek hi trka s likna h
// 3.2 iska sara kma worker thread k hota h mens wo sara kma jo time takne isi k dware hota h 
// 3.3 or yha provide krta h event driven jo ki hmna sabsa phla disscusr kra h
//3.4 knsa kam krta h like file system, networking, timer, non blocking across cross platefprm
//3.5 node k run time 2 chij exist krti h ---- v8 and libuv,  v8 k kam hmra js code ko machine code m convert krta h or chlata h,,,,,,,libuv c++ ki libery h jo workers thread , asyn wala kam rta h
//3.6 main kam to ider fr libuv k hi h or v8 to bas hmra code asyn code k js code s mschine code m krka dai rha h 

//4 how node run time is working 
//4.1





//5 PERORITY LEVEL IN EVENT LOOP
//5.1 - SEE IN PERORITY DECREASING ORDER
// ---TIMER LIKE SETIME OUT , SET TIME INTERBVAL <-------- PENDING CALL BACKS LIKE IO means pending work of previouse  <----------- idle , prepare use hota h internal changes k lya yaa fr state chnge krna k lya <---------- poll ????? iska nai pta mere to tum bato details m ok<----------- check means ki wo jo bhia abhi yha kam krna h like setimmediate()<--------close callback meansw clean wala kam optimzation ka 

//5.2 or yha cycle repeate hoti rhti h,,event quee k under jab kam workes k throgu hoer ajta h uss time yha seq kam ati h ki ab knsa phla excute krna h kyuki sab hi ready h

//6 asyn and blocking code
//6.1 fs.writefile is a asyn code h
//6.2 fs.writefileSync is a syn fun jo ki phla mere kam kro frr or koi , exapmle of blocking code---means ki asa kam jo time taken h unko restrict krna ki phla mere kam hoga to frr kuch aga hoga un code ko blocking code bolga

//7 quee
//7.1 hmna pda h event quue k bara m or uska under rka diff codes k lya diif perooity like jo hmna uper disscuse kra h ok but ek quee or hota h micotask quee jo ki handle krta h promisees ko or inki peroirty event quee s bhi high hoti h 