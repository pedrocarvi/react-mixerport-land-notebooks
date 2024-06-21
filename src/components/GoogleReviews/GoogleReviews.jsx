import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);
    const placeId = 'ChIJHe4tCPXLvJURQcxo1kNuOYc';
    const apiKey = 'AIzaSyBcMs6_QBb6bQ1e0MFQZrG9OR70KqgH4pI';

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/reviews?placeId=${placeId}`);
                if (response.data.result.reviews) {
                    setReviews(response.data.result.reviews);
                    console.log(response.data.results.reviews)
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, [placeId]);

    // useEffect(() => {
    //     const fetchMensaje = async () => {
    //         try {
    //             const res = await axios.get('http://localhost:5000/api/test');
    //             if (res) {
    //                 console.log(res);
    //             }
    //         } catch (error) {
    //             console.error('Problema trayendo test')
    //         }
    //     }

    //     fetchMensaje();
    // }, [])

    return (
        <div>
            <p>Google Reviews</p>
            {/* {reviews.length > 0 ? (
                <ul>
                    <li> Hagamos de cuenta que aca van </li>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <p><strong>{review.author_name}</strong>: {review.text}</p>
                            <p>Rating: {review.rating}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews found.</p>
            )} */}
        </div>
    );
};

export default GoogleReviews;
