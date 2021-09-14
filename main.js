/*
   Array methods:
         forEach(): duyệt qua các phần tử của mảng, giống vòng lặp for
         every()
         some()
         find()
         filter()
         map()
         reduce()
*/

var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJs',
        coin: 500
    }
];

/*courses.forEach(function(course, index) {
     console.log(index, course);
}); */

/* every dùng để kiểm tra tất cả các phần tử thỏa mãn điều kiện nào đó */
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

/* some dùng để kiểm tra 1 điều kiện, nếu thõa mãn dừng chương trình và trả về true mà ko quan tâm đến những thằng khác */

/* find : tìm kiếm , chỉ trả về 1 phần tử nếu nó lặp qua thấy thỏa mãn điều kiện */
var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
});
console.log(course);

/* filter : giống find, nhưng nếu có nhiều hơn 1 phần tử thõa mãn đk thì sẽ trả về bấy nhiêu phần tử */

/* map: dùng để thay đổi , chỉnh sửa element của 1 array */

/* Promise example */

var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    }
    {
        id: 3,
        name: 'Hung Dam'
    }
];

var commenrs = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('

    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi'
    }
    

];

//1. Lấy comments
//2. Từ comment lấy ra user_id 
// Từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = user.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    }
});


getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });

        return getUsersByIds([1, 2])
             .then(function(users) {
                 console.log(users);
             }); 
        
    });

