const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Baseball Cap',
          imageUrl: 'https://images.fun.com/products/58132/1-1/corona-blue-baseball-cap.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Cowboy Hat',
          imageUrl: 'https://i1.wp.com/jdawgjourneys.com/wp-content/uploads/2015/04/IMG_0906.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Fisherman Hat',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71e2iGaFsaL._UL1010_.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Fedora Hat',
          imageUrl: 'https://www.ocbutcher.co.uk/images/hicks-brown-the-suffolk-fedora-in-camel-p26454-106006_image.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Beanie',
          imageUrl: 'https://cdn.notonthehighstreet.com/fs/d0/6e/a959-22eb-4aa3-8d56-6be8ba6b5679/original_ethical-knitted-beanie-hat.jpg',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas SUPERSTAR',
          imageUrl: 'https://www.80scasualclassics.co.uk/images/adidas-superstar-trainers-white-black-p4785-43692_image.jpg',
          price: 220
        },
        {
          id: 11,
          name: 'Nike Air Max',
          imageUrl: 'https://www.prodirectselect.com/productimages/V3_1_Gallery_1/229745_Gallery_1_0780375.jpg',
          price: 280
        },
        {
          id: 12,
          name: 'Jordan Air',
          imageUrl: 'http://sneakerz.co/wp-content/uploads/2018/04/26220005_1936985466329526_5088479686448340497_n.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'Converse All Star',
          imageUrl: 'https://n2.sdlcdn.com/imgs/a/5/1/Converse-White-Casual-Shoes-SDL529851253-2-74736.jpg',
          price: 160
        },
        {
          id: 14,
          name: 'Balenciaga Hoka',
          imageUrl: 'https://i.pinimg.com/736x/91/de/07/91de071fc9786248b76a7936c417fd0e.jpg',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Leather Jacket',
          imageUrl: 'https://happygentleman.com/wp-content/uploads/2019/11/aviatrix-danny-mens-leather-jacket-tan-4.jpg',
          price: 125
        },
        {
          id: 19,
          name: 'Linen Jacket',
          imageUrl: 'https://tornadovintage.com/wp-content/uploads/2018/03/20180327_134246-e1522249403269.jpg',
          price: 90
        },
        {
          id: 20,
          name: 'Over Coat',
          imageUrl: 'http://drfashion.co.uk/eshop/6904-thickbox_default/mens-winter-over-coat-3-4-long-jacket-suede-finish-tweed-cashmere-4895-jackets-and-coats.jpg',
          price: 90
        },
        {
          id: 21,
          name: 'Sports Jacket',
          imageUrl: 'https://www.revzilla.com/product_images/0036/2720/agv_sport_solare_jacket.jpg',
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Gown',
          imageUrl: 'https://i5.walmartimages.com/asr/92de899c-e646-4ee8-922e-c8bd3d90cfab_1.78239a078aac4ac0929bb6485a8948d1.jpeg',
          price: 25
        },
        {
          id: 24,
          name: 'Nike T-Shirt',
          imageUrl: 'https://www.tennisnuts.com/images/product/full/829747-100-PHSFH001-2000.jpg',
          price: 20
        },
        {
          id: 25,
          name: 'Ripped Jeans',
          imageUrl: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/fd6c4c1fc0c305a6e41fb6c823555ada/8c5886f2-0cc2-415d-a055-f04dab52ac48.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Dark Lilac Gown',
          imageUrl: 'https://www.bridesmaidca.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/H/T/HT23-03/HT23-Princess-Strapless-Long-Dark-Lilac-Tulle-Flower-Girl-Dress-34.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Sweatshirt',
          imageUrl: 'https://image.sportsmansguide.com/adimgs/l/1/121077i12_ts.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'T-shirt',
          imageUrl: 'http://drfashion.co.uk/eshop/6491-thickbox_default/mens-casual-polo-t-shirt-uk-size-thin-soft-cotton-blue-badge-clips-2095-t-shirts-polos.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Full Sleeves T-Shirt',
          imageUrl: 'https://n4.sdlcdn.com/imgs/h/4/n/Nike-Red-Full-Sleeve-T-SDL910370548-1-b987c.png',
          price: 25
        },
        {
          id: 33,
          name: 'Jeans',
          imageUrl: 'https://pngimg.com/uploads/jeans/jeans_PNG5767.png',
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ]

  export default SHOP_DATA;