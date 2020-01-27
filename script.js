var ul = document.querySelector('.ul');

for (var i = 1; i < 21; i++) {
    var li = document.createElement('li')
    li.innerHTML 
    ul.append(li)
}
 
ul.addEventListener("mousemove", function(event) {
    console.log(document.elementFromPoint(event.clientX, event.clientY).tagName);
}, false); 

