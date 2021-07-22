import React,{useState} from 'react';
import Card from './Card';
import TextInput from './TextInput';
import "../App.css";


function App() {
    var [todos,setTodos]=useState(
        [
            {
                todo: 'Go to Market',
                desc: 'Buy some vegies',
        
            },
            {
                todo: 'Learn React',
                desc: 'Should be finish by evening',
            },
            {
                todo: 'Go to Gym',
                desc: 'Finish by 6pm',
        
            },
            {
                todo: 'Watch TV',
                desc: 'Its family time',
            }
        
        ]
    );
    function deleteTodo(todo) {
        setTodos(todos.filter(function(item){
            return item.todo !== todo.todo;
        }));
    }
        
    
    
    return (
        <div className="app">
            <p>Enter Your Todo Here</p>
            <div className="input-fields">
            <TextInput holder="Enter Todo Heading"/>
            <TextInput holder="Enter Todo Description"/>
            </div>
            
            {
                todos.map(function (todo, index) {
                    return (
                        <Card key={index} item={todo} onClick={function () {
                            deleteTodo(todo);
                        }} />   
                    )
                })
            }
        </div>
    )
}

export default App;