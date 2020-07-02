/*****************************/
/* masonry */
/*****************************/

var minColWidth = 224;
var roots;

function onLoad() {
    var rootElements = document.getElementsByClassName('masonry-root');
    roots = Array.prototype.map.call(rootElements, function(rootElement) {
        var cellElements = rootElement.getElementsByClassName('masonry-cell');
        var cells = Array.prototype.map.call(cellElements, function(cellElement) {
            var style = getComputedStyle(cellElement);
            return {
                'element': cellElement,
                'outerHeight': parseInt(style.marginTop) + cellElement.offsetHeight + parseInt(style.marginBottom)
            };
        });
        return {
            'element': rootElement,
            'noOfColumns': 0,
            'cells': cells
        };
    });

    onResize();
}

function onResize() {
    for (let root of roots) {

        var newNoOfColumns = Math.floor(root.element.offsetWidth / minColWidth);
        if (newNoOfColumns != root.noOfColumns) {

            root.noOfColumns = newNoOfColumns;
            var columns = Array.from(new Array(root.noOfColumns)).map( function(column) {
                return {
                    'cells': new Array(),
                    'outerHeight': 0
                };
            });

            for (let cell of root.cells) {
                var minOuterHeight = Math.min(...columns.map( function(column) {
                    return column.outerHeight;
                }));
                var column = columns.find( function(column) {
                    return column.outerHeight == minOuterHeight;
                });
                column.cells.push(cell);
                column.outerHeight += cell.outerHeight;
            }

            var masonryHeight = Math.max(...columns.map( function(column) {
                return column.outerHeight;
            }));

            var order = 0;
            for (let column of columns) {
                for (let cell of column.cells) {
                    cell.element.style.order = order++;
                    // set the cell's flex-basis to 0
                    cell.element.style.flexBasis = 0;
                }
                column.cells[column.cells.length - 1].element.style.flexBasis = column.cells[column.cells.length - 1].element.offsetHeight + masonryHeight - column.outerHeight - 1 + 'px';
            }
            root.element.style.maxHeight = masonryHeight + 1 + 'px';

            console.log(columns.map( function(column) {
                return column.outerHeight;
            }));
            console.log(root.element.style.maxHeight);
        }
    }
}

window.addEventListener('load', onLoad);
window.addEventListener('resize', onResize);

/*****************************/
/* masonry */
/*****************************/