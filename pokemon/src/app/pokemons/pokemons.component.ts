import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})

export class PokemonsComponent implements OnInit{
  pokemons:any[] = [];
  constructor(
    private dataService: DataService
  ){}
  ngOnInit(): void{
    this.dataService.getPokemon()
    .subscribe((response: any)=> {
response.results.forEach((result: { name: string; }) => {
  this.dataService.getMore(result.name)
  .subscribe((presponse: any) => {
    this.pokemons.push(presponse)
    console.log(this.pokemons)
  });
})
    });
  }
  }


