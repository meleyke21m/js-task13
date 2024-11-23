//tasks
// Car adinda class yaradin daxilinde brand(markasi : Toyata ornek) i olsun modeli year price color percent(faizi) olsun
// getDetail adinda func olsun masin haqqinda melumatlari logda gostersin
// faizi hesablayacaq function olsun yeni pricenin qiymetini goturub
//  verilen faize gore yeni qiymetini tapib menimsetsin priceye 
// 1 den cox Car dan istifade ederek masinlar yaradin
// SportsCar  adindan class yaradin ve car dan extend etsin
// sportCara da cardaki deyisenler elave olunsun elave olaraqda topSpeed elave olunsun
// toSpeed(masinin sureti)
// daxilinde getDetail adinda func olsun superden isdifade edib extend olunan detail melumatini
// goturun elave olaraq maksimum suretinide qeyd edin
// daxilinde incrementSpeed adinda metod olsun ve sureti 10% artirsin 
// butun functionlari cagirib logda gosterin masinin qiymeti sonra endirimli qiymeti
// masinin sureti artiriliqdan sonra sureti ve.s 
// Sual olduqda pls qrupa yazin , ugurlar :)

class car{
    constructor(brend,model,year,price,color,precent){
        this.brend=brend
        this.model=model
        this.year=year
        this.price=price
        this.color=color
        this.precent=precent
    }
    getModel(){
        return `masin markasi melumatlari :${this.brend} modeli: ${this.model} ili: ${this.year} qiymeti: ${this.price} rengi: ${this.color}`
        
    }
    calculatePrecent(){
        console.log("endirim olundu");
        
        this.price*=(100-this.precent)/100;
    }

}
class sportscar extends car{
    constructor(brend,model,year,price,color,precent,toSpeed,speedpercent){
        super(brend,model,year,price,color,precent)
        this.toSpeed=toSpeed
        this.speedpercent=speedpercent
    }
    getModel(){
        console.log(super.getModel(), "sureti"+ this.toSpeed);
        
    }
    incrmentspeed(){
        let newspeed=this.toSpeed * (100 - this.speedpercent)/100;
        this.toSpeed += this.toSpeed-newspeed;
        console.log(newspeed);
        
    }
}

const sport1=new sportscar("ferrari","m123","2020","200000","black",10,300,15);
sport1.getModel();
sport1.incrmentspeed();
sport1.getModel();

// const mercedes=new car("mercedes","cesqa","2000",12000,"black",20)

// const bmw = new car("bmw","M5","2020",42000,"red",25)

// mercedes.getModel()
// mercedes.calculatePrecent()
// mercedes.getModel()

// bmw.getModel()
// bmw.calculatePrecent()
// bmw.getModel()