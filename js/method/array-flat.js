const marks = [
    10,
    [2, 8],
    [1,
        [2,
            [3,
                [4, [5, [6]]]
            ]
        ],
    ],
    [4, 6],
];
console.log(marks);
console.log(marks.flat());
console.log(marks.flat(2));
console.log(marks.flat(3));
console.log(marks.flat(4));
console.log(marks.flat(5));
console.log(marks.flat(6));
console.log(marks.flat(Infinity));


const family = [
    { name: 'Jonas' },
    [
        { name: 'Maryte' },
        [
            { name: 'Petras' },
            [
                { name: 'Tomas' },
                { name: 'Jurga' }
            ]
        ],
        { name: 'Ona' },
        [
            { name: 'Chuck' },
        ],
    ]
];
console.log(family);
console.log(family.flat(Infinity));