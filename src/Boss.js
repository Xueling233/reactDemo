import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:false
        }
         this.toToggole=this.toToggole.bind(this);
         //=后面没有括号
    }
    render() { 
        return ( 
            <div>
                {/* this.isShow的this.state不能丢 */}

                <CSSTransition
                 in={this.state.isShow}
                 timeout={2000}
                 classNames="boss-text"
                //  unmountOnExit  删除元素
                >
                <div>齐天大圣-孙悟空</div>
                </CSSTransition>
                {/* <div className={this.state.isShow ? 'show' : 'hide'}>齐天大圣-孙悟空</div> */}
                <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            isShow:this.state.isShow ? false : true
              //true和false 不用加引号
            //this.state.isShow 不要忘了state   this.state 的后面没有（=）不要忘了（）
        })
    }

    //错误示范
    // toToggole(){
    //     console.log('执行该方法了')
    //     console.log(this.state.isShow)
    //      this.setState= ({
    //         isShow:this.state.isShow ? false : true
    //        //true和false 不用加引号
    // })
    // console.log(this.state.isShow)
    // }
}
 
export default Boss;