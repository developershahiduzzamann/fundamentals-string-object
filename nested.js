const college = {
    name: 'sabbir khan model',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'green',
        result: {
            gpa: 5,
            marit: 'top',
        }
    }
}
college.unique.result.marit ='top top most';
console.log(college.unique.result.marit);
college.events[1] = '16 December';
console.log(college.events[1]);
delete college.class;
console.log(college);