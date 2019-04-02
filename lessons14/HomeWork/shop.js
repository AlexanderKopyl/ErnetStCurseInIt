/* --отдел фруктов и овощей
----витрина 1
------яблоки
--------голден 20 кг 25грн/кг
--------семеренко 10 кг 15грн/кг
------апельсины
--------сорт1 25 кг 40грн/кг
--------сорт2 30 кг 55грн/кг
----витрина 2
------манго
--------крупный 20шт 50грн/шт
--------средний 25шт 40грн/шт
--мясо и рыба
----витрина 1
------сельдь
--------финская 30 кг 80грн/кг
--------норвежская 10упак 40грн/уп */
let lastId = 1;
const departments = [
  {
    id:lastId,
    name: 'fruits and vegs',
    cases: [
      {
        id: lastId++,
        products: [
          {
            id:lastId++,
            name: 'яблоки',
            titles: [
              {
                id:lastId++,
                name: 'голден',
                units: 'kg',
                quantity: 20,
                price: 25
              },
              {
                id:lastId++,
                units: 'kg',
                quantity: 10,
                name: 'семеренко',
                price: 15
              }
            ]
          },
          {
            id:lastId++,
            name: 'апельсины',
            titles: [
              {
                id:lastId++,
                name: 'сорт1',
                units: 'kg',
                quantity: 25,
                price: 40
              },
              {
                id:lastId++,
                name: 'сорт2',
                units: 'kg',
                quantity: 30,
                price: 55
              }
            ]
          }
        ]
      },
      {
        id: lastId++,
        products: [
          {
            id:lastId++,
            name: 'манго',
            titles: [
              {
                id:1,
                name: 'крупный',
                units: 'unit',
                quantity: 20,
                price: 50
              },
              {
                id:lastId++,
                name: 'средний',
                units: 'unit',
                quantity: 25,
                price: 40
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id:lastId++,
    name: 'meat and fish',
    cases: [
      {
        id: lastId++,
        products: [
          {
            id:lastId++,
            name: 'сельдь',
            titles: [
              {
                id:lastId++,
                name: 'финская',
                units: 'kg',
                quantity: 30,
                price: 80
              },
              {
                id:lastId++,
                name: 'норвежская',
                units: 'pack',
                quantity: 10,
                price: 40
              }
            ]
          }
        ]
      }
    ]
  }
];
exports.dep = departments;
exports.lastId = lastId;

