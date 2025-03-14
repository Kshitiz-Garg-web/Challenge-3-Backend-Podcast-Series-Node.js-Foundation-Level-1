--------------ABOUT MVC + CONTROLLER
1- apna code ko kiss trika s de3sign kr rha ho
2- this one is best mvc
3- mvc is articheure pattern her ek code k clear hona chaqi ki iska kya kam h ider
4- yha mvc her jga java k , pyhton k etc inn sabk full stack project m use hota h like jesa ki hm mern m use kr rha h
5- clear  h ki folder strtutre kya h , kis code k kya kam h etc.
6- sepreartion of concerns is it ok.
7- jesa ki ui krna h / suthiction krna h / etc in sab chij k beech koi n koi issue aga wo sab hmra concern h ok ini sabki ko serpeate out krna h ek sai pattern m with pice of code clear understanding
8- kuch speocfc concern view dekaga or kuch controller and kuch model ok
9- model -> k kam business logic and data handle krna yha do kam hota h
10- views k kam display data presnetation for uswers ko maintain krna k h
11- controller -> main kam h bol skta h ki, inpiut ko process krka intercact krta h model k sa th and then update krna h view accordingly ok
12- routes bhi controller k part h okhotas
13- mvc means model view controller h ok jo ki hepl krta spertrion of conercn ok;


--------------MODEL
1- JESA KI HMRA PAS ARRAY H HOMEARR KRKA OK JO KI EK MODEL H , PER HMNA ABHI KYA KHA H KI REQ JO AHI H USKA EK DAM HOMEARR K UNDER PUSH KR DYA BINA YHA CHECK , UNFOLD KRA KI ACTUAL M JO ANA CHAI THA WO H AHA H N CLECTN SIDE S BECAUSE CLENT SIDE S TO KUVH BHI AH SKTA H TO EK BHR HOMKKO CHECK BHI KRNA CHAI OR CHECK KRNA K LYA HM PUR ARR CHECK N KRGA HMM TO HMEARR K UNDER JO ITEM H UNKO CHECK KRGA OK 
2- CLASS K CONCEPT TO DEFINED A MODEL , CONSTRUTCOTRE K UNDER ALG ALG VALUES AGI JINKO HM THIS S ACCES KRGA OK
3- CONSTRUTE K UNDER AGA HOUSENAME,PRICE,LOCATION,RATING,PHOTOURL WO SAB CHIJ H JO CLIENT FORM K THORUGH POST REQ K THROS BAJ RHA THA OK
4- OBJECT K FINAL VAIVLBRE KO ACCES KRNA H TO THIS K USE KRGA, THIS.anymane = construte k under wala varible k name ;
5- kha per hm pish kr rha tha user ab hoe object bnga 
6- save and fetachall fun banga usi class home k under
7- req body pura n krga req.body.wovaorble nale lkr push krga ok
8- hmko koi asa fun bna h jo iss object s related n balki isi class s related hoto frr uss fun ko static bna do ok, jider hmko homelist chai means sab home s k object chai n ki koi home object create n krna h ok means ki jider list chai hmko display krna k lya lets to uder class k uper fetcahll call kiya h or jider hm check kr rha tha ki jo chai wo hi ara h uder uss class k object bna kr uska uper save call kr rha tha 

-----write data to file now ok
1- fs and path core module import kro ok
2- rootdir ko bhi import kro , 
3- path k join use krga then fs k write file ok

-----nodemon causing problem 
1- ab jesa hi file k under read hora h + retrive wala code n likha h to - ek proble ari h ki aoutmatically server resatrt hora h 
2- solu yha h ki retrive walal code loko ya frr nodemon ko bolo ki bhia nodemon jab bhi koi kam hora h data json file  to server ko kill rka start n kro ok
3- nodemon.json file m bolna h ok
3.1--- watch --- m yes pru filder deko ok
3.2--- ext--- means jikso tumko dekna h 
3.3--- ignore--- knsi filwe ko ignore krna h
3.4--- exec---  nodemon ko kiss ko point krna h 

--------reading data from file to retrive ok
1- fetcall m path lkr readfile us krga fs ok 
2- isiue as ska h kyuki ager hmm l,ist show krna h to uska lya fetchall m readfile use kiya h jo ki ek asyn opertion to cahnce h ki asyn k jawab ana s phla list milna k place p undeifned ajva to frr uss k lya hmko callback k use krna prga ok  read datat krna k lya callback lai lega fetcall  k under +++ fetachll ko return nai krga per jab fetcall k kam hogjga pura to callback ko call kruga ok
3- callback k under wo fake data send krdo
4- jider us kr rha h list k uder fectall hoga to ek regis home ider milga as ardyumne tuss call back ko frr code dai do for erendring