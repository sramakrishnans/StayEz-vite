import React from 'react';
import { useParams } from 'react-router-dom';
import { 
    FaWifi, 
    FaUtensils, 
    FaSpa, 
    FaSwimmer, 
    FaParking, 
    FaDumbbell, 
    FaPhoneAlt, 
    FaMapMarkerAlt, 
    FaCheckCircle, 
    FaRegClock, 
    FaClipboardCheck, 
    FaStar, 
    FaBan 
} from 'react-icons/fa'; // Font Awesome Icons

const HotelDetailPage = () => {
    const { name } = useParams(); // Extract the hotel name from the URL

    // Example hotel data
    const hotelDetails = [
        {
            name: 'The Leela Palace',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/34213277.jpg?k=861b92672483a0d52762345308eb6da18f3b3da82fd6532280a5714c550e7719&o=&hp=1',
            rating: 5,
            roomsAvailable: [
                { type: 'Deluxe Room', price: '₹5000', amenities: ['Free Wi-Fi', 'Breakfast', 'Spa Access'], stars: 4.5 },
                { type: 'Presidential Suite', price: '₹12000', amenities: ['Free Wi-Fi', 'Breakfast', 'Spa Access', 'Butler Service'], stars: 5 },
            ],
            description: 'Experience luxury at The Leela Palace, with exquisite dining and stunning views.',
            location: 'MRC Nagar, Chennai',
            checkInTime: '3:00 PM',
            checkOutTime: '12:00 PM',
            contact: 'Phone: +91 44 2220 1234',
            policies: 'No pets allowed, Cancellation policy: 24 hours before check-in',
            reviews: [
                { user: 'John Doe', rating: 5, comment: 'Amazing stay! The service was exceptional.' },
                { user: 'Jane Smith', rating: 4, comment: 'Beautiful hotel but a bit pricey.' },
            ],
        },
        {
            name: 'Taj Connemara',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/217745182.jpg?k=0ae50a446ba6928de2c72aa2bac496c696c325ab46737f5504c451fe6127bc5e&o=&hp=1',
            rating: 4,
            roomsAvailable: [
                { type: 'Standard Room', price: '₹4000', amenities: ['Free Wi-Fi', 'Breakfast'], stars: 4 },
                { type: 'Luxury Suite', price: '₹10000', amenities: ['Free Wi-Fi', 'Breakfast', 'Spa Access'], stars: 5 },
            ],
            description: 'Taj Connemara offers a blend of heritage and luxury in the heart of Chennai.',
            location: 'Binny Road, Chennai',
            checkInTime: '2:00 PM',
            checkOutTime: '11:00 AM',
            contact: 'Phone: +91 44 2811 4000',
            policies: 'No pets allowed, Cancellation policy: 48 hours before check-in',
            reviews: [
                { user: 'Emily Johnson', rating: 5, comment: 'Excellent service and beautiful decor!' },
                { user: 'Michael Brown', rating: 4, comment: 'Great location, but a bit noisy.' },
            ],
        },
        {
            name: 'Radisson Blu',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/509801598.jpg?k=d2f1f3b72f5a0db12b0b4d61d3e285be48681e67666133785668fef3b17f7722&o=&hp=1',
            rating: 4,
            roomsAvailable: [
                { type: 'Business Class Room', price: '₹6000', amenities: ['Free Wi-Fi', 'Breakfast', 'Gym Access'], stars: 4.5 },
                { type: 'Executive Suite', price: '₹15000', amenities: ['Free Wi-Fi', 'Breakfast', 'Lounge Access'], stars: 5 },
            ],
            description: 'Radisson Blu combines modern design with luxurious comfort.',
            location: 'Tidel Park, Chennai',
            checkInTime: '3:00 PM',
            checkOutTime: '12:00 PM',
            contact: 'Phone: +91 44 6660 0000',
            policies: 'No pets allowed, Cancellation policy: 24 hours before check-in',
            reviews: [
                { user: 'Sarah Wilson', rating: 5, comment: 'The best hotel experience ever!' },
                { user: 'David Smith', rating: 4, comment: 'Comfortable stay with great amenities.' },
            ],
        },
        {
            name: 'ITC Grand Chola',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465660282.jpg?k=de12c21817bfcd1cfb9d78ee3ee22d1f7f0bed70c7695322eaa988b46208ce8d&o=&hp=1',
            rating: 5,
            roomsAvailable: [
                { type: 'Chola Room', price: '₹7000', amenities: ['Free Wi-Fi', '24/7 Room Service', 'Gym Access'], stars: 4.7 },
                { type: 'Chola Suite', price: '₹15000', amenities: ['Free Wi-Fi', 'Butler Service', 'Pool Access'], stars: 5 },
            ],
            description: 'A luxurious hotel with impeccable service and stunning architecture.',
            location: 'Mount Road, Chennai',
            checkInTime: '3:00 PM',
            checkOutTime: '12:00 PM',
            contact: 'Phone: +91 44 2220 0000',
            policies: 'No pets allowed, Cancellation policy: 24 hours before check-in',
            reviews: [
                { user: 'Alice Smith', rating: 5, comment: 'Exceptional hospitality and food!' },
                { user: 'Robert Lee', rating: 4, comment: 'Beautiful property, loved the experience.' },
            ],
        },
        {
            name: 'Holiday Inn',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/558498680.jpg?k=0d91e06393d01b828110d9a46c4c4374cd92d112bee088a09f9a4a42cb21c097&o=&hp=1',
            rating: 3,
            roomsAvailable: [
                { type: 'Standard Room', price: '₹3000', amenities: ['Free Wi-Fi', 'Breakfast'], stars: 4 },
                { type: 'Executive Room', price: '₹8000', amenities: ['Free Wi-Fi', 'Breakfast', 'Lounge Access'], stars: 4.5 },
            ],
            description: 'A comfortable hotel ideal for business and leisure travelers.',
            location: 'OMR, Chennai',
            checkInTime: '2:00 PM',
            checkOutTime: '11:00 AM',
            contact: 'Phone: +91 44 6666 0000',
            policies: 'No pets allowed, Cancellation policy: 48 hours before check-in',
            reviews: [
                { user: 'Karen Johnson', rating: 4, comment: 'Good value for money, great breakfast!' },
                { user: 'Mark Williams', rating: 3, comment: 'Decent hotel, needs some updates.' },
            ],
        },
        {
            name: 'Hilton Chennai',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483819239.jpg?k=e3c3ad0ab2ae1d2a80e48ff2ba4b9483fe2b87ad3e645ab1fdb8ef1458dff616&o=&hp=1',
            rating: 5,
            roomsAvailable: [
                { type: 'King Room', price: '₹9000', amenities: ['Free Wi-Fi', '24/7 Room Service'], stars: 4.6 },
                { type: 'Executive Suite', price: '₹20000', amenities: ['Free Wi-Fi', 'Breakfast', 'Lounge Access'], stars: 5 },
            ],
            description: 'Stylish hotel with exceptional amenities and a prime location.',
            location: 'Guindy, Chennai',
            checkInTime: '3:00 PM',
            checkOutTime: '12:00 PM',
            contact: 'Phone: +91 44 2225 2222',
            policies: 'No pets allowed, Cancellation policy: 24 hours before check-in',
            reviews: [
                { user: 'Nancy Davis', rating: 5, comment: 'Wonderful stay, will definitely return!' },
                { user: 'Thomas Brown', rating: 4, comment: 'Nice facilities and friendly staff.' },
            ],
        },
    ];

    // Find the hotel details based on the name
    const hotel = hotelDetails.find(h => h.name === name);

    const amenityIcons = {
        'Free Wi-Fi': <FaWifi className="text-xl" />,
        'Breakfast': <FaUtensils className="text-xl" />,
        'Spa Access': <FaSpa className="text-xl" />,
        'Swimming Pool': <FaSwimmer className="text-xl" />,
        'Free Parking': <FaParking className="text-xl" />,
        'Fitness Center': <FaDumbbell className="text-xl" />,
    };

    return (
        <div className="hotel-detail container mx-auto p-6">
            {/* Hotel Name and Rating */}
            <div className="flex flex-col items-center mb-4">
                <h2 className="text-4xl font-bold text-center">{hotel.name}</h2>
                <div className="flex items-center mt-2">
                    {[...Array(hotel.rating)].map((_, index) => (
                        <FaStar key={index} className="w-6 h-6 text-yellow-500" />
                    ))}
                </div>
            </div>

            {/* Hotel Image */}
            <img src={hotel.image} alt={hotel.name} className="w-full h-72 object-cover rounded-lg mb-4" />

            {/* Hotel Description Section */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p>{hotel.description}</p>
            </div>

            {/* Hotel Address and Contact */}
            <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-xl mr-2" />
                <span>{hotel.location}</span>
            </div>
            <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-xl mr-2" />
                <span>{hotel.contact}</span>
            </div>

            {/* Check-in & Check-out Policy */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Policies</h3>
                <p><FaCheckCircle className="inline mr-1" />{hotel.policies}</p>
                <p><FaRegClock className="inline mr-1" />Check-in: {hotel.checkInTime}</p>
                <p><FaRegClock className="inline mr-1" />Check-out: {hotel.checkOutTime}</p>
            </div>

            {/* Rooms Available Section */}
            <div>
                <h3 className="text-xl font-semibold mb-2">Rooms Available</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hotel.roomsAvailable.map((room, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                            <h4 className="font-bold text-lg mb-2">{room.type}</h4>
                            <p className="text-gray-600">Price: {room.price}</p>
                            <p className="text-gray-600 mb-2">Amenities: 
                                <span className="flex flex-wrap">
                                    {room.amenities.map((amenity) => (
                                        <span key={amenity} className="mr-4 flex items-center">
                                            {amenityIcons[amenity]} {amenity}
                                        </span>
                                    ))}
                                </span>
                            </p>
                            <div className="flex items-center">
                                <p className="mr-2">Rating:</p>
                                <div className="flex">
                                    {[...Array(Math.round(room.stars))].map((_, starIndex) => (
                                        <FaStar key={starIndex} className="w-5 h-5 text-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customer Reviews */}
            <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
                {hotel.reviews.map((review, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
                        <p><strong>{review.user}</strong> rated it <strong>{review.rating} stars</strong></p>
                        <div className="flex">
                            {[...Array(review.rating)].map((_, starIndex) => (
                                <FaStar key={starIndex} className="w-4 h-4 text-yellow-500" />
                            ))}
                        </div>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelDetailPage;
