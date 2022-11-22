export class Informacion_del_prestatario{

    private nombre:string="";
    private direcc:string="";
    private estado:string="";
    private codigo:string="";

    constructor(nombre:string,direcc:string,estado:string,codigo:string){
        this.direcc=direcc;
        this.nombre=nombre;
        this.codigo=codigo;
        this.estado=estado;
    }

    public get_nombre():string{
        return this.nombre;
     }
 
     public set_nombre(nombre:string){
         this.nombre=nombre;
     }
     public get_direcc():string{
        return this.direcc;
     }
 
     public set_direcc(direcc:string){
         this.direcc=direcc;
     }

     public get_estado():string{
        return this.estado;
     }
 
     public set_estado(estado:string){
         this.estado=estado;
     }
     public get_codigo():string{
        return this.codigo;
     }
 
     public set_codigo(codigo:string){
         this.codigo=codigo;
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
}