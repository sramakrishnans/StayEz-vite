import { Link } from 'react-router-dom';

const TopHotelCard = ({ image, name, rating, description }) => (
    <Link to={`/hotel/${name}`} className="top-hotel-card bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={name} className="hotel-image w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="hotel-name text-xl font-semibold mb-2">{name}</h3>
            <div className="flex items-center mb-2">
                {[...Array(rating)].map((_, index) => (
                    <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.12-6.574L0 6.34l6.591-.961L10 0l2.409 5.379L19 6.34l-5.242 4.176 1.12 6.574z" />
                    </svg>
                ))}
            </div>
            <p className="hotel-description text-gray-600 mb-4">{description}</p>
        </div>
    </Link>
);
