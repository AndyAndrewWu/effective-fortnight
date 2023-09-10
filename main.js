function preload()
{

}
function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);

    video.hide();

    tint_color = "";
}

function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script;
}
