// const mname="amila"
// console.log(mname)  //run node file--->node index

//create packge jason file------------>npm init
//entry point =main file




import { fileURLToPath, pathToFileURL } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);     //avoid the errors which after add 'type':'module' into packge json file 


                                //OS PACKGE
//const os=require("os");
import os from 'os';//ES6------->"'type':'module'" add into  packge.json 

console.log(os.platform())//win32
console.log(os.version())//can get operating system 
console.log(__dirname);//full path
console.log(__filename)//with file name path

                                //OS PACKGE
//const path=require("path");
import path from 'path';//ES6  ---->"'type':'module'" add into  packge.json 
console.log(path.basename(__filename));//path aken file name eka vitark gann oni unot path packge use kari
console.log(path.extname(__filename));//get the file extention

console.log(path.parse(__filename));//get all the propeties of the path(root,dir,base,extention,name)







                                