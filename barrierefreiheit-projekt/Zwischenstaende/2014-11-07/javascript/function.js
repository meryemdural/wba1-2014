//link-Element erzeugen
var stylesheetContrast = document.createElement('link');
stylesheetContrast.href = 'css/contrast.css';
stylesheetContrast.rel = 'stylesheet';
stylesheetContrast.type = 'text/css';


var stylesheetFont = document.createElement('link');
stylesheetFont.href = 'css/resizer.css';
stylesheetFont.rel = 'stylesheet';
stylesheetFont.type = 'text/css';

function contrast()
{
    document.getElementsByTagName('head')[0].appendChild(stylesheetContrast);
    return true;
}

function contrastReduce() {
    document.getElementsByTagName('head')[0].removeChild(stylesheetContrast);
    return true;
}

function sizeMax()
{
    document.getElementsByTagName('head')[0].appendChild(stylesheetFont);
    return true;
}

function sizeNormal() {
    document.getElementsByTagName('head')[0].removeChild(stylesheetFont);
    return true;
}





