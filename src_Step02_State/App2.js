import React, { Component } from 'react';

class App2 extends Component {
    //관리하는 상태값이 여러개 일수도 있다.
    state={
        count1:0,
        count2:0,
        msg:""
    }
    //첫번째 버튼을 눌렀을 때 호출되는 함수
    clicked1 = () =>{
        this.setState({
            ...this.state,
            count1 : this.state.count1 + 1
        })
    }
    //두번째 버튼을 눌렀을 때 호출되는 함수
    clicked2 = () =>{
        this.setState({
            ...this.state,
            count2 : this.state.count2 + 1
        })
    }

    render() {
        return (
            <div>
                <h1>인덱스 페이지 입니다</h1>
                <button onClick={this.clicked1}>{this.state.count1}</button>
                <button onClick={this.clicked2}>{this.state.count2}</button>
                <br />
                <input type="text" onInput={(e)=>{
                    this.setState({
                        msg : e.target.value
                    })
                }}/>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}

export default App2;