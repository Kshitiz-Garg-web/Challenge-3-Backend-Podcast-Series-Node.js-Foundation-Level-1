------------use's of express router
1--jesa ki ek website k lya, user pannel hota h , or ek admin pannel hota h ok yes
2-- dono k lya apna kuch specific routing handling krni pertu h + kuch comon handling bhi krni prti h 
3-- handling for routing 1,2 is for user panel -- handling for routing 3,4 is for admin panel 
-- handling for routing 5,6 is for both pannel 
4-- inn dono k lya alg file leta h uer routing,admin routing krka ek routing folder  m ok
5-- express k app to ek h kyuki, server to ek hai
6-- to frr ksi or folder k under kisi file m app k use kesa krga not possiblt to frr per middle ware k use to kena h ,,,,,, express k router fun k use kro ok,,,express ek new router bna do mere lya admin pannekl k lya--express ek new router bna do mere lya user pannekl k lya 

------------if comman path k issue h to
1-- /home/something is for user panel ok
/home/something is for user admin ok
so what we can do , is that 
/user/home/something is for user panel ok
/admin/home/something is for user admin ok
in that we can decided ki knsa url , knsa path kiss ks k lya h bina express rotuer ya router app alag alg file bna kr ok
2-- one more way to app.use("/host",userRouter),,to frr concante ho jata h uder s ok

------------use's of express.urlencode() in place of body-parser
1-- in place of body parser to download we can use from express directly , app.use(express.urlencoded());,,,,her req  p check kro ki kya body hai h to kya to frr strting m concole k bad hi use p lya di ok

------------adding 404
1-- mdl1 for console req,method for corees each ,middleware then mdl2 by using bodyparse , jo ki aga k lya body hmra pass ready ho ok , mdl 3 is for user routes k trg lkr aga ok , mdl 4t lkr jaka admin panel k trf ok or at the end ager kai bhi req match n krta h to 404 k lya ek mdl 5th set krga app m hi ok ,,,or ager m phla 404 strting mdl set kjta hu to hmsa wo hi set hoga bcz , seq is matter islya last m rkga ok

------------adding html files in views folder ok
1-- in view folder , sara html file rko 
2-- bow we can use id advantage/modularit and etc lot of things 

------------serving html files
1-- it is done by 2 ways 1st by using relative parth ok and 2nd is by using absolute path along with util folder ok

2-- comon in both way is that , is must to use a path core modules ok

3-- res.sendFile(path.join(__dirname,'../','views','404.html')),,,use in place of res.send(`html code`) and is this all by using reltive path ok

4-- 2nd way of absoluten path , using file helper

