import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Review, Restaurant } from '../../components/common/CustomTypes';

// 3 components
// 1. entire table
// 2. restaurants
// 3. reviews



function ReviewRow({ restaurantName, rating, cost, description }: Review) {
    return (
        <tr>
            <td>{restaurantName}</td>
            <td>{description}</td>
        </tr>
    );
}

function RestaurantRow({ name, avgRating, avgCost }: Restaurant) {
    return (
        <tr>
            <th>{name}</th>
        </tr>
    );
}

// maybe make this a function
// what data type is restaurants (prop)
const ReviewTable = ({ /* restaurants */ }) => {

    // need to map out restaurant and review into arrays

    return (
        <MDBTable bordered striped>
            <MDBTableHead>

            </MDBTableHead>
        </MDBTable>
    )
};

export default ReviewTable;
