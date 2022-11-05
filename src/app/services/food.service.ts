import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id== id)!;
  }
getAllFoodByTag(tag:string):Foods[]{
return tag=='All'?
this.getAll() : this.getAll().filter(food=> food.tags?.includes(tag));
}

getAllTag():Tag[]{
  return[
    {name:'All',count:8},
    {name:'FastFood',count:7},
    {name:'Pizza',count:2},
    {name:'South',count:3},
    {name:'Sandwich',count:1},
    {name:'Burger',count:2},
    {name:'Dosa',count:1},
    {name:'Manchurian',count:1},
  ]
}

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Burger',
        cookTime:'10-20',
        price:5,
        favourite:true,
        origins:['United States','Germany'],
        stars:3.5,
        imageurl:'/assets/food1.jpg',
        tags:['FastFood','Burger']
      },
      {
        id:2,
        name:'Pizza',
        cookTime:'15-20',
        price:15,
        favourite:true,
        origins:['Italy'],
        stars:4.5,
        imageurl:'/assets/food2.jpg',
        tags:['Pizza','FastFood']
      },
      {
        id:7,
        name:'Manchurian',
        cookTime:'20-30',
        price:30,
        favourite:true,
        origins:['India'],
        stars:3.5,
        imageurl:'/assets/food7.jpg',
        tags:['Manchurian']
      },
      {
        id:3,
        name:'French Fries',
        cookTime:'10-20',
        price:4,
        favourite:true,
        origins:['Belgium'],
        stars:4.5,
        imageurl:'/assets/food3.jpg',
        tags:['French Fries','FastFood']
      },
      {
        id:4,
        name:'Fried Momos',
        cookTime:'8-10',
        price:10,
        favourite:false,
        origins:['Nepal'],
        stars:3.5,
        imageurl:'/assets/food4.jpg',
        tags:['Fried Momos','FastFood']
      },
      {
        id:5,
        name:'Idli',
        cookTime:'12-20',
        price:8,
        favourite:true,
        origins:['India'],
        stars:3,
        imageurl:'/assets/food5.jpg',
        tags:['Idli','FastFood','South']
      },
      

      {
        id:8,
        name:'Sandwich',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['England'],
        stars:4,
        imageurl:'/assets/food8.jpg',
        tags:['FastFood','Sandwich']
      },
      {
        id:9,
        name:'Cheese Pizza',
        cookTime:'15-20',
        price:20,
        favourite:true,
        origins:['Italy'],
        stars:3.5,
        imageurl:'/assets/food9.jpg',
        tags:['Pizza','FastFood']
      },
      {
        id:6,
        name:'Dosa',
        cookTime:'5-10',
        price:25,
        favourite:false,
        origins:['India'],
        stars:4.5,
        imageurl:'/assets/food6.jpg',
        tags:['FastFood','Dosa','South']
      },
      {
        id:10,
        name:'Hamburger',
        cookTime:'12-15',
        price:10,
        favourite:false,
        origins:['United States','Germany'],
        stars:3.5,
        imageurl:'/assets/food10.jpg',
        tags:['Burger','FastFood']
      },
      {
        id:11,
        name:'Patties',
        cookTime:'10-20',
        price:5,
        favourite:true,
        origins:['Australia'],
        stars:4,
        imageurl:'/assets/food11.jpg',
        tags:['Patties','FastFood']
      },
      {
        id:12,
        name:'Vada',
        cookTime:'8-10',
        price:10,
        favourite:false,
        origins:['South India'],
        stars:4.5,
        imageurl:'/assets/food12.jpg',
        tags:['vada','FastFood','South']
      },   
    ]
  }
}

