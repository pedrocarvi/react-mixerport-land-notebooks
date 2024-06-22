import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GoogleReviews.css';
import GoogleLogo from '../../assets/google_logo.png'
import GoogleLogoSmall from '../../assets/google_logo_s.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [expanded, setExpanded] = useState({});
    const [totalReviews, setTotalReviews] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('https://express-mixer-land.vercel.app/api/place-details');
                if (response) {
                    setReviews(response.data.reviews);
                    setTotalReviews(response.data.user_ratings_total);
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

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="reviews-container">
            <div className="review-summary">
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', textTransform: 'none' }}>Excelente</h2>
                <div className="review-summary-stars">
                    {renderStars(5)}
                </div>
                <p>A base de <strong> {totalReviews ? `${totalReviews} reseñas` : '+500 reseñas'}</strong></p>
                <img src={GoogleLogo} alt="Google" className="google-logo" width={160} />
            </div>
            <div className="review-reviews">
                {
                    reviews.length > 0 ? (
                        <div className='review-reviews-subctn'>
                            <Slider {...settings}>
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
                                                {expanded[index] ? review.text : truncateText(review.text, 150)}
                                                {review.text.length > 150 && (
                                                    <span style={{ fontSize: '14px', cursor: 'pointer', color: 'rgba(255,255,255,0.8)' }} onClick={() => toggleExpanded(index)}>
                                                        {expanded[index] ? "Leer menos" : "Leer más"}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    ) : (
                        <p>No reviews found.</p>
                    )
                }
            </div>
        </div>
    );
};

export default GoogleReviews;