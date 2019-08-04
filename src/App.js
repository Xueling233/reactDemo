import React,{Component} from 'react'

// es6解构赋值
// impor React from 'react'
// const Component =React.Component
class App extends Component{
    render(){
        return (
           //JSX
           <ul className="my-list">
               <li> { false?'XueLing':'薛玲'}</li>
               <li>I Love React</li>
           </ul>
        )
    }
}
export default App