import React, { Component } from 'react';
import propTypes from 'prop-types'
class XiaojiejieItem extends Component {
    // 在结构里绑定而不是在选择器里绑定，性能优化
    constructor(props){ 
        super(props)
        this.handleclick=this.handleclick.bind(this)
    }
    componentWillUnmount(){
        console.log('删除时操作')
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content)
        {
            return true;
        }
        else{
            return false;
        }
    }
    // 简单粗暴
    // shouldComponentUpdate(){
    //     return false;
    // }
    componentWillReceiveProps(){
        console.log('子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。')
    }
    render()
     { 
           console.log('child-render')
        return (
            // 接受父组件传来的属性值
            <div onClick={this.handleclick}>
           {this.props.avname}为你服务- {this.props.content}
            </div>
        )
    }
    handleclick(){
        console.log(this.props.index)
        //子组件不能直接操作父组件的内容，所以只能调用父组件的方法来实现
        // 父组件传递过来的方法以及父组件传递过来的index
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propsTypes={
    content:propTypes.string,
    index: propTypes.number,
    deleteItem:propTypes.func
}
XiaojiejieItem.defaultProps={
    avname:'松岛枫'
}
export default XiaojiejieItem;