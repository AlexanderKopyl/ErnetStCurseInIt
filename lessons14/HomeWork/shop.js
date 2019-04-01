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
    name: 'fruits and vegs',
    cases: [
      {
        id: 1,
        products: [
          {
            name: 'яблоки',
            titles: [
              {
                name: 'голден',
                units: 'kg',
                quantity: 20,
                price: 25
              },
              {
                name: 'семеренко',
                units: 'kg',
                quantity: 10,
                price: 15
              }
            ]
          },
          {
            name: 'апельсины',
            titles: [
              {
                name: 'сорт1',
                units: 'kg',
                quantity: 25,
                price: 40
              },
              {
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
            name: 'манго',
            titles: [
              {
                name: 'крупный',
                units: 'unit',
                quantity: 20,
                price: 50
              },
              {
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
    name: 'meat and fish',
    cases: [
      {
        id: 1,
        products: [
          {
            name: 'сельдь',
            titles: [
              {
                name: 'финская',
                units: 'kg',
                quantity: 30,
                price: 80
              },
              {
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

