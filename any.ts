import { Titulo }  from './Titulo';
import { Informacion_del_prestatario } from "./Informacion del prestatario"; 
import { Reserva } from './Reserva';
  
const Las_del_python=new Titulo ("Irvin","Jorge","894-789-546","2")
console.log(Las_del_python);

const Chity=new Informacion_del_prestatario ("Citlaly ","Col pemex","Activo","128906576")
console.log(Chity);

const Irvin=new Informacion_del_prestatario ("Irvin","Col Rueda","Activo","jsdhbvfea")
console.log(Irvin);

const Re=new Reserva ("20/10/2022");
Re.agregar_reseva("4",Las_del_python,Chity);

Re.agregar_reseva("19",Las_del_python,Irvin)
console.log (Re.Listas_reserva());

