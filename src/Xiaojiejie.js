import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import Boss from './Boss'
import Axios from 'axios';



class Xiaojiejie extends Component{
    // 不属于react生命周期,是es6语法，但是可以看做是生命周期的初始化阶段（生命周期：在某一时刻自动执行的函数）
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
    }

    // react生命周期
    // 挂载阶段 componentWillMount componentDidMount  render
    // componentWillMount(){
    //     console.log('componentWillMount----将要挂载的时刻')
    // }
    // componentDidMount(){
    //     console.log('componentDidMount----挂载完成的时刻')
    // }
    // componentWillUpdate(){
    //     console.log('2-componentWillUpdate')
    // }
    // componentDidUpdate(){
    //     console.log('4-componentDidUpdate')
    // }
    // shouldComponentUpdate(){
    //     console.log('1-shouldComponentUpdate')
    //     return true
    //     // flase不往后执行
    // }
   
    //在子组件里添加
    // componentWillUnmount(){
    //     console.log('删除时执行')
    // }

    //axios获取数据写在挂载完成后的生命周期里
    componentDidMount(){
        Axios.get('https://easy-mock.com/mock/5d413b891c8aba1747cfb9c4/ReactDemo01/xiaojiejie')
        .then((res)=>{
            console.log('axios获取数据成功：'+JSON.stringify(res))
            this.setState({
                list:res.data.data
            })
        })
        .catch((error)=>{console.log('axios获取数据失败'+error)})
    }

    render(){
        // console.log('3-render----挂载中')
        return (
             <Fragment>
            {/* 最外层套用div会影响flex布局,解决办法引用Fragment */}
      
                <div>
                    <label htmlFor='xl'>增加服务:</label>
                    <input 
                    id='xl' 
                    className='input' 
                    value={this.state.inputValue}
                     onChange={this.inputChange.bind(this)}
                     ref={(input)=>{this.input=input}}
                     />
                <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                    {/* 有（）可以换行没有不可以换行 */}
                   {
                       this.state.list.map((item,index)=>{
                       return (
                    
                        
                    //组件未拆分时的写法，绑定两个参数 this和index
                    //           <li
                    //     onClick={this.deleteItem.bind(this,index)}
                    //     key={index+item}
                    //    dangerouslySetInnerHTML={{__html:item}}
                    //        >
                    //     {item} 
                    //    </li> 

                    //父组件向子组件传递内容，靠属性的形式传递
                    //  {/* 向子组件传值绑定属性 */}
                    <CSSTransition
                        timeout={2000}
                        key={item+index}
                        appear={true}
                        classNames="boss-text"
                        unmountOnExit
                    >
                            <XiaojiejieItem 
                            // avname='小姐姐'
                            key={item+index}
                            content={item}
                            index={index}
                            // 用属性的方式把父组件的方法传递过去，不绑定this子组件找不到
                            deleteItem={this.deleteItem.bind(this)}
                             />
                             </CSSTransition>
                  
                       )
                   })
                }
                </TransitionGroup>
                </ul>
            <Boss/>
            </Fragment>
        )
    }

          inputChange(){
             this.setState({
                 inputValue:this.input.value
             })
            }

            // 增加功能
            addList(){
                // 异步操作
                this.setState({
                    list:[...this.state.list,this.state.inputValue],
                    inputValue:''
                },()=>{ console.log(this.ul.querySelectorAll('li').length)})
            //    setState()后加上回调函数
            }
            deleteItem(index){
                console.log(index)
                // 定义局部变量
                // 操作变量，不影响性能
                let list=this.state.list
                list.splice(index,1)
                this.setState({
                    list:list
                })
            }
}
export default Xiaojiejie

//JSX两种注释方法  {/* */}   

//                {
//                    //
//                }
// npm  install  xxx   下载到node_modules 但是没有在package.json中添加依赖
// npm  install -g xxx  下载到全局  根据安装时配置的地点存放
// npm  install -save xxx   安装后并在dependencies中写入依赖    生产环境跑到服务器
// npm  install  -save-dev axios     安装后并在devDependencies中写入依赖  程序员 开发环境  测试
//ref可以绑定dom元素