export type MenuCategoryId = "breakfast" | "lunch" | "pastries" | "coffee";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  highlight?: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    description: "Slow mornings, warm plates, soft light.",
    items: [
      {
        id: "aurelian-morning",
        name: "Aurelian Morning Plate",
        description:
          "Soft-scrambled eggs with chives, roasted cherry tomatoes, herbed potatoes, and country sourdough.",
        price: "18",
        highlight: "Best enjoyed with a flat white.",
        image: "/images/menu/aurelian-morning.jpg"
      },
      {
        id: "lemon-ricotta-pancakes",
        name: "Lemon Ricotta Pancakes",
        description:
          "Three cloud-like pancakes with Amalfi lemon zest, vanilla, mascarpone, and honeyed citrus.",
        price: "16"
      },
      {
        id: "herbed-avocado-toast",
        name: "Herbed Avocado Tartine",
        description:
          "Smoked sea salt avocado, marinated cucumbers, soft herbs, and toasted seeds on seeded sourdough.",
        price: "15"
      }
    ]
  },
  {
    id: "lunch",
    label: "Lunch",
    description: "Bright, layered plates inspired by Italian kitchens.",
    items: [
      {
        id: "porchetta-sandwich",
        name: "Porchetta & Fennel Sandwich",
        description:
          "Slow-roasted porchetta, shaved fennel, arugula, and citrus aioli on a toasted ciabatta.",
        price: "19",
        image: "/images/menu/porchetta-sandwich.jpg"
      },
      {
        id: "heirloom-tomato-salad",
        name: "Heirloom Tomato Salad",
        description:
          "Marinated heirloom tomatoes, burrata, basil oil, sourdough crumble, and aged balsamic.",
        price: "17"
      },
      {
        id: "farro-bowl",
        name: "Roasted Farro Bowl",
        description:
          "Warm farro with roasted roots, charred broccolini, tahini-lemon dressing, and toasted hazelnuts.",
        price: "18"
      }
    ]
  },
  {
    id: "pastries",
    label: "Pastries",
    description: "Baked each morning in small batches.",
    items: [
      {
        id: "almond-croissant",
        name: "Brown Butter Almond Croissant",
        description: "Twice-baked with frangipane, toasted almonds, and a whisper of orange blossom.",
        price: "6",
        image: "/images/menu/almond-croissant.jpg"
      },
      {
        id: "pear-tart",
        name: "Poached Pear Tart",
        description: "Vanilla-poached pear on almond crust with cardamom crème fraîche.",
        price: "7"
      },
      {
        id: "olive-oil-cake",
        name: "Citrus Olive Oil Cake",
        description:
          "Moist olive oil sponge with citrus zest, rosemary, and powdered sugar veil.",
        price: "7"
      }
    ]
  },
  {
    id: "coffee",
    label: "Coffee & Bar",
    description: "Thoughtfully roasted beans and a slow bar ethos.",
    items: [
      {
        id: "house-espresso",
        name: "House Espresso",
        description: "Signature blend with notes of dark chocolate, candied orange, and toasted almond.",
        price: "4.5",
        highlight: "Available as cortado, macchiato, cappuccino, or flat white."
      },
      {
        id: "honey-lavender-latte",
        name: "Honey Lavender Latte",
        description:
          "Local honey, house-made lavender syrup, and micro-foamed milk over espresso.",
        price: "6"
      },
      {
        id: "orange-tonic",
        name: "Espresso & Orange Tonic",
        description:
          "Over-ice espresso with bitter tonic, burnt orange peel, and a hint of rosemary.",
        price: "7"
      }
    ]
  }
];

export const signatureItems: MenuItem[] = [
  {
    id: "signature-cappuccino",
    name: "Aurelia Cappuccino",
    description:
      "A softly domed cappuccino crowned with chocolate lattice and a whisper of sea salt.",
    price: "5.5",
    image: "/images/signatures/aurelia-cappuccino.jpg",
    highlight: "Brazil · Ethiopia · Colombia"
  },
  {
    id: "signature-brioche",
    name: "Vanilla Bean Brioche",
    description:
      "Feather-light brioche filled with vanilla bean cream and brushed with citrus syrup.",
    price: "6.5",
    image: "/images/signatures/vanilla-brioche.jpg",
    highlight: "Best seller since opening day."
  },
  {
    id: "signature-brunch",
    name: "Sunday Table Platter",
    description:
      "A shared board with cheeses, charcuterie, seasonal fruit, jams, and warm bread.",
    price: "32",
    image: "/images/signatures/sunday-table.jpg",
    highlight: "Designed for lingering brunches."
  }
];

export const galleryImages = [
  {
    id: "corner-table",
    src: "/images/gallery/corner-table.jpg",
    alt: "Sunlit corner table with linen tablecloth and a single stem in a glass bottle.",
    label: "Corner table · Morning light"
  },
  {
    id: "bar",
    src: "/images/gallery/espresso-bar.jpg",
    alt: "Marble espresso bar with brass details and stacked ceramic cups.",
    label: "Marble bar · Espresso in motion"
  },
  {
    id: "pastry-case",
    src: "/images/gallery/pastry-case.jpg",
    alt: "Glass pastry case with croissants, tarts, and cakes on ceramic stands.",
    label: "Pastry case · Daily bake"
  },
  {
    id: "evening",
    src: "/images/gallery/evening.jpg",
    alt: "Warm evening interior with candles and guests in soft focus.",
    label: "Evening service · Candlelit"
  }
];

