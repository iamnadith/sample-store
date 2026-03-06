export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  images: string[];
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "The Minimalist Chronograph",
    price: 245,
    description: "A timeless piece crafted with precision. Features a matte black dial, stainless steel case, and a premium leather strap. Perfect for both formal and casual occasions.",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524592094714-0f0654ece975?auto=format&fit=crop&q=80&w=800"
    ],
    isNew: true
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Set",
    price: 85,
    description: "Elevate your morning ritual with this handcrafted ceramic pour-over set. Includes a dripper, server, and matching mug. Glazed in a subtle speckled finish.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "3",
    name: "Linen Lounge Set",
    price: 120,
    description: "Breathable, lightweight, and effortlessly chic. This 100% European linen lounge set is designed for ultimate comfort without compromising on style.",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1515347619362-ae67ce916ce5?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1515347619362-ae67ce916ce5?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "4",
    name: "Santal & Amber Candle",
    price: 45,
    description: "Hand-poured soy wax candle with notes of sandalwood, amber, and a hint of vanilla. 50-hour burn time. Comes in a reusable matte glass vessel.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800"
    ],
    isNew: true
  },
  {
    id: "5",
    name: "Leather Weekend Duffle",
    price: 350,
    description: "The perfect companion for short getaways. Crafted from full-grain leather that develops a beautiful patina over time. Features solid brass hardware.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "6",
    name: "Matte Black Sunglasses",
    price: 110,
    description: "Classic wayfarer silhouette updated with a modern matte black finish and polarized lenses. Lightweight and durable for everyday wear.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "7",
    name: "Automatic Field Watch",
    price: 420,
    description: "Rugged yet refined. This automatic field watch features a sapphire crystal, 100m water resistance, and a durable nylon strap. Built for everyday adventures.",
    category: "Watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654ece975?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654ece975?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "8",
    name: "Cashmere Crewneck Sweater",
    price: 185,
    description: "Incredibly soft and lightweight. Knitted from 100% Grade-A Mongolian cashmere. The perfect layering piece for any season.",
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1434389678278-be4d41a5b89d?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1434389678278-be4d41a5b89d?auto=format&fit=crop&q=80&w=800"
    ],
    isNew: true
  },
  {
    id: "9",
    name: "Stoneware Dinner Plates",
    price: 65,
    description: "Set of 4 minimalist stoneware dinner plates. Finished with a matte reactive glaze that makes each piece subtly unique. Microwave and dishwasher safe.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "10",
    name: "Minimalist Leather Wallet",
    price: 55,
    description: "Slim profile cardholder crafted from vegetable-tanned leather. Holds up to 6 cards and folded bills without the bulk.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const categories = ["All", "Watches", "Home", "Apparel", "Accessories"];

