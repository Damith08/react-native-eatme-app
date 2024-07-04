export const RESTAURANT_DATA = {
  id: 1,
  restaurantName: 'Tossed',
  address: 'Baker Street',
  status: 'Excellent',
  tagLine: [{dish1: 'Chicken', dish2: 'Salads', tag: 'Healthy'}],
  opensAt: '11:00 AM',
  minimum: '$7.00 minimum',
  delivery: '$2.50  delivery',
  restaurantImage:
    'https://rs-menus-api.roocdn.com/images/57800532-e16e-4743-83fb-06c3c2230d76/image.jpeg?width=391&height=227&auto=webp&format=jpg&fit=crop',
};

export const POPULAR_DISHES_DATA = [
  {
    id: 1,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/157ed1e5-9c96-4b3d-a788-768c9f65993e/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop',
    name: 'The Italian',
    kcal: '646 kcal',
    price: '$12.49',
  },
  {
    id: 2,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/a19b0302-e9c1-409c-a206-c786f64e825c/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop',
    name: 'Avocado Caesar',
    kcal: '432 kcal',
    price: '$12.49',
  },
  {
    id: 3,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/e46d0de2-e053-4b63-8f88-556f2a1c0601/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop',
    name: 'Parmesan Chicken Salad',
    kcal: '325 kcal',
    price: '$11.49',
  },
  {
    id: 4,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
    name: 'Halloumi and Roasted Veg',
    kcal: '368 kcal',
    price: '$11.49',
  },
  {
    id: 5,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop',
    name: 'Mighty Mexican',
    kcal: '377 kcal',
    price: '$13.39',
  },
  {
    id: 6,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/bb3d52a5-dc64-4152-b827-66e66a5be11d/image.jpeg?width=246&height=246&auto=webp&format=jpg&fit=crop',
    name: 'Shawarma Powerbowl',
    kcal: '360 kcal',
    price: '$13.39',
  },
  {
    id: 7,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/76b193cd-a172-4302-a39a-ad60dd3a2f8c/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop',
    name: '*chicken & bacon club salad*',
    kcal: '619 kcal',
    price: '$9.99',
  },
  {
    id: 8,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/a853e5ab-6da6-450c-a15b-bb2ba4f97c54/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop',
    name: 'Chicken, Egg & Sweet potato Favourite Box',
    kcal: '264 kcal',
    price: '$9.49',
  },
  {
    id: 9,
    dishImage:
      'https://rs-menus-api.roocdn.com/images/e4a2a6de-dc1c-4748-8a4c-b3789d66fee8/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop',
    name: 'Shawarma Rainbow wrap',
    kcal: '444 kcal',
    price: '$9.89',
  },
];

export const RESTAURANT_MENU_CATEGORY_DATA = [
  {
    id: 1,
    categoryName: 'Platters',
    dishes: [
      {
        dishId: 1,
        name: 'parmesan chicken salad platter',
        description:
          'A feast for 6 people! Grilled red tractor UK chicken thigh with parmesan crisps, pesto, roasted peppers, baby plum tomatoes & ranch dressing served on a mixed leaf base.',
        price: '$59.99',
        image:
          'https://rs-menus-api.roocdn.com/images/065f1775-0c84-430a-9a4e-c08df94051ec/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 2,
        name: 'halloumi & roasted veg salad platter',
        description:
          'A feast for 6 people! halloumi with pesto, roasted peppers, roasted tomatoes, sweet potato, pickled red onion and balsamic dressing served on a mixed leaf base.',
        price: '$59.99',
        image:
          'https://rs-menus-api.roocdn.com/images/e6afbac5-74e2-4d40-a56f-87245ea5bbdb/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 3,
        name: 'avocado chicken caesar platter',
        description:
          'A feast for 6 people! Grilled red tractor UK chicken thigh with avocado, parmesan crisps, baby plum tomatoes, egg, croutons, caesar dressing and lemon juice served on a mixed leaf base.',
        price: '$59.99',
        image:
          'https://rs-menus-api.roocdn.com/images/ee5ff9ef-ea3c-4b6e-b2e0-3497a4c151ca/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 2,
    categoryName: 'House Specials',
    dishes: [
      {
        dishId: 1,
        name: '*chicken & bacon club salad*',
        description:
          'HOUSE SPECIAL!\nYour choice of protein with avocado, honey mustard, pickled veg and rainbow slaw',
        kcal: '619 kcal',
        price: '$59.99',
        image:
          'https://rs-menus-api.roocdn.com/images/76b193cd-a172-4302-a39a-ad60dd3a2f8c/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 2,
        name: '*honey mustard rainbow wrap*',
        description:
          'HOUSE SPECIAL!\nYour choice of protein with avocado, honey mustard, pickled veg and rainbow slaw',
        kcal: '542 kcal',
        price: '$6.99',
        image:
          'https://rs-menus-api.roocdn.com/images/3f2ff3c8-a9ec-495f-903b-51b63ec9c018/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 3,
        name: '*greek halloumi salad*',
        description:
          'HOUSE SPECIAL!\nhalloumi with baby plum tomatoes, cucumber, peppers, pickled red onion & olives with tahini dressing on a mixed leaf base',
        kcal: '382 kcal',
        price: '$6.99',
        image:
          'https://rs-menus-api.roocdn.com/images/ee5ff9ef-ea3c-4b6e-b2e0-3497a4c151ca/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 4,
        name: '*ACG juice*',
        description:
          'freshly squeezed apple, carrot, ginger freshly squeezed juice',
        kcal: '117 kcal',
        price: '$3.99',
        image:
          'https://rs-menus-api.roocdn.com/images/b852ebf1-4f64-4712-9e24-1a016054b9a4/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 5,
        name: '*asian tuna salad*',
        description:
          'HOUSE SPECIAL!\ntuna, rainbow slaw, broccoli, peppers, cashews, herb mix & soy dressing on a mixed leaf base.',
        kcal: '293 kcal',
        price: '$5.99',
        image:
          'https://rs-menus-api.roocdn.com/images/c8b5405a-2a22-4ae7-8cb1-c248fd3a1549/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 3,
    categoryName: 'Create your own',
    dishes: [
      {
        dishId: 1,
        name: 'Create Your Own Salad',
        description:
          'Create your own masterpiece! choose from over 70 fresh and healthy ingredients',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/849f3ca0-cfe5-4647-8ad3-83cc1cf6edc7/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 2,
        name: 'Create Your Own Wrap',
        description:
          'Get lunch your way! With over 60 fresh options to choose from you can create your own masterpiece everyday!',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/4625ca23-e030-4b9e-b44e-f78d0cb02773/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 3,
        name: 'Vegan Create your Own salad',
        description:
          'Get lunch your way! Choose your favourite ingredients to create your own masterpiece everyday!',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/5697309f-5b56-4bfb-a756-c079ef58c2cf/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 4,
        name: 'Vegan Create your own Wrap',
        description:
          'Get lunch your way! With over 60 fresh options to choose from you can create your own masterpiece everyday!',
        kcal: '274 kcal',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/fd45de20-62ba-422e-bded-4582068de774/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 4,
    categoryName: 'Salads',
    dishes: [
      {
        dishId: 1,
        name: 'Create Your Own Salad',
        description:
          'Create your own masterpiece! choose from over 70 fresh and healthy ingredients',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/849f3ca0-cfe5-4647-8ad3-83cc1cf6edc7/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 2,
        name: 'The Italian',
        description:
          'Your choice of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressinge',
        kcal: '646 kcal',
        price: '$12.49',
        image:
          'https://rs-menus-api.roocdn.com/images/157ed1e5-9c96-4b3d-a788-768c9f65993e/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 3,
        name: 'Avocado Caesar Salad',
        description:
          'Your choice of chicken or salmon with with avocado, parmesan crisps, baby plum tomatoes, egg, croutons, caesar dressing and lemon juice',
        kcal: '432 kcal',
        price: '$12.49',
        image:
          'https://rs-menus-api.roocdn.com/images/a19b0302-e9c1-409c-a206-c786f64e825c/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 4,
        name: 'Parmesan Chicken Salad',
        description:
          'Your choice of chicken or grilled chicken thigh with parmesan crisps, pesto, roasted peppers, baby plum tomatoes & ranch dressing',
        kcal: '325 kcal',
        price: '$11.49',
        image:
          'https://rs-menus-api.roocdn.com/images/e46d0de2-e053-4b63-8f88-556f2a1c0601/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 5,
        name: 'Halloumi and Roasted Veg',
        description:
          'Grilled halloumi, sweet potato, roasted peppers, roasted tomatoes, pickled red onion, pesto and balsamic vinaigrette.',
        kcal: '368 kcal',
        price: '$11.49',
        image:
          'https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 6,
        name: 'Salmon Greens and Grains',
        description:
          'smoked roast salmon with avocado, pesto, supergrains, edamame, sweet potato, baby plum tomatoes, lemon juice and olive oil',
        kcal: '554 kcal',
        price: '$12.99',
        image:
          'https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 7,
        name: 'Superfood salad',
        description:
          'feta, beetroot, cranberry, edamame, carrot, seeds & french dressing',
        kcal: '367 kcal',
        price: '$11.49',
        image:
          'https://rs-menus-api.roocdn.com/images/38572259-158c-4312-a19e-3786437acc6f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 8,
        name: 'Tuna Niçoise',
        description:
          'tuna with egg, olives, baby plum tomatoes, pickled red onion and french dressing',
        kcal: '214 kcal',
        price: '$10.49',
        image:
          'https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 9,
        name: 'Chipotle salad',
        description:
          'Your choice of chicken breast or  grilled chicken thigh with avocado, cheddar, mixed beans, tomato salsa, jalapenos, tortilla chips & ranch dressing',
        kcal: '524 kcal',
        price: '$11.99',
        image:
          'https://rs-menus-api.roocdn.com/images/0bd14802-7327-4116-a930-faa7fcaa894f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 10,
        name: 'Harissa Cauliflower salad',
        description:
          'harissa roasted cauliflower with houmous, pickled veg, roasted peppers, cucumber, mint & pomegranate relish, baby plum tomatoes, fresh herbs and tahini dressing',
        kcal: '344 kcal',
        price: '$10.49',
        image:
          'https://rs-menus-api.roocdn.com/images/26cb17f3-7506-4df3-9410-e83c6aa0443f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 11,
        name: 'Buffalo chicken',
        description:
          'Your choice of chicken or grilled chicken thigh, with feta, picked veg, sweetcorn, baby plum tomatoes, piri piri and ranch dressing',
        kcal: '540 kcal',
        price: '$11.99',
        image:
          'https://rs-menus-api.roocdn.com/images/e6735c72-96b2-4895-82d3-52220d07d4f4/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 12,
        name: 'Greek Halloumi Salad',
        description:
          'halloumi with baby plum tomatoes, cucumber, peppers, pickled red onion & olives with tahini dressing on a mixed leaf base',
        kcal: '382 kcal',
        price: '$6.99',
        image:
          'https://rs-menus-api.roocdn.com/images/2eae32df-76f0-4e18-99d0-bb13eda9098f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 13,
        name: 'Chicken & Bacon Club Salad',
        description:
          'Your choice of chicken with bacon, chunky avocado, egg, rainbow slaw, baby plum tomatoes and honey mustrd dressing',
        kcal: '619 kcal',
        price: '$13.99',
        image:
          'https://rs-menus-api.roocdn.com/images/e8edb943-dc63-4d9a-84b8-dbe8fde3eb52/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 14,
        name: 'Asian Tuna Salad',
        description:
          'tuna, rainbow slaw, broccoli, peppers, cashews, herb mix & soy dressing on a mixed leaf base.',
        kcal: '293 kcal',
        price: '$9.99',
        image:
          'https://rs-menus-api.roocdn.com/images/450c3c7f-9a8c-4cb9-83ad-cb9657baeec2/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 5,
    categoryName: 'Gym food',
    dishes: [
      {
        dishId: 1,
        name: 'Chicken, Egg & Sweet potato Favourite Box',
        description:
          'Your choice chicken,  blanched broccoli, egg & sweet potato',
        kcal: '264 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/a853e5ab-6da6-450c-a15b-bb2ba4f97c54/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 2,
        name: 'Chicken & Broccoli Favourite Box',
        description: 'Your choice of  chicken with blanched broccoli.',
        kcal: '92 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/71d24f74-fbf4-4b71-8272-b3bfe1cd154d/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 3,
        name: 'Chicken, Sweet Potato & Greens Favourite boxes',
        description: 'Your choice of chicken, blanched brocoli & sweet potato',
        kcal: '86 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/72e36516-b4c9-4fbf-9171-938457450087/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 4,
        name: 'Vegan Plant Power Protein Favourite Box',
        description: 'Falafel, houmous, mixed beans, edamame beans & cashews',
        kcal: '412 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/26132286-640e-4e9f-8395-41d65e4e6700/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 5,
        name: 'Omega Chicken & Veggies favourite box',
        description:
          'Your choice of chicken, blanched broccoli, sweet potato, beetroot & omega seeds',
        kcal: '191 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/8d627182-0978-459d-a5ca-eeed7973fa64/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 6,
        name: 'Caesar Protein Favourite Box',
        description:
          'Your choice of chicken with sweet potato,  egg, roasted tomatoes and caesar dressing',
        kcal: '524 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/2ca20924-e6ec-44fb-ad40-5da31c4af9e4/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 7,
        name: 'Tuna & Veggies Favourite Box',
        description: 'Tuna, Blanched broccoli & roasted peppers',
        kcal: '40 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/d0c423d8-5fdc-491d-a9ec-ef76f9600956/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
];
