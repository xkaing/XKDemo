const showTitle = document.getElementById('title')
const randomBtn = document.getElementById('random')
const kp = document.getElementById('kp')
const frag = document.createDocumentFragment()
const url = "./data.json"

function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}
function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn)
}
// 渲染按钮组
function renderBtnGroup(res){
    let btnGroup = res.map (item => {
        return item.knowledgePoints
    })
    for(let i = 0; i < btnGroup.length; i++){
        const btn = document.createElement("button")
        btn.innerHTML = btnGroup[i]
        frag.appendChild(btn)
    }
    kp.appendChild(frag)
    //事件绑定
    bindEvent(kp, 'click', function(event){
        event.preventDefault()
        const target = event.target
        if(target.nodeName === 'BUTTON'){
            randomQues(res,target.innerHTML)
        }
    })
}
//随机所有模块题目
function randomQues(arr,one) {
    let quesList = []
    if(one == null){
        //没有第二个参数，随机所有模块题目
        quesList = arr.map(item => { return item.questionArr }).flat()
    }else{
        //有第二个参数，随机选中的模块题目
        let newArr = arr.filter(item => { return item.knowledgePoints === one})
        quesList = newArr[0].questionArr
    }
    if(!quesList.length){
        showTitle.innerText = '没有题目！'
        return
    }
    const randomQues = quesList[Math.floor(Math.random() * quesList.length)]
    showTitle.innerText = randomQues.title
}

ajax(url)
    .then(res => {
        renderBtnGroup(res)
        bindEvent(randomBtn,'click',function(event){
            event.preventDefault()
            randomQues(res)
        })
    })
    .catch(err => console.log(err))

