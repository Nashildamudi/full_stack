class course {
    title;
    durations;
    descrptions;
    fee;

constructor(t, d, de, f){
    this.title = t;
    this.descrptions = de;
    this.durations = d
    this.fee = f;
}
printdetails() {
    console.table(
      `courses details ${this.title} ${this.descrptions} ${this.durations} ${this.fee} `
    );
    
}
discount(percentage){
    let discount = (this.fee * percentage) / 100;
    this.fee = this.fee - discount
    console.log(
      `${percentage}% of discount apllied on ${this.title} total Amount is ${this.fee}`
    );
    
}
}

let course1 = new course(
  " full_satck",
  "6month",
  " MERN STACK",
  6000 
);

course1.printdetails()
course1.discount(20)