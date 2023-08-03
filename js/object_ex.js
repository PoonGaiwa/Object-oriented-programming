/*
 * @Author: gaiwa gaiwa@163.com
 * @Date: 2023-08-02 22:14:43
 * @LastEditors: gaiwa gaiwa@163.com
 * @LastEditTime: 2023-08-03 17:35:43
 * @FilePath: \html\work\js\day32\object_ex\js\object_ex.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 球  定时器  修改Top Left 定位

const balls = document.querySelectorAll('.ball');
const units = document.querySelectorAll('.unit');
const eleArr = initBalls().concat(initUnits());
let time;
time = setInterval(function(){
  eleArr.forEach(item => move.call(item));
},1000/60);

function Ball(ele, s = 1){
  this.ele = ele;
  this.x = s;
  this.y = s;
}

function Unit(ele, s = 1, deg = 30){
  this.ele = ele;
  this.x = s;
  this.y = s;
  this.deg = deg;
}

function initBalls(){  
  return [].map.call(balls, item => new Ball(item,(~~(Math.random()*10)+1)));
}

function initUnits(){
  return [].map.call(units, item => new Unit(item,(~~(Math.random()*10)+1),(~~(Math.random()*60))));
}

function move(){
  this.x *= isRow(this.ele) ? -1: 1;
  this.y *= isColumn(this.ele) ? -1: 1;  
  this.ele.style.top = this.ele.offsetTop + this.y + 'px';
  this.ele.style.left = this.ele.offsetLeft + this.x + 'px';
  if(this instanceof Unit){
    this.deg += .8;
    this.ele.style.transform = `rotate(${this.deg}deg)`;
  }
}

function isColumn(ele){
  if (ele.offsetTop > window.innerHeight - ele.offsetHeight || ele.offsetTop <= 0){
    return true;
  }
  return false;
}

function isRow(ele){
  if (ele.offsetLeft > window.innerWidth - ele.offsetWidth || ele.offsetLeft <= 0){
    return true;
  }
  return false;
}
