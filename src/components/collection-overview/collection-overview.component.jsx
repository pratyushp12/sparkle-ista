import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {SelectCollectionForPreview} from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.components';

import './collection-overview.styles.scss';

const CollectionOverview = ({collections})=>(
    <div>
    {collections.map(({id, ...otherCollectionProps}) => 
        <CollectionPreview key={id} {...otherCollectionProps} />
    )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: SelectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);