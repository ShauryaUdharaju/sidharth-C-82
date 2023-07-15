
mouseEvent="empty"
var last_position_of_X
var last_position_of_Y

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"

var width_of_the_line=1

canvas.addEventListener("mousedown", mousedownEvent)
function mousedownEvent()
{
mouseEvent="mouseDown"
}

canvas.addEventListener("mouseup", mouseupEvent)
function mouseupEvent()
{
mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave", mouseleaveEvent)
function mouseleaveEvent()
{
mouseEvent="mouseLeave"
}

canvas.addEventListener("mousemove", mymousemoveEvent)
function mymousemoveEvent(e)
{
current_position_of_mouse_X=e.clientX-canvas.offsetLeft
current_position_of_mouse_Y=e.clientY-canvas.offsetTop

if (mouseEvent=="mouseDown") {
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_the_line
    ctx.moveTo(last_position_of_X, last_position_of_Y)
    ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y)
    ctx.stroke()
}

last_position_of_X=current_position_of_mouse_X
last_position_of_Y=current_position_of_mouse_Y
}

function clear_area(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

}