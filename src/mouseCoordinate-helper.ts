export class MouseCoordinates {

     static updateMouseCoordinate() {
        return `
        function mousePositionOnDom(e) {
            var el=e.target, c=el;
            var scaleX = c.width/c.offsetWidth || 1;
            var scaleY = c.height/c.offsetHeight || 1;
            
            if (!isNaN(e.offsetX)) 
                return { x:e.offsetX*scaleX, y:e.offsetY*scaleY };
            
            var x=e.pageX, y=e.pageY;
            do {
              x -= el.offsetLeft;
              y -= el.offsetTop;
              el = el.offsetParent;
            } while (el);
            return { x: x*scaleX, y: y*scaleY };
        }
        
        function domPos(e) {
            var p = mousePositionOnDom(e);
            var x=e.pageX, y=e.pageY, el=e.target, c=el;
            var x2=x, y2=y;
            do {
              x -= el.offsetLeft;
              y -= el.offsetTop;
              x2 -= el.offsetLeft - el.scrollLeft;
              y2 -= el.offsetTop - el.scrollTop;
              el = el.offsetParent;
            } while (el);
            return {
                xUnscaled: x, yUnscaled: y,
                x: p.x, y: p.y,
                xUnscaledWithScroll: x2, yUnscaledWithScroll: y2, 
                xWithScroll: x2*(c.width/c.offsetWidth || 1), yWithScroll: y2*(c.height/c.offsetHeight || 1)
        
            }
        }
        
        function $(id){ return document.getElementById(id); }
        var domRect = document.body;
        var htmlelem = document.createElement( "div" );
        
        domRect.onmousemove = function(e) {
            var p = domPos(e);
            htmlelem.setAttribute("style", "position: absolute; text-align: center; z-index: 3000; top: 0; width: 100%;");
            htmlelem.innerHTML = "X:" +Math.round(p.x)+ "," + "Y:" +Math.round(p.y);
            document.getElementsByClassName("container-fluid")[0].appendChild( htmlelem );
        };`;
     }
}

