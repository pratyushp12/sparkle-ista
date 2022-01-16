const INITIAL_STATE = {
    sections:[
        {
            title: 'hats',
            imageUrl: 'https://www.wholesaler-hats.com/upfile/product/custom-embroidery-snapback-hats,design-snapback-hats_4.jpg',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://www.stelladesign.eu/wp-content/uploads/2019/09/how-to-furnish-a-clothing-store.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://footwearnews.com/wp-content/uploads/2015/08/jordy-geller-sneakers-collection-22.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'womens',
            imageUrl: 'http://seaislandtrading.com/wp-content/gallery/clothing/clothing12.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://www.outfittrends.com/wp-content/uploads/2014/06/men-summer-style-ideas.jpg',
            size : 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }

    ]
}

const directoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.types){
        default:
            return state;
    }
}

export default directoryReducer;