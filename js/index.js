window.onload = function() {
    chunk();
    compact();
    concat();
}

/*********************************数组********************************************/
/*数组分块*/
function chunk() {
    console.log('chunk2', _.chunk(['a', 'b', 'c', 'd'], 2));
    console.log('chunk3', _.chunk(['a', 'b', 'c', 'd'], 3));
}

/*过滤false值*/
function compact() {
    console.log('compact', _.compact([0, 1, false, 2, '', 3]));
}

function concat() {
    var array = [1];
    var other = _.concat(array, 2, [3], [[4]]);

    console.log('concat', other);
}


/*对象拷贝*/
// var obj = {a:'aaa', b:'bbb', c:'ccc'};
// var obj_clone = _.clone(obj);
// console.log('obj_clone', obj_clone);

