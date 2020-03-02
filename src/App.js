import React , {Component} from 'react'
import { CardList} from './components/card-list/card-list.component';


export default class App extends Component{
    constructor(){
        super()
    this.state = {
        monsters: [],
        search: ''
    }   
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
}

searchMonster = (e) =>{
  this.setState({
    search : e.target.value
  })
}

render(){
const {monsters , search} =this.state

const filtermonster = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
 return(
     <div>
       <input type = 'search' onChange={this.searchMonster}/>
       <CardList monsters={filtermonster}>
       </CardList>
     </div>
 )}
}