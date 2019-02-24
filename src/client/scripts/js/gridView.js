var gridView;
(function (gridView) {
    class MyExport {
        constructor() {
            this.myVal = "hello from file gridView";
        }
    }
    gridView.MyExport = MyExport;
})(gridView || (gridView = {}));
