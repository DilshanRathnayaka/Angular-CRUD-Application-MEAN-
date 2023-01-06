import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})


export class NewComponent implements OnInit{
  product:any[]=[];
  id: any;


  constructor(private router:Router,private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    axios.get("http://localhost:5000/api/Product/")
    .then(res=>{
      this.product = res.data;
    }).catch(err=>{
      console.log(err);
    })
  }

  name: any[]=[];
  price: any[]=[];
  disc: any[]=[];

  async createProduct() {
    const response = await axios.post("http://localhost:5000/api/Product/", {
      name: this.name,
      price: this.price,
      disc: this.disc
    } )
    this.ngOnInit()
  }
  
  async deleteProduct (id:String){
    await axios.delete(`http://localhost:5000/api/Product/${id}`) .then(()=>{
      this.ngOnInit()
    })
  } 



 

 

}
 



