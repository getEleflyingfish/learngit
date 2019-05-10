
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