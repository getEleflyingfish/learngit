
// wv util
//1,获取节点
//使用： 
// query('要获取的节点')；
function query(dom) {
    const obj = document.querySelectorAll(dom);
    return obj.length > 1 ? obj : obj[0];
}
//////////////////////////////////////////////////////
//2，选项卡
//前提： 给按钮加 class：'tabs-btn',要切换的内容加class:'tabs-item',给他们共同的父级加class：'tabs-wrap';
//使用：	
// tabsChange([{
// 		changeClass: 'on1'//第一个选项卡要切换的class
// }, {
// 	changeClass: 'on2'//第二个选项卡要切换的class......
// }])
function tabsChange(config) {
    const tabsWrap = document.querySelectorAll('.tabs-wrap');
    for (let i = 0; i < tabsWrap.length; i++) {
        let tabsBtn = tabsWrap[i].querySelectorAll('.tabs-btn');
        let tabsItem = tabsWrap[i].querySelectorAll('.tabs-item');
        for (let j = 0; j < tabsBtn.length; j++) {
            tabsItem[j + 1] ? tabsItem[j + 1].style.display = 'none' : '';
            tabsBtn[j].addEventListener('click', () => {
                for (let k = 0; k < tabsBtn.length; k++) {
                    tabsBtn[k].classList.remove(config[i].changeClass);
                    tabsItem[k].style.display = 'none';
                }
                tabsBtn[j].classList.add(config[i].changeClass);
                tabsItem[j].style.display = 'block';
            })
        }
    }
}
///////////////////////////////////////////////////



////////////////////////////////////////////////////
window.onload = function () { 


/* 
  数据化
  let  arr = [ 2,2,2,2]


*/




    var imgs = document.getElementsByTagName("img");

    document.onkeydown = function(e){
        switch (e.keyCode) {
            case 37:
            // ← 
            console.log(" ←")
            run([0,1,2,3]);
            run([4,5,6,7]);
            run([8,9,10,11]);
            run([12,13,14,15]);
            cear();
            break; 
            case 38:
            // ↑ 
            console.log(" ↑ ")

            run([0,4,8,12]);
            run([1,5,9,13]);
            run([2,6,10,14]);
            run([3,7,11,15]);
            cear();
            break;
            case 39:
            // → 
            console.log(" → ")
            run([3,2,1,0]);
            run([7,6,5,4]);
            run([11,10,9,8]);
            run([15,14,13,12]);
            cear();
            break;
            case 40:
            // ↓ 
            console.log(" ↓ ")
            run([12,8,4,0]);
            run([13,9,5,1]);
            run([14,10,6,2]);
            run([15,11,7,3]);
            cear();
            break 
            
            default: 
              console.log("????")
            break 
        }  

  

     }; 

     function cear (){ 
         var newNums = Math.floor(Math.random()*imgs.length );
         console.log(newNums) 
         if(imgs[newNums].getAttribute('value')==0) { 
           
            imgs[newNums].setAttribute('value',2);
            imgs[newNums].src = 'img/cube_2.png';
         }else {
            cear();
            // console.log("抱歉游戏结束 ，请刷新页面继续，下次再接再厉！坚持十分钟有惊喜哦！~~~")
            console.log("坚持十分钟有惊喜哦！~~~")
         }
         
        
     }

     function run (arr) {
        let newvalue = _e2048([
            Number(imgs[arr[0]].getAttribute('value')),
            Number(imgs[arr[1]].getAttribute('value')),
            Number(imgs[arr[2]].getAttribute('value')),
            Number(imgs[arr[3]].getAttribute('value'))
         ]);
     

           console.log(newvalue )
         
           for( let i=0; i<arr.length; i++){
              imgs[arr[i]].setAttribute('value',newvalue[i]);
              imgs[arr[i]].src = 'img/cube_'+ newvalue[i]+'.png'
           }

      }


     function _e2048(arr) {
        let newArr = [];
    
      for( let i=0; i<arr.length; i++){
          if( arr[i]!= 0) {
              for(var j=i+1; j<arr.length; j++){
                  if(arr[j]!=0) {
                      break;
                  }
              }
            if(arr[i] !=arr[j]){
                newArr.push(arr[i])
            }else {
                newArr.push(arr[i] + arr[j]);
                i=j;
            }
          }
      }
    
         for(let i=0; i<arr.length; i++){
             if(!newArr[i]) newArr[i]=0;
         }
         return newArr ; 
    }





}







