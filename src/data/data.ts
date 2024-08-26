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
        dishId: 3,
        name: '*chicken & bacon club salad*',
        description:
          'HOUSE SPECIAL!\nYour choice of protein with avocado, honey mustard, pickled veg and rainbow slaw',
        kcal: '619 kcal',
        price: '$59.99',
        image:
          'https://rs-menus-api.roocdn.com/images/76b193cd-a172-4302-a39a-ad60dd3a2f8c/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 4,
        name: '*honey mustard rainbow wrap*',
        description:
          'HOUSE SPECIAL!\nYour choice of protein with avocado, honey mustard, pickled veg and rainbow slaw',
        kcal: '542 kcal',
        price: '$6.99',
        image:
          'https://rs-menus-api.roocdn.com/images/3f2ff3c8-a9ec-495f-903b-51b63ec9c018/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 5,
        name: '*greek halloumi salad*',
        description:
          'HOUSE SPECIAL!\nhalloumi with baby plum tomatoes, cucumber, peppers, pickled red onion & olives with tahini dressing on a mixed leaf base',
        kcal: '382 kcal',
        price: '$6.99',
        image:
          'https://rs-menus-api.roocdn.com/images/ee5ff9ef-ea3c-4b6e-b2e0-3497a4c151ca/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 6,
        name: '*ACG juice*',
        description:
          'freshly squeezed apple, carrot, ginger freshly squeezed juice',
        kcal: '117 kcal',
        price: '$3.99',
        image:
          'https://rs-menus-api.roocdn.com/images/b852ebf1-4f64-4712-9e24-1a016054b9a4/image.jpeg?width=98&height=98&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 7,
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
        dishId: 8,
        name: 'Create Your Own Salad',
        description:
          'Create your own masterpiece! choose from over 70 fresh and healthy ingredients',
        price: '$7.99',
        popular: 'Popular',
        image:
          'https://rs-menus-api.roocdn.com/images/849f3ca0-cfe5-4647-8ad3-83cc1cf6edc7/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 9,
        name: 'Create Your Own Wrap',
        description:
          'Get lunch your way! With over 60 fresh options to choose from you can create your own masterpiece everyday!',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/4625ca23-e030-4b9e-b44e-f78d0cb02773/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 10,
        name: 'Vegan Create your Own salad',
        description:
          'Get lunch your way! Choose your favourite ingredients to create your own masterpiece everyday!',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/5697309f-5b56-4bfb-a756-c079ef58c2cf/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 11,
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
        dishId: 12,
        name: 'Create Your Own Salad',
        description:
          'Create your own masterpiece! choose from over 70 fresh and healthy ingredients',
        price: '$7.99',
        popular: 'Popular',
        image:
          'https://rs-menus-api.roocdn.com/images/849f3ca0-cfe5-4647-8ad3-83cc1cf6edc7/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 13,
        name: 'The Italian',
        description:
          'Your choice of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressinge',
        kcal: '646 kcal',
        price: '$12.49',
        popular: 'Popular',
        image:
          'https://rs-menus-api.roocdn.com/images/157ed1e5-9c96-4b3d-a788-768c9f65993e/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 14,
        name: 'Avocado Caesar Salad',
        description:
          'Your choice of chicken or salmon with with avocado, parmesan crisps, baby plum tomatoes, egg, croutons, caesar dressing and lemon juice',
        kcal: '432 kcal',
        price: '$12.49',
        image:
          'https://rs-menus-api.roocdn.com/images/a19b0302-e9c1-409c-a206-c786f64e825c/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 15,
        name: 'Parmesan Chicken Salad',
        description:
          'Your choice of chicken or grilled chicken thigh with parmesan crisps, pesto, roasted peppers, baby plum tomatoes & ranch dressing',
        kcal: '325 kcal',
        price: '$11.49',
        popular: 'Popular',
        image:
          'https://rs-menus-api.roocdn.com/images/e46d0de2-e053-4b63-8f88-556f2a1c0601/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 16,
        name: 'Halloumi and Roasted Veg',
        description:
          'Grilled halloumi, sweet potato, roasted peppers, roasted tomatoes, pickled red onion, pesto and balsamic vinaigrette.',
        kcal: '368 kcal',
        price: '$11.49',
        image:
          'https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 17,
        name: 'Salmon Greens and Grains',
        description:
          'smoked roast salmon with avocado, pesto, supergrains, edamame, sweet potato, baby plum tomatoes, lemon juice and olive oil',
        kcal: '554 kcal',
        price: '$12.99',
        image:
          'https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 18,
        name: 'Superfood salad',
        description:
          'feta, beetroot, cranberry, edamame, carrot, seeds & french dressing',
        kcal: '367 kcal',
        price: '$11.49',
        image:
          'https://rs-menus-api.roocdn.com/images/38572259-158c-4312-a19e-3786437acc6f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 19,
        name: 'Tuna Niçoise',
        description:
          'tuna with egg, olives, baby plum tomatoes, pickled red onion and french dressing',
        kcal: '214 kcal',
        price: '$10.49',
        image:
          'https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 20,
        name: 'Chipotle salad',
        description:
          'Your choice of chicken breast or  grilled chicken thigh with avocado, cheddar, mixed beans, tomato salsa, jalapenos, tortilla chips & ranch dressing',
        kcal: '524 kcal',
        price: '$11.99',
        image:
          'https://rs-menus-api.roocdn.com/images/0bd14802-7327-4116-a930-faa7fcaa894f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 21,
        name: 'Harissa Cauliflower salad',
        description:
          'harissa roasted cauliflower with houmous, pickled veg, roasted peppers, cucumber, mint & pomegranate relish, baby plum tomatoes, fresh herbs and tahini dressing',
        kcal: '344 kcal',
        price: '$10.49',
        image:
          'https://rs-menus-api.roocdn.com/images/26cb17f3-7506-4df3-9410-e83c6aa0443f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 22,
        name: 'Buffalo chicken',
        description:
          'Your choice of chicken or grilled chicken thigh, with feta, picked veg, sweetcorn, baby plum tomatoes, piri piri and ranch dressing',
        kcal: '540 kcal',
        price: '$11.99',
        image:
          'https://rs-menus-api.roocdn.com/images/e6735c72-96b2-4895-82d3-52220d07d4f4/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 23,
        name: 'Greek Halloumi Salad',
        description:
          'halloumi with baby plum tomatoes, cucumber, peppers, pickled red onion & olives with tahini dressing on a mixed leaf base',
        kcal: '382 kcal',
        price: '$6.99',
        image:
          'https://rs-menus-api.roocdn.com/images/2eae32df-76f0-4e18-99d0-bb13eda9098f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 24,
        name: 'Chicken & Bacon Club Salad',
        description:
          'Your choice of chicken with bacon, chunky avocado, egg, rainbow slaw, baby plum tomatoes and honey mustrd dressing',
        kcal: '619 kcal',
        price: '$13.99',
        image:
          'https://rs-menus-api.roocdn.com/images/e8edb943-dc63-4d9a-84b8-dbe8fde3eb52/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 25,
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
        dishId: 26,
        name: 'Chicken, Egg & Sweet potato Favourite Box',
        description:
          'Your choice chicken,  blanched broccoli, egg & sweet potato',
        kcal: '264 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/a853e5ab-6da6-450c-a15b-bb2ba4f97c54/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 27,
        name: 'Chicken & Broccoli Favourite Box',
        description: 'Your choice of  chicken with blanched broccoli.',
        kcal: '92 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/71d24f74-fbf4-4b71-8272-b3bfe1cd154d/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 28,
        name: 'Chicken, Sweet Potato & Greens Favourite boxes',
        description: 'Your choice of chicken, blanched brocoli & sweet potato',
        kcal: '86 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/72e36516-b4c9-4fbf-9171-938457450087/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 29,
        name: 'Vegan Plant Power Protein Favourite Box',
        description: 'Falafel, houmous, mixed beans, edamame beans & cashews',
        kcal: '412 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/26132286-640e-4e9f-8395-41d65e4e6700/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 30,
        name: 'Omega Chicken & Veggies favourite box',
        description:
          'Your choice of chicken, blanched broccoli, sweet potato, beetroot & omega seeds',
        kcal: '191 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/8d627182-0978-459d-a5ca-eeed7973fa64/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 31,
        name: 'Caesar Protein Favourite Box',
        description:
          'Your choice of chicken with sweet potato,  egg, roasted tomatoes and caesar dressing',
        kcal: '524 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/2ca20924-e6ec-44fb-ad40-5da31c4af9e4/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 32,
        name: 'Tuna & Veggies Favourite Box',
        description: 'Tuna, Blanched broccoli & roasted peppers',
        kcal: '40 kcal',
        price: '$9.49',
        image:
          'https://rs-menus-api.roocdn.com/images/d0c423d8-5fdc-491d-a9ec-ef76f9600956/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 6,
    categoryName: 'Hot Power Bowls',
    dishes: [
      {
        dishId: 33,
        name: 'Mighty Mexican',
        description:
          'Our best seller! All the best bits of Mexico - in one bowl:\nyour choice of hot protein served on our famous Low GI supergrains with chunky smashed avocado, house-made spicy beans, crunchy torilla chips and finished with a sprinkling of mature cheddar',
        kcal: '377 kcal',
        price: '$13.39',
        image:
          'https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 34,
        name: 'Create Your Own Powerbowl',
        description:
          'choose your base, choose your protein, choose your hot veggie, choose your cold veggie, choose your sauce, choose your topping, add seasoning',
        price: '$13.39',
        image:
          'https://rs-menus-api.roocdn.com/images/352d80bf-b19e-4589-9614-55ba5fabe5e9/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 35,
        name: 'Shawarma Powerbowl',
        description:
          'A warming dish filled with middle eastern flavours your choice of hot protein served on our famous Low GI supergrains with hot spicy beans, cucumber, mint & pomegranate relish, tahini dressing and seeds',
        kcal: '360 kcal',
        price: '$13.39',
        image:
          'https://rs-menus-api.roocdn.com/images/bb3d52a5-dc64-4152-b827-66e66a5be11d/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 36,
        name: 'Malaysian Yellow Curry',
        description:
          'A delicate and subtle curry dish:\nyour choice of hot protein served on our famous Low GI supergrains with soy and sesame marinaded mushrooms, roasted veggies, hand-made malaysian curry sauce and finished with a sprinking of toasted cashews',
        kcal: '237 kcal',
        price: '$13.39',
        image:
          'https://rs-menus-api.roocdn.com/images/59636057-51ed-46ec-be2f-6c0f06a4d9e4/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 37,
        name: 'Lentil Dahl Power bowl',
        description:
          'A classic and warming Indian dish:Your choice of protein served on our famous Low GI supergrains & white basmati rice with  roasted veggies, cucumber, mint & pomegranate relish, hand-made lentil dahl and finished with a sprinking of fresh herbs',
        kcal: '122 kcal',
        price: '$10.99',
        image:
          'https://rs-menus-api.roocdn.com/images/d7a90141-8ffd-4547-80d5-dfec1e1b140f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 38,
        name: 'Katsu Curry',
        description:
          'Our Katsu curry is inspired by the classic Japanese dish:your choice of hot protein served on our famous Low GI supergrains with soy  marinaded mushrooms, house pickled veg, hand-made katsu curry sauce and finished with a sprinkling of crispy fried shallots .For every katsu curry sold we will donate 50p to Greenhouse sports',
        kcal: '173 kcal',
        price: '$13.39',
        image:
          'https://rs-menus-api.roocdn.com/images/807f0609-dbed-42ac-be0a-0c6a339ea367/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 7,
    categoryName: 'Rainbow Wraps',
    dishes: [
      {
        dishId: 39,
        name: 'Create Your Own Wrap',
        description:
          'Get lunch your way! With over 60 fresh options to choose from you can create your own masterpiece everyday!',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/4625ca23-e030-4b9e-b44e-f78d0cb02773/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 40,
        name: 'Shawarma Rainbow wrap',
        description:
          'Shawarma Rainbow wrap with houmous, cucumber, mint & pomegranate relish  pickled veg and rainbow slaw',
        kcal: '444 kcal',
        price: '$9.89',
        image:
          'https://rs-menus-api.roocdn.com/images/e4a2a6de-dc1c-4748-8a4c-b3789d66fee8/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 41,
        name: 'BBQ Wrap',
        description:
          'BBQ wrap with avocado, BBQ sauce, pickled veg and rainbow slaw',
        kcal: '488 kcal',
        price: '$9.89',
        image:
          'https://rs-menus-api.roocdn.com/images/61006812-71b4-4119-b7a1-54531fef50bf/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 42,
        name: 'Super Avocado Caesar',
        description:
          'Super Avocado Caesar with avocado, piri piri dressing, pickled veg and rainbow slaw',
        kcal: '491 kcal',
        price: '$10.39',
        image:
          'https://rs-menus-api.roocdn.com/images/f8ea63d0-6652-46fc-8dce-1f12a6b972db/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 43,
        name: 'Piri Protein',
        description:
          'Piri Protein with avocado, piri piri dressing, pickled veg and rainbow slaw',
        kcal: '484 kcal',
        price: '$10.39',
        image:
          'https://rs-menus-api.roocdn.com/images/d16062eb-d2e6-4465-b37e-1f2d44981bd5/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 44,
        name: 'Soy and Sesame',
        description:
          'Soy & Sesame with avocado, piri piri dressing, pickled veg and rainbow slaw',
        kcal: '470 kcal',
        price: '$10.39',
        image:
          'https://rs-menus-api.roocdn.com/images/ce35e8a9-f13d-4b1a-96b5-dc61d75b9f8f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 8,
    categoryName: 'Vegan Menu',
    dishes: [
      {
        dishId: 45,
        name: 'Vegan Create your Own salad',
        description:
          'Get lunch your way! Choose your favourite ingredients to create your own masterpiece everyday!',
        price: '$7.99',
        image:
          'https://rs-menus-api.roocdn.com/images/5697309f-5b56-4bfb-a756-c079ef58c2cf/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 46,
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
    id: 9,
    categoryName: 'Snacks & Sides',
    dishes: [
      {
        dishId: 46,
        name: 'Halloumi and Avocado',
        description: '',
        kcal: '258 kcal',
        price: '$3.49',
        image:
          'https://rs-menus-api.roocdn.com/images/83ed7fa0-0300-42de-8b31-ee94ec849e0f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 47,
        name: 'properchips salt & vinegar',
        description: 'Proper lentils chips.  Loads of flavour, loads of crunch',
        price: '$2.39',
        image:
          'https://rs-menus-api.roocdn.com/images/f6b59093-9628-4ef7-a748-c62fd89b213e/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 48,
        name: 'Salmon and Avocado',
        description:
          'Your choice of chicken or salmon with with avocado, parmesan crisps, baby plum tomatoes, egg, croutons, caesar dressing and lemon juice',
        kcal: '432 kcal',
        price: '$12.49',
        image:
          'https://rs-menus-api.roocdn.com/images/bf9a341c-ab6b-4b66-a1fb-78af180a16d3/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 49,
        name: 'kind bar - crunchy peanut butter protein',
        description:
          'Combining crunchy & smooth peanut butter with the added crunch of whole peanuts for a tasty plant-based protein boost.',
        kcal: '259 kcal',
        price: '$3.39',
        image:
          'https://rs-menus-api.roocdn.com/images/97795521-7f92-4002-b024-a30edffd1bc8/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 50,
        name: 'Plant Protein',
        description: 'Houmous and vegan falafel.',
        kcal: '219 kcal',
        price: '$3.99',
        image:
          'https://rs-menus-api.roocdn.com/images/b82b6b7a-a707-45b6-925f-2126da8154ac/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 51,
        name: 'urban fruit - mango',
        description:
          'Gently baked mango (100%). No added sugar, no sulfites, nothing. 1 of your 5 a day, no added sugar, high in fibre, gluten free and Vegan.',
        kcal: '107 kcal',
        price: '$2.89',
        image:
          'https://rs-menus-api.roocdn.com/images/5ab1b9ed-239b-4580-8f83-65f2993a83de/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 52,
        name: 'properchips bbq',
        description: 'Proper lentils chips.  Loads of flavour, loads of crunch',
        price: '$2.39',
        image:
          'https://rs-menus-api.roocdn.com/images/2e3ab8a1-d594-4081-a8a8-dfc382dbfc4a/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 53,
        name: 'dark chocolate rice cakes',
        description:
          "The perfect balance of delicious dark chocolate and a satisfyingly crisp rice base.  Gluten free, vegetarian, and at 85 calories per rice cake, what's not to love!.",
        kcal: '169 kcal',
        price: '$2.09',
        image:
          'https://rs-menus-api.roocdn.com/images/e319b1e6-162a-40cc-b9fe-a882d6e485fc/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 54,
        name: 'eat real - sour cream & chive',
        description:
          'Gluten free, vegan friendly and contain 40% less fat than regular potato crisps and they taste great.',
        kcal: '90 kcal',
        price: '$1.89',
        image:
          'https://rs-menus-api.roocdn.com/images/35faa150-185a-4192-9c67-8ffc669c3594/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 55,
        name: 'Hippeas - take it cheesy',
        description:
          'Hippeas chickpea puffs are low calorie, certified gluten free and vegan. Light, crunchy & delicious.',
        kcal: '90 kcal',
        price: '$2.39',
        image:
          'https://rs-menus-api.roocdn.com/images/61ad9d15-0b34-4c48-9080-1033b8832df2/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 56,
        name: 'Chicken Piri Piri',
        description: 'Grilled chicken thigh and spicy piri piri sauce.',
        kcal: '200 kcal',
        price: '$2.49',
        image:
          'https://rs-menus-api.roocdn.com/images/30effda3-e332-4856-820c-276385d05fa5/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 57,
        name: 'love corn - salt & vinegar',
        description:
          'Gluten free, vegan, high in fibre, 50% less fat than potato crisps.',
        kcal: '192 kcal',
        price: '$2.89',
        image:
          'https://rs-menus-api.roocdn.com/images/c4da9d20-95eb-43f6-8f90-89d0fb1e7737/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 58,
        name: 'Propercorn Sweet & Salty',
        description: '',
        price: '$2.39',
        image:
          'https://rs-menus-api.roocdn.com/images/8dc0b82b-2b9e-457a-b5db-e5575eaba00f/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 59,
        name: 'natures valley oats & honey',
        description: 'Packed with natural wholegrain oats and real honey',
        kcal: '192 kcal',
        price: '$1.89',
        image:
          'https://rs-menus-api.roocdn.com/images/fdaca556-b1c3-4151-a5b4-7dcb93e4ec94/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 60,
        name: 'perkier bar - salted caramel  & dark chocolate',
        description:
          'Perkier Salted Caramel & Dark Chocolate bar is a delicious healthy snack,   benefits include 100% more fibre, 40% less sugar and 30% more protein than other healthy snacks.',
        kcal: '159 kcal',
        price: '$2.89',
        image:
          'https://rs-menus-api.roocdn.com/images/9281efd6-1521-4120-9912-48fb3ae606a8/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 61,
        name: 'graze - chilli & lime nuts',
        description:
          'A plant-powered mix of chilli and lime flavoured cashews, salted peanuts and almonds. High in fibre and vitamin E. Source of protein. No artificial colors, flavours or preservatives.',
        kcal: '227 kcal',
        price: '$3.39',
        image:
          'https://rs-menus-api.roocdn.com/images/bcad9db3-f6b9-4e11-b801-95fdfccd5d16/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 62,
        name: 'trek bar - cocoa oat flapjack',
        description:
          'Trek is completely natural, vegan and gluten & dairy free. With 10g of added plant based protein this delicious flapjack is sure to satisfy',
        kcal: '227 kcal',
        price: '$2.39',
        image:
          'https://rs-menus-api.roocdn.com/images/531005c4-edae-44b0-9fb1-8f0b9ef5cd60/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 10,
    categoryName: 'Yoghurt & fruit',
    dishes: [
      {
        dishId: 63,
        name: 'Honey and Yoghurt',
        description: '',
        kcal: '314 kcal',
        price: '$2.99',
        image:
          'https://rs-menus-api.roocdn.com/images/5293bd67-53dd-49ec-a7ac-7914c6e03bac/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 64,
        name: 'Banana',
        description: '',

        price: '$1.19',
        image:
          'https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 65,
        name: 'Big Fat Greek',
        description: '',
        kcal: '462 kcal',
        price: '$3.99',
        image:
          'https://rs-menus-api.roocdn.com/images/2456f5e6-22aa-40bd-a8e4-e11a6716212e/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 66,
        name: 'Banana and Custard',
        description: '',
        kcal: '167 kcal',
        price: '$2.99',
        image:
          'https://rs-menus-api.roocdn.com/images/84920bd1-b888-4470-9926-cb1ff272ebb7/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 67,
        name: 'Mango and Passionfruit',
        description: '',
        kcal: '226 kcal',
        price: '$3.99',
        image:
          'https://rs-menus-api.roocdn.com/images/6e4d99c6-00df-4817-ac12-3a4a7b70dc2d/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 68,
        name: 'Apple',
        description: '',

        price: '$1.19',
        image:
          'https://rs-menus-api.roocdn.com/images/2be4e3b5-e2cc-4574-86e7-c7fbd127c7d6/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
  {
    id: 11,
    categoryName: 'Cold Drinks',
    dishes: [
      {
        dishId: 69,
        name: 'Coconut Water',
        description: '',
        price: '$3.99',
        image:
          'https://rs-menus-api.roocdn.com/images/ab3d55fd-463f-4ae9-9503-6c844ce41e52/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 70,
        name: 'Coke Zero can',
        description: '',
        price: '$2.49',
        image:
          'https://rs-menus-api.roocdn.com/images/36f87744-afe3-4b1e-a739-cb8d214976b8/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 71,
        name: 'Diet Coke can',
        description: '',
        price: '$2.49',
        image:
          'https://rs-menus-api.roocdn.com/images/0f2cb9c1-53b5-4614-9d35-606d3bffca57/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 72,
        name: 'Coke can',
        description: '',
        price: '$2.69',
        image:
          'https://rs-menus-api.roocdn.com/images/dabec76d-c182-4a76-9dc0-8b30c5b2ef51/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 73,
        name: "Dalston's lemonade",
        description: '',
        price: '$2.99',
        image:
          'https://rs-menus-api.roocdn.com/images/8b6a220e-677a-4f75-ad65-599665163c06/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 74,
        name: 'Life water still can',
        description: '',
        price: '$2.49',
        image:
          'https://rs-menus-api.roocdn.com/images/8994cf42-dbde-4dc6-9164-bd0ddd4730f2/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 75,
        name: 'Cloudy Apple',
        description: '',
        price: '$2.99',
        image:
          'https://rs-menus-api.roocdn.com/images/f6c2b5ae-b1a4-4151-aa9c-3c313d69c6ff/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 76,
        name: 'Life water sparkling can',
        description: '',
        price: '$2.49',
        image:
          'https://rs-menus-api.roocdn.com/images/14171452-65be-445d-8261-1d128611f093/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
      {
        dishId: 77,
        name: "Dalston's ginger beer",
        description: '',
        price: '$2.99',
        image:
          'https://rs-menus-api.roocdn.com/images/896a82da-8dd7-4d65-b373-546698ac309e/image.jpeg?width=196&height=196&auto=webp&format=jpg&fit=crop',
      },
    ],
  },
];
