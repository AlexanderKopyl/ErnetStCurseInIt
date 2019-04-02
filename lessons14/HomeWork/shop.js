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

const departments = [
  {
    id:1,
    name: 'fruits and vegs',
    cases: [
      {
        id: 1,
        products: [
          {
            id:1,
            name: 'яблоки',
            titles: [
              {
                id:1,
                name: 'голден',
                units: 'kg',
                quantity: 20,
                price: 25
              },
              {
                id:2,
                units: 'kg',
                quantity: 10,
                name: 'семеренко',
                price: 15
              }
            ]
          },
          {
            id:2,
            name: 'апельсины',
            titles: [
              {
                id:1,
                name: 'сорт1',
                units: 'kg',
                quantity: 25,
                price: 40
              },
              {
                id:2,
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
        id: 2,
        products: [
          {
            id:1,
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
                id:2,
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
    id:2,
    name: 'meat and fish',
    cases: [
      {
        id: 1,
        products: [
          {
            id:1,
            name: 'сельдь',
            titles: [
              {
                id:1,
                name: 'финская',
                units: 'kg',
                quantity: 30,
                price: 80
              },
              {
                id:2,
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

