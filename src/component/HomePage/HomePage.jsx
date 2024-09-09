import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const HomePage = () => {
    const hotels = [
        {
          name: 'The Leela Palace',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/34213277.jpg?k=861b92672483a0d52762345308eb6da18f3b3da82fd6532280a5714c550e7719&o=&hp=1',
          rating: 5,
          reviewsCount: 1023,
          description: 'Experience luxury at The Leela Palace and luxury services',
          location: 'Adyar, Chennai',
          price: 16026,
        },
        {
          name: 'Taj Connemara',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/217745182.jpg?k=0ae50a446ba6928de2c72aa2bac496c696c325ab46737f5504c451fe6127bc5e&o=&hp=1',
          rating: 4,
          reviewsCount: 893,
          description: 'A historic hotel blending modern comfort.',
          location: 'Mount Road, Chennai',
          price: 14000,
        },
        {
          name: 'ITC Grand Chola',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465660282.jpg?k=de12c21817bfcd1cfb9d78ee3ee22d1f7f0bed70c7695322eaa988b46208ce8d&o=&hp=1',
          rating: 5,
          reviewsCount: 1203,
          description: 'A grand hotel with luxury amenities and services.',
          location: 'Guindy, Chennai',
          price: 17000,
        },
        {
          name: 'Radisson Blu',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/509801598.jpg?k=d2f1f3b72f5a0db12b0b4d61d3e285be48681e67666133785668fef3b17f7722&o=&hp=1',
          rating: 4,
          reviewsCount: 756,
          description: 'Modern accommodations with world-class facilities.',
          location: 'Egmore, Chennai',
          price: 15000,
        },
        {
          name: 'Hilton Chennai',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483819239.jpg?k=e3c3ad0ab2ae1d2a80e48ff2ba4b9483fe2b87ad3e645ab1fdb8ef1458dff616&o=&hp=1',
          rating: 5,
          reviewsCount: 1105,
          description: 'Elegant rooms and top-notch service and luxury services',
          location: 'Guindy, Chennai',
          price: 16500,
        },
        {
          name: 'Holiday Inn',
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/558498680.jpg?k=0d91e06393d01b828110d9a46c4c4374cd92d112bee088a09f9a4a42cb21c097&o=&hp=1',
          rating: 3,
          reviewsCount: 654,
          description: 'Comfortable stay with essential amenities.',
          location: 'OMR, Chennai',
          price: 12000,
        },
      ];
      

    const rooms = [
        {
            type: 'Deluxe Room',
            price: '₹5000',
            description: 'A luxurious room with all amenities.',
            amenities: ['Free Wi-Fi', 'Breakfast', 'Spa Access'],
            image: 'https://tse3.mm.bing.net/th?id=OIP.lM2N7G1k-nrjZuqwEDU5xgHaE7&pid=Api&P=0&h=180',
            stars: 5,
            discount: '10% off',
        },
        {
            type: 'Presidential Suite',
            price: '₹12000',
            description: 'Spacious suite with stunning views.',
            amenities: ['Free Wi-Fi', 'Breakfast', 'Spa Access', 'Butler Service'],
            image: 'https://tse4.mm.bing.net/th?id=OIP.BY6eyVwgQvVzT4UGMCFzXAHaE8&pid=Api&P=0&h=180',
            stars: 5,
            discount: '15% off',
        },
        {
            type: 'Standard Room',
            price: '₹3000',
            description: 'Comfortable and cozy room.',
            amenities: ['Free Wi-Fi', 'Breakfast'],
            image: 'https://tse2.mm.bing.net/th?id=OIP.YlF5RjQbKdSe-jPvbJuo7QHaE8&pid=Api&P=0&h=180',
            stars: 4,
            discount: '5% off',
        },
        {
            type: 'Executive Room',
            price: '₹4500',
            description: 'Room with a work desk and business amenities.',
            amenities: ['Free Wi-Fi', 'Breakfast', 'Gym Access'],
            image: 'https://tse1.mm.bing.net/th?id=OIP.G0_Dm8Xtw3_h9MukM0D3JQHaEK&pid=Api&P=0&h=180',
            stars: 4,
            discount: '8% off',
        },
        {
            type: 'Luxury Suite',
            price: '₹10000',
            description: 'A suite that defines elegance and comfort.',
            amenities: ['Free Wi-Fi', 'Breakfast', 'Sea View'],
            image: 'https://tse4.mm.bing.net/th?id=OIP.40YAmfqMDdRDonAzIIQGCgHaE8&pid=Api&P=0&h=180',
            stars: 5,
            discount: '12% off',
        },
        {
            type: 'Family Room',
            price: '₹7000',
            description: 'Spacious room perfect for families.',
            amenities: ['Free Wi-Fi', 'Breakfast', 'Extra Beds'],
            image: 'https://tse4.mm.bing.net/th?id=OIP.Al50EUB6BVa-be3mGpsiqgHaFj&pid=Api&P=0&h=180',
            stars: 4,
            discount: '10% off',
        },
        {
            type: 'Couple’s Retreat',
            price: '₹8000',
            description: 'Ideal for a romantic getaway.',
            amenities: ['Free Wi-Fi', 'Breakfast', 'Private Balcony'],
            image: 'https://up.yimg.com/ib/th?id=OIP.uvfvk8ahM5FaqVuHCOShZwHaEL&pid=Api&rs=1&c=1&qlt=95&w=205&h=115',
            stars: 5,
            discount: '15% off',
        },
        {
            type: 'Business Room',
            price: '₹4000',
            description: 'Designed for business travelers.',
            amenities: ['Free Wi-Fi', 'Breakfast', 'Meeting Room Access'],
            image: 'https://tse1.mm.bing.net/th?id=OIP.yzJxbcanJvTR_-gjvZxVuAHaE8&pid=Api&P=0&h=180',
            stars: 4,
            discount: '5% off',
        },
    ];

    const amenities = [
        { icon: 'https://img.icons8.com/ios-filled/50/000000/wifi.png', title: 'Free Wi-Fi', description: 'High-speed internet throughout the hotel.' },
        { icon: 'https://img.icons8.com/ios-filled/50/000000/swimming-pool.png', title: 'Swimming Pool', description: 'Indoor and outdoor pools available.' },
        { icon: 'https://img.icons8.com/ios-filled/50/000000/spa.png', title: 'Luxury Spa', description: 'Relax and rejuvenate with our spa services.' },
        { icon: 'https://img.icons8.com/ios-filled/50/000000/dining-room.png', title: 'Fine Dining', description: 'Enjoy gourmet meals at our restaurant.' },
        { icon: 'https://img.icons8.com/ios-filled/50/000000/dumbbell.png', title: 'Fitness Center', description: 'Stay fit with our state-of-the-art gym.' },
        { icon: 'https://img.icons8.com/ios-filled/50/000000/parking.png', title: 'Free Parking', description: 'Complimentary parking for all guests.' },
    ];
    
    return (
        <div className="homepage container mx-auto p-6">
  {/* Banner Section */}
  <section
    className="banner-section bg-cover bg-center h-64 md:h-96 flex items-center justify-center relative"
    style={{ backgroundImage: "url('https://ik.imagekit.io/kli9gynwg/HTML%20/hotel-typography-vector-1426560.jpg?updatedAt=1725791236103')" }}
  >
    {/* Dark Overlay for better text visibility */}
    <div className="absolute inset-0 bg-orange-700 opacity-50"></div>

    <div className="text-center text-white relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold shadow-md">Welcome to Our Hotel</h1>
      <p className="text-xl md:text-2xl mt-4 shadow-md">Experience the best hospitality in the heart of the city.</p>
    </div>
  </section>

  {/* Search Section */}
  
  <section className="search-section bg-white p-6 shadow-xl rounded-lg mt-6 mb-10 relative z-10 max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Enter your location"
        className="p-4 border rounded-lg focus:ring-2 focus:ring-orange-500 transition"
      />
      <input
        type="date"
        placeholder="Check-in"
        className="p-4 border rounded-lg focus:ring-2 focus:ring-orange-500 transition"
      />
      <input
        type="date"
        placeholder="Check-out"
        className="p-4 border rounded-lg focus:ring-2 focus:ring-orange-500 transition"
      />
      <div className="flex space-x-4">
        <input
          type="number"
          placeholder="Adults"
          className="p-4 border rounded-lg w-1/2 focus:ring-2 focus:ring-orange-500 transition"
          min="1"
        />
        <input
          type="number"
          placeholder="Children"
          className="p-4 border rounded-lg w-1/2 focus:ring-2 focus:ring-orange-500 transition"
          min="0"
        />
      </div>
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition font-semibold">
        Search
      </button>
    </div>
  </section>

{/* Top Hotels Section */}
<section className="top-hotels-section mb-10 px-4"> 
  <h2 className="text-3xl font-bold text-center mb-8">Top Hotels in Chennai</h2>
  <div className="hotels-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {hotels.map((hotel, index) => (
      <Link to={`/hotel/${hotel.name}`} key={index}>
        <div className="hotel-card bg-white shadow-md rounded-lg overflow-hidden w-[263px] mx-auto">
          <img 
            src={hotel.image} 
            alt={hotel.name} 
            className="hotel-image w-full h-[210px] object-cover" 
            style={{ maxWidth: '263px' }} 
          />
          <div className="p-4">
            <h3 className="hotel-title text-lg font-semibold mb-1">{hotel.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{hotel.location}</p>

            {/* Star Ratings */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < hotel.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.12-6.574L0 6.34l6.591-.961L10 0l2.409 5.379L19 6.34l-5.242 4.176 1.12 6.574z" />
                </svg>
              ))}
              <p className="ml-2 text-sm text-gray-600">{hotel.reviewsCount} reviews</p>
            </div>

            <p className="hotel-description text-gray-600 text-sm mb-2">{hotel.description}</p>
            <p className="text-lg font-bold text-gray-800">Starting from ₹ {hotel.price}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>


{/* Rooms Section */}
<section className="rooms-section mb-10">
    <h2 className="text-2xl font-bold text-center mb-6">Available Rooms</h2>
    <div className="rooms-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8"> 
        {rooms.map((room, index) => (
            <div 
                key={index} 
                className="room-card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full max-w-[263px] h-[394px] mx-auto"
            >
                <img 
                    src={room.image} 
                    alt={room.type} 
                    className="room-image w-full h-[210px] object-cover" 
                />
                <div className="p-3 flex flex-col justify-between flex-grow">
                    <div className="flex-grow">
                        <h3 className="room-title text-base font-semibold mb-1">{room.type}</h3>
                        <div className="flex items-center mb-1">
                            {[...Array(room.stars)].map((_, starIndex) => (
                                <svg key={starIndex} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.12-6.574L0 6.34l6.591-.961L10 0l2.409 5.379L19 6.34l-5.242 4.176 1.12 6.574z" />
                                </svg>
                            ))}
                        </div>
                        <p className="room-price text-sm font-bold mb-1">₹{room.price} per night</p>
                        {room.discount && <p className="room-discount text-xs text-red-500 font-semibold mb-2">Discount: {room.discount}</p>}
                        <p className="room-description text-xs text-gray-600 mb-2">{room.description}</p>
                        <p className="room-amenities text-xs text-gray-500 mb-2">Amenities: {room.amenities.join(', ')}</p>
                    </div>
                    <div className="mt-auto">
                        <button className="room-button bg-orange-700 text-white text-sm px-3 py-1 rounded hover:bg-orange-700 transition w-full">Book Now</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>


            {/* Amenities Section */}
            <section className="amenities-section">
                <h2 className="text-3xl font-bold text-center mb-8">Amenities</h2>
                <div className="amenities-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {amenities.map((amenity, index) => (
                        <div key={index} className="amenity bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
                            <img src={amenity.icon} alt={amenity.title} className="w-12 h-12" />
                            <div>
                                <h4 className="amenity-title text-lg font-semibold">{amenity.title}</h4>
                                <p className="amenity-description text-gray-600">{amenity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Offers Section */}
        
            <div className="flex justify-between items-center bg-gray-100 border rounded-lg shadow-lg p-6 my-6">
  <div>
    <h2 className="text-2xl font-bold">Exclusive Hotel Booking Deals!</h2>
    <p className="font-semibold mt-2">Unlock special discounts when you book through our site</p>
    <p className="text-gray-600 mt-1">
      Book now and save up to 20% on luxury stays, weekend getaways, and business trips.
    </p>
    <p className="text-gray-600 mt-1">
      Join our loyalty program to enjoy additional perks like free breakfast and late checkout.
    </p>
    <div className="mt-4">
      <button className="bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg mr-4">
        Book Now
      </button>
      <a href="#" className="text-orange-700 font-semibold">
        Learn More
      </a>
    </div>
  </div>
  <div className="flex items-center">
    <img
      src="https://ik.imagekit.io/4z8covdo9/Food%20Store/thanking-customers-section-img.png"
      alt="Exclusive Hotel Deal"
      className="w-20 h-20"
    />
  </div>
</div>

{/* Subscribe for Offers Section */}

<section className="bg-blue-500 border rounded-lg shadow-lg text-white py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe for Special Offers</h2>
      <p className="mb-6">Sign up to receive exclusive discounts, promotions, and updates directly in your inbox!</p>
      <form className="flex flex-col items-center md:flex-row justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg text-orange-800 w-full md:w-1/3 mb-4 md:mb-0 md:mr-4"
        />
        <button className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition">
          Subscribe
        </button>
      </form>
    </div>
  </section>

  {/* MobileApp Download Section */}
   
  <section className="bg-gray-100 py-16 mt-6 mb-6">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
      <p className="mb-6 text-gray-700">Experience the convenience of easy bookings, exclusive deals, and faster check-ins.</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition">
          <i className="fab fa-apple mr-2"></i> Download on App Store
        </a>
        <a href="#" className="bg-orange-700 text-white py-3 px-6 rounded-lg hover:bg-orange-900 transition">
          <i className="fab fa-google-play mr-2"></i> Get it on Google Play
        </a>
      </div>
    </div>
  </section>

  {/* Follow as Section */}

  <section className="bg-blue-500 text-white py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Follow Us on Social Media</h2>
      <p className="mb-6">Stay updated with the latest hotel news, deals, and user-generated content.</p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-3xl hover:text-gray-300">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-3xl hover:text-gray-300">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-3xl hover:text-gray-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-3xl hover:text-gray-300">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </section>

  {/* Frequently Asked Section */}
  
  <section className="container mx-auto my-16">
    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">How can I book a room?</h3>
        <p className="text-gray-700">You can book a room by searching your destination, selecting the room, and completing the payment process through our website or mobile app.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">What is your cancellation policy?</h3>
        <p className="text-gray-700">Cancellations can be made up to 24 hours before check-in for a full refund. Please check individual room policies for specific details.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Are amenities like Wi-Fi and breakfast included?</h3>
        <p className="text-gray-700">Yes, most of our rooms include free Wi-Fi and breakfast. Please refer to the room description for more information.</p>
      </div>
    </div>
  </section>

    </div>
    );
};

export default HomePage;
