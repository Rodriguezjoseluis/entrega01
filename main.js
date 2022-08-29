
class libro{
    constructor( titulo , año , autor , categoria, valor){
        this.titulo = titulo;
        this.año = año;
        this.autor = autor;
        this.categoria = categoria;
        this.valor=valor
        

    }

    
}
let harry_potter_y_la_piedra_filosafal = new libro("harry potter" , "1997" , "JK Rowling", " Novela ciencia fantastica", "3200")
let harry_potter_y_la_orden_del_fenix = new libro("harry potter" , "2003" , "JK Rowling", " Novela fantastica", "3000")
let It = new libro ("it", "1986","Stephen King", "novela terror" , "2500" )
let carrie = new libro ("carrie", "1974" , "Stephen King" , "novela terror", "4500" )
let moby_dick = new libro ("moby dick" , "1851" , "Herman Melville", "novela" ,"3500")


let libro_stock = [];

libro_stock.push(harry_potter_y_la_piedra_filosafal);
libro_stock.push(harry_potter_y_la_orden_del_fenix);
libro_stock.push(It);
libro_stock.push(carrie);
libro_stock.push(moby_dick);

console.log(libro_stock)




class cuota {
    constructor(cantidad, producto,precio_producto, cuotas,) {
        this.producto = producto;
        this.precio_producto= precio_producto
        this.cantidad = cantidad;
        this.cuotas = cuotas;
        this.total = 0;
    }

    precio_total(valor, cantidad) {
        let precio = this.precio_producto* this.cantidad;
        return precio;
    }




precio_en_cuotas() {



    do {


        
        if (this.cuotas == 3) {
            let porcentaje_en_3_cuotas = ((this.precio_total(this.precio_total, this.cantidad) * 15) / 100);
            let precio_final =this.precio_total(this.precio_total, this.cantidad) + porcentaje_en_3_cuotas;
            return ("El precio final de " + producto + " es de $ " + precio_final);
        }

       

        else if (this.cuotas == 6) {
            let porcentaje_en_6_cuotas = ((this.precio_total(this.precio_total, this.cantidad) * 30) / 100)
            let precio_final = this.precio_total(this.precio_total, this.cantidad) + porcentaje_en_6_cuotas;
            return ("El precio final de " + producto + " es de $ " + precio_final);
        }

        

        else if (this.cuotas == 12) {
            let porcentaje_en_12_cuotas = ((this.precio_total(this.precio_total, this.cantidad) * 75) / 100);
            let precio_final = this.precio_total(this.precio_total, this.cantidad) + porcentaje_en_12_cuotas;
            return ("El precio final de " + producto + " es de $ " + precio_final);            
        }
        
        

    }
    while (this.cuotas);

}

}




    let producto = prompt("indique el libro");

    let precio_producto = parseInt(prompt("Indique el precio del producto"));
   
    let cantidad = parseInt(prompt("indique la cantidad del mismo "));
   
    let cuotas = parseInt(prompt("Indique las cuotas en las que desea abonar el producto, 3/6/12"));
    
    let total = new cuota(cantidad,producto,cuotas,);
    
    console.log(total.precio_en_cuotas());
    
    
    



    