var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(id, name) {
        this.id = id;
        this.name = name;
    }
    student.prototype.Show = function () {
        console.log(this.id);
        console.log(this.name);
    };
    return student;
}());
var marks = /** @class */ (function (_super) {
    __extends(marks, _super);
    function marks(id, name, marks1, marks2) {
        var _this = _super.call(this, id, name) || this;
        _this.marks1 = marks1;
        _this.marks2 = marks2;
        return _this;
    }
    marks.prototype.Show = function () {
        _super.prototype.Show.call(this);
        console.log(this.marks1);
        console.log(this.marks2);
    };
    return marks;
}(student));
var obj1 = new marks(1, "ashwini", 60, 70);
obj1.Show();
