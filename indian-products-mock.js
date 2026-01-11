// Indian Products with Multi-Platform Pricing
// Copy this into the generateMockProducts function in index.html

const products = {
    electronics: [
        {
            name: 'boAt Airdopes 131 TWS Earbuds',
            image: '🎧',
            description: 'True wireless earbuds with 60H playback, ENx™ Tech, ASAP™ Charge, IWP™ Technology. IPX4 water resistance for workouts.',
            matchReason: 'Best-selling budget TWS in India with great battery life',
            platforms: [
                { name: 'Amazon.in', price: '₹1,299', available: true, rating: '4.1', reviews: '1,45,234', url: 'https://www.amazon.in/s?k=boAt+Airdopes+131' },
                { name: 'Flipkart', price: '₹1,199', available: true, rating: '4.2', reviews: '98,456', url: 'https://www.flipkart.com/search?q=boat+airdopes+131' },
                { name: 'Myntra', price: '₹1,349', available: false }
            ]
        },
        {
            name: 'OnePlus Nord CE 3 Lite 5G',
            image: '📱',
            description: '8GB RAM, 128GB Storage, Snapdragon 695, 108MP Camera, 5000mAh battery with 67W SUPERVOOC charging.',
            matchReason: 'Popular mid-range 5G phone with excellent camera',
            platforms: [
                { name: 'Amazon.in', price: '₹19,999', available: true, rating: '4.3', reviews: '12,456', url: 'https://www.amazon.in/s?k=OnePlus+Nord+CE+3+Lite' },
                { name: 'Flipkart', price: '₹19,499', available: true, rating: '4.4', reviews: '8,234', url: 'https://www.flipkart.com/search?q=oneplus+nord+ce+3+lite' },
                { name: 'Croma', price: '₹19,990', available: true, rating: '4.2', reviews: '342' }
            ]
        },
        {
            name: 'Noise ColorFit Pro 4 Alpha Smartwatch',
            image: '⌚',
            description: '1.78" AMOLED Display, Bluetooth Calling, 100+ Sports Modes, Heart Rate & SpO2 Monitoring, 7 Days Battery.',
            matchReason: 'Top-rated Indian smartwatch brand with premium features',
            platforms: [
                { name: 'Amazon.in', price: '₹2,499', available: true, rating: '4.0', reviews: '34,567', url: 'https://www.amazon.in/s?k=Noise+ColorFit+Pro+4+Alpha' },
                { name: 'Flipkart', price: '₹2,299', available: true, rating: '4.1', reviews: '23,891', url: 'https://www.flipkart.com/search?q=noise+colorfit+pro+4' },
                { name: 'Myntra', price: '₹2,599', available: false }
            ]
        }
    ],
    fashion: [
        {
            name: 'Nike Air Max SC Running Shoes',
            image: '👟',
            description: 'Lightweight cushioning with Max Air unit. Durable leather and textile upper. Perfect for daily wear and light workouts.',
            matchReason: 'Iconic Nike comfort at accessible price point',
            platforms: [
                { name: 'Amazon.in', price: '₹6,495', available: true, rating: '4.3', reviews: '2,345', url: 'https://www.amazon.in/s?k=Nike+Air+Max+SC' },
                { name: 'Flipkart', price: '₹6,299', available: true, rating: '4.4', reviews: '1,234', url: 'https://www.flipkart.com/search?q=nike+air+max+sc' },
                { name: 'Myntra', price: '₹6,495', available: true, rating: '4.3', reviews: '3,456' }
            ]
        },
        {
            name: 'Levi\'s 511 Slim Fit Jeans',
            image: '👖',
            description: 'Classic slim fit with stretch denim. Mid-rise, sits below waist. Versatile for casual and smart-casual wear.',
            matchReason: 'Timeless Levi\'s quality with modern fit',
            platforms: [
                { name: 'Amazon.in', price: '₹2,999', available: true, rating: '4.2', reviews: '8,901', url: 'https://www.amazon.in/s?k=Levis+511+Slim+Fit' },
                { name: 'Myntra', price: '₹2,699', available: true, rating: '4.3', reviews: '12,345', url: 'https://www.myntra.com/levis-jeans' },
                { name: 'Ajio', price: '₹2,849', available: true, rating: '4.1', reviews: '4,567' }
            ]
        },
        {
            name: 'Adidas Essentials Solid T-Shirt',
            image: '👕',
            description: 'Regular fit cotton tee with iconic 3-Stripes. Soft, comfortable fabric. Available in multiple colors.',
            matchReason: 'Affordable Adidas quality for everyday wear',
            platforms: [
                { name: 'Amazon.in', price: '₹999', available: true, rating: '4.1', reviews: '5,678', url: 'https://www.amazon.in/s?k=Adidas+Essentials+T-shirt' },
                { name: 'Flipkart', price: '₹949', available: true, rating: '4.0', reviews: '3,456', url: 'https://www.flipkart.com/search?q=adidas+essentials' },
                { name: 'Myntra', price: '₹999', available: true, rating: '4.2', reviews: '7,890' }
            ]
        }
    ],
    home: [
        {
            name: 'Prestige IRIS 750W Mixer Grinder',
            image: '🍲',
            description: '3 Stainless Steel Jars, Powerful 750W Motor, Sturdy ABS Body, 2-Year Warranty. Perfect for Indian kitchen.',
            matchReason: 'Trusted Indian brand with excellent grinding power',
            platforms: [
                { name: 'Amazon.in', price: '₹3,199', available: true, rating: '4.3', reviews: '23,456', url: 'https://www.amazon.in/s?k=Prestige+IRIS+750W' },
                { name: 'Flipkart', price: '₹2,999', available: true, rating: '4.2', reviews: '18,901', url: 'https://www.flipkart.com/search?q=prestige+mixer+grinder' },
                { name: 'Croma', price: '₹3,290', available: true, rating: '4.1', reviews: '567' }
            ]
        },
        {
            name: 'Philips Daily Collection Air Fryer',
            image: '☕',
            description: '4.1L capacity, Rapid Air Technology, Fat removal, Digital display with preset menus. Dishwasher safe parts.',
            matchReason: 'Popular air fryer for healthy Indian cooking',
            platforms: [
                { name: 'Amazon.in', price: '₹8,499', available: true, rating: '4.4', reviews: '15,678', url: 'https://www.amazon.in/s?k=Philips+Air+Fryer' },
                { name: 'Flipkart', price: '₹7,999', available: true, rating: '4.3', reviews: '12,345', url: 'https://www.flipkart.com/search?q=philips+air+fryer' },
                { name: 'Croma', price: '₹8,990', available: true, rating: '4.2', reviews: '2,345' }
            ]
        },
        {
            name: 'Wipro 9W B22 LED Smart Bulb',
            image: '💡',
            description: 'WiFi enabled, 16 million colors, Works with Alexa & Google Home, App control, Voice control, Schedule & timer.',
            matchReason: 'Affordable Indian smart home solution',
            platforms: [
                { name: 'Amazon.in', price: '₹599', available: true, rating: '4.0', reviews: '8,901', url: 'https://www.amazon.in/s?k=Wipro+Smart+Bulb' },
                { name: 'Flipkart', price: '₹549', available: true, rating: '3.9', reviews: '5,432', url: 'https://www.flipkart.com/search?q=wipro+smart+bulb' },
                { name: 'Croma', price: '₹649', available: true, rating: '4.1', reviews: '234' }
            ]
        }
    ],
    sports: [
        {
            name: 'Nivia Storm Football (Size 5)',
            image: '⚽',
            description: 'PVC Moulded construction, Machine stitched, Suitable for hard ground. Official size and weight.',
            matchReason: 'Popular Indian sports brand, durable for Indian conditions',
            platforms: [
                { name: 'Amazon.in', price: '₹499', available: true, rating: '4.2', reviews: '12,345', url: 'https://www.amazon.in/s?k=Nivia+Storm+Football' },
                { name: 'Flipkart', price: '₹449', available: true, rating: '4.1', reviews: '8,901', url: 'https://www.flipkart.com/search?q=nivia+football' },
                { name: 'Decathlon', price: '₹499', available: true, rating: '4.0', reviews: '1,234' }
            ]
        },
        {
            name: 'Boldfit Gym Shaker Bottle 700ml',
            image: '🥤',
            description: 'BPA Free, Leak-proof, Wire ball mixer, Wide mouth, Measurement markings. Dishwasher safe.',
            matchReason: 'Top-rated fitness accessory brand in India',
            platforms: [
                { name: 'Amazon.in', price: '₹299', available: true, rating: '4.3', reviews: '45,678', url: 'https://www.amazon.in/s?k=Boldfit+Shaker' },
                { name: 'Flipkart', price: '₹249', available: true, rating: '4.2', reviews: '23,456', url: 'https://www.flipkart.com/search?q=boldfit+shaker' },
                { name: 'Myntra', price: '₹329', available: false }
            ]
        },
        {
            name: 'Cockatoo Yoga Mat 6mm with Bag',
            image: '🧘',
            description: 'Anti-skid texture, High density foam, Eco-friendly, With carrying strap. Perfect for home workouts.',
            matchReason: 'Best-selling affordable yoga mat in India',
            platforms: [
                { name: 'Amazon.in', price: '₹699', available: true, rating: '4.1', reviews: '28,901', url: 'https://www.amazon.in/s?k=Cockatoo+Yoga+Mat' },
                { name: 'Flipkart', price: '₹649', available: true, rating: '4.0', reviews: '15,678', url: 'https://www.flipkart.com/search?q=yoga+mat' },
                { name: 'Decathlon', price: '₹749', available: true, rating: '4.2', reviews: '3,456' }
            ]
        }
    ],
    beauty: [
        {
            name: 'Lakme 9to5 Primer + Matte Lipstick',
            image: '💄',
            description: 'Long-lasting matte finish, Enriched with Vitamin E, Non-drying formula. Multiple shades available.',
            matchReason: 'India\'s most trusted makeup brand',
            platforms: [
                { name: 'Amazon.in', price: '₹425', available: true, rating: '4.2', reviews: '34,567', url: 'https://www.amazon.in/s?k=Lakme+9to5+Lipstick' },
                { name: 'Nykaa', price: '₹399', available: true, rating: '4.3', reviews: '56,789', url: 'https://www.nykaa.com/lakme-lipstick' },
                { name: 'Myntra', price: '₹449', available: true, rating: '4.1', reviews: '12,345' }
            ]
        },
        {
            name: 'Minimalist 10% Niacinamide Face Serum',
            image: '🧴',
            description: 'For acne & acne marks, Oil control, Pore tightening, Fragrance-free, Non-comedogenic. Made in India.',
            matchReason: 'Trending Indian skincare brand with proven results',
            platforms: [
                { name: 'Amazon.in', price: '₹599', available: true, rating: '4.4', reviews: '23,456', url: 'https://www.amazon.in/s?k=Minimalist+Niacinamide' },
                { name: 'Nykaa', price: '₹549', available: true, rating: '4.5', reviews: '18,901', url: 'https://www.nykaa.com/minimalist-serum' },
                { name: 'Flipkart', price: '₹579', available: true, rating: '4.3', reviews: '8,765' }
            ]
        },
        {
            name: 'Vega VHDH-05 1200W Hair Dryer',
            image: '💇',
            description: '1200W power, 2 heat/speed settings, Cool shot function, Concentrator nozzle. Foldable for travel.',
            matchReason: 'Affordable professional-quality hair dryer',
            platforms: [
                { name: 'Amazon.in', price: '₹749', available: true, rating: '4.0', reviews: '15,678', url: 'https://www.amazon.in/s?k=Vega+Hair+Dryer' },
                { name: 'Flipkart', price: '₹699', available: true, rating: '3.9', reviews: '9,876', url: 'https://www.flipkart.com/search?q=vega+hair+dryer' },
                { name: 'Nykaa', price: '₹799', available: true, rating: '4.1', reviews: '4,567' }
            ]
        }
    ],
    books: [
        {
            name: 'Amazon Kindle (11th Gen) with 6" Display',
            image: '📚',
            description: 'Glare-free display, 16GB storage, Weeks of battery life, Access to millions of books. Made for reading.',
            matchReason: 'Best e-reader for Indian readers',
            platforms: [
                { name: 'Amazon.in', price: '₹8,999', available: true, rating: '4.5', reviews: '67,890', url: 'https://www.amazon.in/Kindle-6-display' },
                { name: 'Flipkart', price: '₹9,499', available: true, rating: '4.4', reviews: '3,456', url: 'https://www.flipkart.com/search?q=kindle' },
                { name: 'Croma', price: '₹8,999', available: true, rating: '4.5', reviews: '1,234' }
            ]
        },
        {
            name: 'Atomic Habits by James Clear (Paperback)',
            image: '📖',
            description: 'Bestselling self-help book on habit formation. Transform your life with tiny changes. #1 Indian bestseller.',
            matchReason: 'Life-changing book, highly rated in India',
            platforms: [
                { name: 'Amazon.in', price: '₹399', available: true, rating: '4.6', reviews: '1,23,456', url: 'https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834' },
                { name: 'Flipkart', price: '₹379', available: true, rating: '4.5', reviews: '89,012', url: 'https://www.flipkart.com/atomic-habits' },
                { name: 'Amazon.in (Kindle)', price: '₹279', available: true, rating: '4.6', reviews: '45,678' }
            ]
        },
        {
            name: 'Classmate Pulse 6-Subject Notebook',
            image: '📝',
            description: '300 pages, Ruled, Superior quality paper, Spiral binding. Perfect for students and professionals.',
            matchReason: 'Most popular notebook brand in India',
            platforms: [
                { name: 'Amazon.in', price: '₹189', available: true, rating: '4.3', reviews: '12,345', url: 'https://www.amazon.in/s?k=Classmate+Notebook' },
                { name: 'Flipkart', price: '₹175', available: true, rating: '4.2', reviews: '8,901', url: 'https://www.flipkart.com/search?q=classmate+notebook' },
                { name: 'Amazon.in (Pack of 3)', price: '₹499', available: true, rating: '4.4', reviews: '5,678' }
            ]
        }
    ]
};
