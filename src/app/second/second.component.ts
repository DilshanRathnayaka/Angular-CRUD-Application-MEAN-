import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit{
  product: any;
  name: any[]=[];
  price: any[]=[];
  disc: any[]=[];


  constructor(private router:Router,private route: ActivatedRoute){}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    axios.get(`http://localhost:5000/api/Product/${id}`).then(response => {
      this.product = response.data;
      console.log(this.product)
    });
  }


  async updateProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    axios.put(`http://localhost:5000/api/Product/${id}`,{
      name:this.product.name,
      price:this.product.price,
      disc:this.product.disc
    }).then((res)=>{
      console.log(res)
    })
  }
}
