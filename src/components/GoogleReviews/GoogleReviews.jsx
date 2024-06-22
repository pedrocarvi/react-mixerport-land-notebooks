// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GoogleReviews = () => {
//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         const fetchReviews = async () => {
//             try {
//                 const response = await axios.get('https://express-mixer-land.vercel.app/api/place-details');
//                 if (response) {
//                     // console.log(response.data)
//                     setReviews(response.data.reviews)
//                 }
//             } catch (error) {
//                 console.error('Error fetching reviews:', error);
//             }
//         };

//         fetchReviews();
//     }, []);

//     return (
//         <div>
//             <p>Google Reviews</p>
//             {reviews.length > 0 ? (
//                 <ul>
//                     {reviews.map((review, index) => (
//                         <li key={index}>
//                             <p><strong>{review.author_name}</strong>: {review.text}</p>
//                             <p>Rating: {review.rating}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No reviews found.</p>
//             )}
//         </div>
//     );
// };

// export default GoogleReviews;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GoogleReviews.css';
import GoogleLogo from '../../assets/google_logo.png'
import GoogleLogoSmall from '../../assets/google_logo_s.png'

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('https://express-mixer-land.vercel.app/api/place-details');
                if (response) {
                    console.log(response.data.reviews)
                    setReviews(response.data.reviews);
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => {
            return (
                <span key={index} className="star">
                    {index < rating ? '★' : '☆'}
                </span>
            );
        });
    };

    const toggleExpanded = (index) => {
        setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + "...";
    };

    return (
        <div className="reviews-container">
            <div className="review-summary">
                <h2>Excelente</h2>
                <div className="review-summary-stars">
                    {renderStars(5)}
                </div>
                <p>A base de <strong>559 reseñas</strong></p>
                <img src={GoogleLogo} alt="Google" className="google-logo" width={160} />
            </div>
            <div className="review-reviews">
                {
                    reviews.length > 0 ? (
                        <div className='review-reviews-subctn'>
                            {
                                reviews.map((review, index) => (
                                    <div key={index} className="review-card">
                                        <div className="review-header">
                                            <div className='review-header-subctn'>
                                                <img src={review.profile_photo_url} alt={review.author_name} className="review-avatar" />
                                                <div className='review-name-rating-ctn'>
                                                    <h3>{review.author_name}</h3>
                                                    <p className="review-date">{new Date(review.time * 1000).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <img src={GoogleLogoSmall} alt="Google" width={25} />
                                        </div>
                                        <div className="review-stars">{renderStars(review.rating)}</div>
                                        <p className="review-text">
                                            {expanded[index] ? review.text : truncateText(review.text, 100)}
                                            {review.text.length > 100 && (
                                                <button onClick={() => toggleExpanded(index)}>
                                                    {expanded[index] ? "Leer menos" : "Leer más"}
                                                </button>
                                            )}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <p>No reviews</p>
                    )
                }
            </div>
        </div>
    );
};

export default GoogleReviews;