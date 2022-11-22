import { Titulo } from './Titulo';
import { Informacion_del_prestatario } from './Informacion del prestatario';
export class Reserva{

    private fecha:string;
    private reserva: any[]=[]
    private id=0;

    constructor(fecha:string){
        this.fecha=fecha

    }

    public get_Fecha():string{
        return this.fecha;
     }
 
     public set_Fecha(fecha:string){
         this.fecha=fecha;
     }

     
    public crear (crear: string): string{
        return crear;
    }
    public destriur (destriur: string): string{
        return destriur;
    }
    public encontrar (encontrar: string): string{
        return encontrar;
    }
    public agregar_reseva (No_reserva:string,Titulo:Titulo,Informacion_del_prestatario:Informacion_del_prestatario):void{
        this.id++;
        let registro={
            registro:this.id,
            Informacion_del_prestatario:Informacion_del_prestatario,
            Estado:'Proceso',
            No_reserva:No_reserva,
            Titulo:Titulo,
            
        };
        this.reserva.push(registro);
    }
    public Listas_reserva():void{
        console.log(this.reserva);
    }

}