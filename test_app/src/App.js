import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component{
    // stateを使った表示の変更
    // constructor(props){
    // super(props);
    // ここにstateを定義する}
    constructor(props){
      super(props);
      this.state={text:'にんじゃわんこ'};
    }

    // メソッドの作成 ーーstateの変更部分の処理をまとめる
    handClick(name){
      this.setState({text:name});
    }

  render() {
    // ここにはJavascriptがかける
    const text1='こんにちは';
    return (
      <div>
        {/*コメントアウト---JSXの場所です*/}

        {/* stateの表示
        this.state.プロパティ名 */}
        <h1>{text1}{this.state.text}さん</h1>
        {/* イベントの書き方 */}
        {/* <button イベント名={()=>{処理}}></button> */}
        {/* stateの変更 
          this.setState({プロパティ名:変更する値})
        */}
        <button onClick={()=>{this.handClick("猫")}}>猫</button>
        <button onClick={()=>{this.handClick("犬")}}>犬</button>
         
        
      </div>
    );
  }
}

export default App;
