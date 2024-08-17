var nameofblog=document.getElementsByName('name_of_blog')[0]

function currentTimeToColor(){
    var currentTimestamp=new Date().getTime()
    var colorString=(currentTimestamp%0xffffff).toString(16)
    return '#'+colorString.split('').sort(()=>0.5-Math.random()).join('')
}

setInterval(()=>nameofblog.style.backgroundColor=currentTimeToColor(), 100)
