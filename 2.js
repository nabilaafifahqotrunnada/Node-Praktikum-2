//membuat class
class hargaBelanja{
    //konstruktor berisi atribut dari Bu Astuti
    constructor(b,g,t,m){
        this.beras = b
        this.gula = g
        this.telur = t
        this.minyakgoreng = m
    }

    //fungsi yang berisi operasi harga dan penambahan seluruhnya
    total = () => {
        return (this.beras * 10000) + (this.gula * 14000) + 
        (this.telur * 20000) + (this.minyakgoreng * 9000)
    }
}

//pembuatan objek yang digunakan
let totalBelanja = new hargaBelanja(5,5,2,10)

//tampil total harga belanja yang harus dibayar Bu Astuti
console.log("Total belanja yang harus dibayar = " + totalBelanja.total());