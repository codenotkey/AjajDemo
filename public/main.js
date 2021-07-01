console.log('this is main.js')

getCSS.onclick= ()=>{
    console.log('get css')
    const request = new XMLHttpRequest()
    request.open('GET', 'style.css')
    request.onreadystatechange = () => {
        if(request.status === 200 && request.readyState === 4){
            style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
   request.send()
}
getJS.onclick = () =>{
    console.log('this is getJS');
    const request = new XMLHttpRequest()
    request.open('GET','2.js')
    request.onreadystatechange = () =>{
        if(request.status === 200 && request.readyState ===4){
            let script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

getHTML.onclick = () =>{
    console.log('this is HTML');
    const request = new XMLHttpRequest()
    request.open('GET','3.html')
    request.onreadystatechange = () =>{
        if(request.status === 200 && request.readyState ===4){
            let div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getXML.onclick = () =>{
    console.log('this is XML');
    const request = new XMLHttpRequest()
    request.open('GET','4.xml')
    request.onreadystatechange = () =>{
        if(request.status === 200 && request.readyState ===4){
            let dom = request.responseXML
            let text = dom.getElementsByTagName('note')[0].textContent      
            console.log(text);
            
        }
    }
    request.send()
}

getJSON.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','5.json')
    request.onreadystatechange = () =>{
        if(request.status === 200 && request.readyState ===4){
            let jsonContent = request.response
            console.log(JSON.parse(jsonContent))     
        }
    }
    request.send()
}

let pageNumber=2
getPage.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET', '/page' +pageNumber)
    request.onreadystatechange = () =>{
        if(request.status === 200 && request.readyState ===4){
            let list = JSON.parse(request.response)
            list.forEach(item => {
                let li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            });
            
        }
    }
    request.send()
}
