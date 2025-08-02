import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Star, Copy, ExternalLink, Clock, Tag, CheckCircle } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AOS from "aos";
import "aos/dist/aos.css";
import couponsData from "../../../public/coupons.json";
import "./BrandDetails.css"; // separate CSS
import { toast } from "sonner"; // direct sonner toast
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from "react";
import { useLocation } from "react-router-dom";

// Simple fallback wrappers (remove if you have real UI library)
const Badge = ({ children, variant = "default", className = "" }) => {
  return <span className={`badge badge-${variant} ${className}`}>{children}</span>;
};
const Button = ({ children, variant = "solid", size = "md", onClick, disabled, className = "", ...props }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
const Card = ({ children, className = "", ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`card-header ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`card-title ${className}`}>{children}</h3>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`card-content ${className}`}>{children}</div>
);

const BrandDetails = ({ user }) => {
  const { id } = useParams();
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

   if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} 
      />
    );
  }

  const brand = couponsData.find((b) => b._id === id);

  if (!brand) {
    return (
      <div className="brand-details-page not-found">
        <div className="fallback">
          <h1>Brand Not Found</h1>
          <p>The brand you're looking for doesn't exist.</p>
          <Button variant="coupon" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const handleCopyCode = (code) => {
    setCopiedCode(code);
    toast.success(`${code} copied to clipboard!`);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const handleUseNow = (shopLink) => {
    window.open(shopLink, "_blank");
  };

  const isExpired = (expiryDate) => {
    return new Date(expiryDate) < new Date();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="brand-details-page">
      {/* background */}
      <div className="bg-layer">
        <div className="gradient-bg"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="brand-header" data-aos="fade-up">
          <div className="brand-top">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="brand-logo"
            />
            <div className="brand-meta">
              <h1 className="brand-name">{brand.brand_name}</h1>
              <div className="brand-tags">
                <div className="rating">
                  <Star className="icon-star" />
                  <span>{brand.rating}</span>
                </div>
                <Badge variant="outline" className="ml-2">
                  {brand.category}
                </Badge>
                {brand.isSaleOn && (
                  <Badge variant="destructive" className="ml-2 pulse">
                    Sale is On!
                  </Badge>
                )}
              </div>
              <p className="brand-desc">{brand.description}</p>
            </div>
          </div>
        </div>

        {/* Coupons */}
        <div className="coupons-section" data-aos="fade-up" data-aos-delay="200">
          <h2 className="section-title">
            Available Coupons ({brand.coupons.length})
          </h2>
          <div className="coupons-grid">
            {brand.coupons.map((coupon, index) => {
              const expired = isExpired(coupon.expiry_date);
              const isCopied = copiedCode === coupon.coupon_code;

              return (
                <Card
                  key={index}
                  className={`coupon-card ${expired ? "expired" : "active"}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader>
                    <CardTitle className="coupon-title">
                      <div className="flex items-center gap-2">
                        <Tag className="icon" />
                        <span>{coupon.coupon_code}</span>
                      </div>
                      <Badge
                        variant={
                          coupon.coupon_type === "percentage"
                            ? "default"
                            : coupon.coupon_type === "fixed"
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {coupon.coupon_type}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="coupon-desc">{coupon.description}</p>

                    <div className="coupon-meta">
                      <div className="meta-row">
                        <Clock className="meta-icon" />
                        <span className={expired ? "expired-text" : ""}>
                          {expired ? "Expired on" : "Expires on"} {formatDate(coupon.expiry_date)}
                        </span>
                      </div>
                      <div className="meta-row">
                        <strong>Condition:</strong> {coupon.condition}
                      </div>
                    </div>

                    <div className="coupon-actions">
                      <CopyToClipboard
                        text={coupon.coupon_code}
                        onCopy={() => handleCopyCode(coupon.coupon_code)}
                      >
                        <Button
                          variant={isCopied ? "success" : "copy"}
                          className="full-btn"
                          disabled={expired}
                        >
                          {isCopied ? (
                            <>
                              <CheckCircle className="mr-1" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1" />
                              Copy Code
                            </>
                          )}
                        </Button>
                      </CopyToClipboard>
                      <Button
                        variant="premium"
                        onClick={() => handleUseNow(brand.shop_link)}
                        disabled={expired}
                        className="full-btn"
                      >
                        <ExternalLink className="mr-1" />
                        Use Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Brand Info Card */}
        <Card className="info-card" data-aos="fade-up" data-aos-delay="400">
          <CardHeader>
            <CardTitle className="info-title">About {brand.brand_name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="info-grid">
              <div className="info-block">
                <h4>Description</h4>
                <p>{brand.description}</p>
              </div>
              <div className="info-block">
                <h4>Category</h4>
                <Badge variant="outline">{brand.category}</Badge>
              </div>
              <div className="info-block">
                <h4>Rating</h4>
                <div className="flex items-center gap-2">
                  <Star className="icon-star" />
                  <span>{brand.rating}/5</span>
                </div>
              </div>
              <div className="info-block">
                <h4>Visit Store</h4>
                <Button variant="outline" onClick={() => handleUseNow(brand.shop_link)}>
                  <ExternalLink className="mr-1" />
                  Visit {brand.brand_name}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back */}
        <div className="back-wrapper" data-aos="fade-up" data-aos-delay="500">
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            ← Back to Brands
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
