import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, Search, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import couponsData from "../../../public/coupons.json";
import "./Brands.css"; // Separate CSS file
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from "react-router-dom";

// Simple local UI wrappers (if you don't have shadcn/ui)
const Badge = ({ children, variant = "default", className = "" }) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "", ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`card-content ${className}`}>{children}</div>
);
const Input = ({ className = "", ...props }) => (
  <input className={`input ${className}`} {...props} />
);
const Button = ({ children, variant = "solid", size = "md", onClick, className = "", ...props }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBrands, setFilteredBrands] = useState(couponsData);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const filtered = couponsData.filter((brand) =>
      brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBrands(filtered);
  }, [searchTerm]);

  const handleViewCoupons = (brandId) => {
    if (!user) {
      alert("Please login to view coupons!");
      return;
    }
    navigate(`/brand/${brandId}`);
  };


   const { user } = useContext(AuthContext);
  
     if (!user) {
          return (
              <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                      <h2 className="text-3xl text-red-600 font-bold mb-4">User Not Logged In</h2>
                      <p className="text-lg text-gray-700">Please log in to view your profile.</p>
                  </div>
              </div>
          );
      }

  return (
    <div className="brands-page">
      <div className="background-layer">
        <div className="animated-gradient"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <div className="content-container">
        {/* Header */}
        <div className="page-header" data-aos="fade-up">
          <h1 className="title">All Brands</h1>
          <p className="subtitle">
            Discover amazing deals and coupons from Bangladesh's top e-commerce brands
          </p>
          <div className="search-wrapper">
            <Search className="search-icon" />
            <Input
              type="text"
              placeholder="Search brands, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Count */}
        <div className="result-count" data-aos="fade-up" data-aos-delay="200">
          <p className="count-text">
            Showing <span className="highlight">{filteredBrands.length}</span> brands
            {searchTerm && (
              <span>
                {" "}
                for "<span className="highlight">{searchTerm}</span>"
              </span>
            )}
          </p>
        </div>

        {/* Grid */}
        <div className="brands-grid">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand, index) => (
              <Card
                key={brand._id}
                className="brand-card mb-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="card-inner">
                  <div className="brand-info">
                    <div className="logo-section">
                      <img
                        src={brand.brand_logo}
                        alt={brand.brand_name}
                        className="brand-logo"
                      />
                      <div className="name-and-tags">
                        <h3 className="brand-name">{brand.brand_name}</h3>
                        <div className="tags-row">
                          <div className="rating">
                            <Star className="star-icon" />
                            <span>{brand.rating}</span>
                          </div>
                          <Badge variant="outline">{brand.category}</Badge>
                          {brand.isSaleOn && (
                            <Badge variant="destructive" className="pulse">
                              Sale is On!
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="description-section">
                      <p className="brand-description">{brand.description}</p>
                      <div className="meta-row">
                        <div className="coupons-available">
                          <span className="bold">{brand.coupons.length}</span> Coupons Available
                        </div>
                        <div className="category-label">
                          Category: <span className="bold">{brand.category}</span>
                        </div>
                      </div>
                    </div>

                    <div className="action-section">
                      <Button
                        variant="coupon"
                        size="lg"
                        onClick={() => handleViewCoupons(brand._id)}
                        className="coupon-btn"
                      >
                        View Coupons <ExternalLink className="ml-1 icon-small" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="no-results" data-aos="fade-up">
              <div className="emoji">🔍</div>
              <h3 className="no-title">No brands found</h3>
              <p className="no-text">
                Try adjusting your search terms or browse all available brands
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Brands;
