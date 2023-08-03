const recipes = {
    curries: [
        {
            name: 'Mixed Curry',
            description: '',
            ingredients: {
                'any': 0,
            },
        },
        {
            name: 'Fancy Apple Curry',
            description: 'A simple curry that lets the natural sweetness of its apples shine.',
            ingredients: {
                'fancy-apple': 7,
            },
        },
        {
            name: 'Grilled Tail Curry',
            description: 'The tasty tail elevates the flavor of the curry roux to the next level.',
            ingredients: {
                'slowpoke-tail': 8,
                'fiery-herb': 25,
            },
        },
        {
            name: 'Solar Power Tomato Curry',
            description: 'A curry made using tomatoes that have turned bright red in the sun.',
            ingredients: {
                'snoozy-tomato': 10,
                'fiery-herb': 5,
            },
        },
        {
            name: 'Dream Eater Butter Curry',
            description: 'The ingredients in this curry all share a connection to deep sleep.',
            ingredients: {
                'soft-potato': 18,
                'snoozy-tomato': 15,
                'soothing-cacao': 12,
                'moomoo-milk': 10,
            },
        },
        {
            name: 'Spicy Leek Curry',
            description: 'The roasted leeks are fragrant and sweet as fruit, perfectly balancing the spicy roux.',
            ingredients: {
                'large-leek': 14,
                'warming-ginger': 10,
                'fiery-herb': 8,
            },
        },
        {
            name: 'Spore Mushroom Curry',
            description: 'A curry that puts you to sleep just as surely as the move Spore.',
            ingredients: {
                'tasty-mushroom': 14,
                'soft-potato': 9,
            },
        },
        {
            name: 'Egg Bomb Curry',
            description: 'A curry made with oodles of love. Its ingredients are geared toward kids.',
            ingredients: {
                'honey': 12,
                'fancy-apple': 11,
                'fancy-egg': 8,
                'soft-potato': 4,
            },
        },
        {
            name: 'Hearty Cheeseburger Curry',
            description: 'This voluminous curry is large enough to astound even a Snorlax.',
            ingredients: {
                'moomoo-milk': 8,
                'bean-sausage': 8,
            },
        },
        {
            name: 'Soft Potato Chowder',
            description: 'A thick chowder made from potatoes boiled until practically melting.',
            ingredients: {
                'moomoo-milk': 10,
                'soft-potato': 8,
                'tasty-mushroom': 4,
            },
        },
        {
            name: 'Simple Chowder',
            description: 'You can really taste the richness of the milk in this simple chowder.',
            ingredients: {
                'moomoo-milk': 7,
            },
        },
        {
            name: 'Beanburger Curry',
            description: 'The tender bean patties are the stars of the show in this curry.',
            ingredients: {
                'bean-sausage': 7,
            },
        },
        {
            name: 'Mild Honey Curry',
            description: 'A mild curry containing plenty of honey. Kids gobble it down!',
            ingredients: {
                'honey': 7,
            },
        },
        {
            name: 'Ninja Curry',
            description: 'This tofu curry is said to have been a favorite dish of ninjas.',
            ingredients: {
                'greengrass-soybeans': 15,
                'bean-sausage': 9,
                'large-leek': 9,
                'tasty-mushroom': 5,
            },
        },
        {
            name: 'Drought Katsu Curry',
            description: 'The freshly-fried cutlet has a nice sparkle to it.',
            ingredients: {
                'bean-sausage': 10,
                'pure-oil': 5,
            },
        },
        {
            name: 'Melty Omelette Curry',
            description: 'This curry is topped with a masterfully-cooked omelette that simply melts in the mouth.',
            ingredients: {
                'fancy-egg': 10,
                'snoozy-tomato': 6,
            },
        },
        {
            name: 'Bulk Up Bean Curry',
            description: 'A hearty curry packed with nutrients needed for bulking up.',
            ingredients: {
                'greengrass-soybeans': 12,
                'bean-sausage': 6,
                'fiery-herb': 4,
                'fancy-egg': 4
            }
        }
    ],
    salads: [
        {
            name: 'Mixed Salad',
            description: '',
            ingredients: {
                'any': 0,
            },
        },
        {
            name: 'Slowpoke Tail Pepper Salad',
            description: 'The mouth-tinglingly spicy pepper highlights the sweetness of the tail.',
            ingredients: {
                'slowpoke-tail': 10,
                'fiery-herb': 10,
                'pure-oil': 15,
            },
        },
        {
            name: 'Spore Mushroom Salad',
            description: 'A salad rich in minerals that improve the quality of sleep.',
            ingredients: {
                'tasty-mushroom': 17,
                'snoozy-tomato': 8,
                'pure-oil': 8,
            },
        },
        {
            name: 'Snow Cloak Caesar Salad',
            description: 'A bacon salad topped with a generous snowy sprinkling of cheese.',
            ingredients: {
                'moomoo-milk': 10,
                'bean-sausage': 6,
            },
        },
        {
            name: 'Gluttony Potato Salad',
            description: 'This potato salad contains just a hint of flavor from the Fancy Apples.',
            ingredients: {
                'soft-potato': 14,
                'fancy-egg': 9,
                'bean-sausage': 7,
                'fancy-apple': 6,
            },
        },
        {
            name: 'Water Veil Tofu Salad',
            description: 'A salad topped with wobbly cubes of tofu.',
            ingredients: {
                'greengrass-soybeans': 10,
                'snoozy-tomato': 6,
            },
        },
        {
            name: 'Superpower Extreme Salad',
            description: 'A hefty salad that provides all your daily nutrients at once.',
            ingredients: {
                'bean-sausage': 9,
                'warming-ginger': 6,
                'fancy-egg': 5,
                'soft-potato': 3,
            },
        },
        {
            name: 'Bean Ham Salad',
            description: 'This simple salad features ham made from Bean Sausages.',
            ingredients: {
                'bean-sausage': 8,
            },
        },
        {
            name: 'Snoozy Tomato Salad',
            description: 'The Snoozy Tomatoes in this simple salad are a great aid for sleep.',
            ingredients: {
                'snoozy-tomato': 8,
            },
        },
        {
            name: 'Moomoo Caprese Salad',
            description: 'A basic salad containing only cheese, tomatoes, and a splash of oil.',
            ingredients: {
                'moomoo-milk': 12,
                'snoozy-tomato': 6,
                'pure-oil': 5,
            },
        },
        {
            name: 'Contrary Chocolate Meat Salad',
            description: 'The savory sauce and sweet chocolate sauce let you enjoy a mix of flavors.',
            ingredients: {
                'soothing-cacao': 14,
                'bean-sausage': 9,
            },
        },
        {
            name: 'Overheat Ginger Salad',
            description: 'This salad\'s special ginger dressing warms you through and through.',
            ingredients: {
                'fiery-herb': 17,
                'warming-ginger': 10,
                'snoozy-tomato': 8,
            },
        },
        {
            name: 'Fancy Apple Salad',
            description: 'A simple salad accentuated by a mashed apple dressing.',
            ingredients: {
                'fancy-apple': 8,
            },
        },
        {
            name: 'Immunity Leek Salad',
            description: 'The crisp leeks in this salad do wonders for the immune system.',
            ingredients: {
                'large-leek': 10,
                'warming-ginger': 5,
            },
        },
        {
            name: 'Dazzling Apple Cheese Salad',
            description: 'The simple seasoning keeps the focus on the sublime pairing of ingredients.',
            ingredients: {
                'fancy-apple': 15,
                'moomoo-milk': 5,
                'pure-oil': 3,
            },
        },
        {
            name: 'Ninja Salad',
            description: 'Ninjas cannot resist the flavor of this tofu salad. It\'s eaten in a flash!',
            ingredients: {
                'large-leek': 15,
                'greengrass-soybeans': 15,
                'tasty-mushroom': 12,
                'warming-ginger': 11,
            },
        },
        {
            name: 'Heat Wave Tofu Salad',
            description: 'A tofu salad covered in bright red spicy sauce.',
            ingredients: {
                'greengrass-soybeans': 10,
                'fiery-herb': 6
            }
        }
    ],
    desserts: [
        {
            name: 'Mixed Juice',
            description: '',
            ingredients: {
                'any': 0,
            },
        },
        {
            name: 'Fluffy Sweet Potatoes',
            description: 'These perfectly ripe potatoes don\'t rely on honey to deliver a sweet kick.',
            ingredients: {
                'soft-potato': 9,
                'moomoo-milk': 5,
            },
        },
        {
            name: 'Steadfast Ginger Cookies',
            description: 'These cookies give you the power to tackle hardships without crumbling.',
            ingredients: {
                'honey': 14,
                'warming-ginger': 12,
                'soothing-cacao': 5,
                'fancy-egg': 4,
            },
        },
        {
            name: 'Fancy Apple Juice',
            description: 'A rich juice containing only the very best apples.',
            ingredients: {
                'fancy-apple': 8,
            },
        },
        {
            name: 'Craft Soda Pop',
            description: 'A highly carbonated artisan soda.',
            ingredients: {
                'honey': 9,
            },
        },
        {
            name: 'Ember Ginger Tea',
            description: 'Apples have been added to the spicy ginger, helping the tea go down easily.',
            ingredients: {
                'warming-ginger': 9,
                'fancy-apple': 7,
            },
        },
        {
            name: 'Jigglypuff\'s Fruity Flan',
            description: 'A very special flan that\'s as springy as a balloon.',
            ingredients: {
                'honey': 20,
                'fancy-egg': 15,
                'moomoo-milk': 10,
                'fancy-apple': 10,
            },
        },
        {
            name: 'Lovely Kiss Smoothie',
            description: 'A relaxing drink that soothes your weariness and envelops you in sleep.',
            ingredients: {
                'fancy-apple': 11,
                'moomoo-milk': 9,
                'honey': 7,
                'soothing-cacao': 8,
            },
        },
        {
            name: 'Lucky Chant Apple Pie',
            description: 'The chunky pieces of apple in this pie are lucky finds!',
            ingredients: {
                'fancy-apple': 12,
                'moomoo-milk': 4,
            },
        },
        {
            name: 'Neroli\'s Restorative Tea',
            description: 'A special restorative tea made by Professor Neroli.',
            ingredients: {
                'warming-ginger': 11,
                'fancy-apple': 15,
                'tasty-mushroom': 9,
            },
        },
        {
            name: 'Sweet Scent Chocolate Cake',
            description: 'Neither people nor PokÃ©mon can resist the lure of this cake\'s sweet aroma.',
            ingredients: {
                'honey': 9,
                'soothing-cacao': 8,
                'moomoo-milk': 7,
            },
        },
        {
            name: 'Warm Moomoo Milk',
            description: 'Moomoo Milk that has been heated to further draw out its sweetness.',
            ingredients: {
                'moomoo-milk': 7,
            },
        },
        {
            name: 'Cloud Nine Soy Cake',
            description: 'A soy cake with a nice, light texture.',
            ingredients: {
                'fancy-egg': 8,
                'greengrass-soybeans': 7,
            },
        },
        {
            name: 'Hustle Protein Smoothie',
            description: 'A glass of this sweet smoothie goes down a treat after a training session.',
            ingredients: {
                'greengrass-soybeans': 15,
                'soothing-cacao': 8,
            },
        },
        {
            name: 'Stalwart Vegetable Juice',
            description: 'An easy-to-make juice with natural sweet and sour flavors.',
            ingredients: {
                'snoozy-tomato': 9,
                'fancy-apple': 7,
            },
        },
        {
            name: 'Big Malasada',
            description: 'A special fried bread made using a recipe from the Alola region.',
            ingredients: {
                'pure-oil': 10,
                'moomoo-milk': 7,
                'honey': 6,
            },
        },
        {
            name: 'Huge Power Soy Donuts',
            description: 'Soy donuts fried to crisp perfection. They\'re bodybuilders\' friends.',
            ingredients: {
                'pure-oil': 9,
                'greengrass-soybeans': 6,
                'soothing-cacao': 7,
            },
        },
    ],
};