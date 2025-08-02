// import React from "react";
// import Slider from "../Slider/Slider";
// import TripCards from "../TripCards/TripCards";
// import TravelerStories from "../TravelerStories/TravelerStories";
// import UsePageTitle from "../UsePageTitle/UsePageTitle";

// const Home = () => {
//   UsePageTitle("Home");
//   return (
//     <div className="">
//       <div className="mb-20">
//         <div className="text-center  py-10 rounded-md  mb-6">
//           <h2 className="text-4xl font-bold text-teal-600 mb-4">
//             Shop Smart, Save More – Discover Bangladesh’s Best Deals!
//           </h2>
//           <p className="text-lg text-white max-w-3xl mx-auto">
//             Smart Savings, Made Simple Find real-time coupons from top
//             Bangladeshi e-commerce sites Tailored deals, personalized just for
//             you Shop more, save better — only on Discount Pro
//           </p>
//         </div>

//         <Slider></Slider>
//       </div>

//       <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
//         <TripCards></TripCards>
//       </div>
//       <div>
//         <TravelerStories></TravelerStories>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState, useRef } from "react";
import UsePageTitle from "../UsePageTitle/UsePageTitle";
import { Link } from "react-router-dom";
import {
  Star,
  ExternalLink,
  Zap,
  TrendingUp,
  Users,
  ShoppingBag,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import couponsData from "../../../public/coupons.json";

// Simple UI wrappers
const Badge = ({ children, variant = "default", className = "" }) => {
  const base =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition";
  const colors = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-gray-100 text-gray-600",
    destructive: "bg-red-500 text-white",
    outline: "border border-gray-300 bg-transparent text-gray-700",
  };
  return (
    <span
      className={`${base} ${colors[variant] || colors.default} ${className}`}
    >
      {children}
    </span>
  );
};

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }) => (
  <div
    className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-6 ${className}`}>{children}</div>
);
const Button = ({
  children,
  variant = "solid",
  size = "md",
  asChild = false,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full focus:outline-none transition";
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
    xl: "px-6 py-4 text-lg",
  };
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-white bg-transparent text-white hover:bg-white hover:text-blue-600",
    secondary: "bg-white text-blue-600 hover:opacity-90",
    coupon:
      "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:brightness-105",
  };
  const content = (
    <button
      className={`${base} ${sizes[size] || sizes.md} ${
        variants[variant] || variants.solid
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  if (asChild) return <div>{content}</div>;
  return content;
};

const sliderSlides = [
  {
    title: "Save Money with Premium Coupons",
    subtitle:
      "Discover exclusive deals and discounts from Bangladesh's top brands.",
    cta1: {
      text: "Browse All Deals",
      to: "/brands",
      icon: <ShoppingBag className="mr-2 h-5 w-5" />,
    },
    cta2: {
      text: "View Trending",
      to: "/trending",
      icon: <TrendingUp className="mr-2 h-5 w-5" />,
    },
    bgGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
  },
  {
    title: "Limited Time Offers",
    subtitle:
      "Brands you trust, deals you can't ignore. Grab them before they're gone!",
    cta1: {
      text: "Shop Now",
      to: "/brands",
      icon: <Zap className="mr-2 h-5 w-5" />,
    },
    cta2: {
      text: "Trending Picks",
      to: "/trending",
      icon: <TrendingUp className="mr-2 h-5 w-5" />,
    },
    bgGradient: "bg-gradient-to-r from-yellow-500 to-pink-500",
  },
  {
    title: "Join Thousands of Happy Users",
    subtitle: "Smart saving, real results — start using Discount PRO today.",
    cta1: {
      text: "Get Started",
      to: "/brands",
      icon: <Users className="mr-2 h-5 w-5" />,
    },
    cta2: {
      text: "Learn More",
      to: "/about",
      icon: <ExternalLink className="mr-2 h-5 w-5" />,
    },
    bgGradient: "bg-gradient-to-r from-green-500 to-teal-400",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  UsePageTitle("Home");

  const saleOnBrands = couponsData.filter((brand) => brand.isSaleOn);

  // Slider logic
  const [current, setCurrent] = useState(0);
  const slideCount = sliderSlides.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 7000);
    return () => clearInterval(intervalRef.current);
  }, [slideCount]);

  const goTo = (idx) => {
    setCurrent(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-foreground">
      {/* Hero Slider Banner */}
      <section className="relative overflow-hidden pb-20">
        <div className="mx-auto relative">
          <div
            className={`relative overflow-hidden ${sliderSlides[current].bgGradient} text-white`}
            style={{ minHeight: "500px" }} // fixed height
          >
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8 py-20 h-full">
              <div
                data-aos="fade-right"
                className="w-full md:w-2/3 text-center md:text-left flex flex-col justify-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {sliderSlides[current].title}
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-2xl">
                  {sliderSlides[current].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="xl" variant="secondary" asChild>
                    <Link
                      to={sliderSlides[current].cta1.to}
                      className="flex items-center"
                    >
                      {sliderSlides[current].cta1.icon}
                      {sliderSlides[current].cta1.text}
                    </Link>
                  </Button>
                  <Button size="xl" variant="outline" asChild>
                    <Link
                      to={sliderSlides[current].cta2.to}
                      className="flex items-center"
                    >
                      {sliderSlides[current].cta2.icon}
                      {sliderSlides[current].cta2.text}
                    </Link>
                  </Button>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="w-full md:w-1/3 flex justify-center"
              >
                <div className="w-64 h-64 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="h-16 w-16 text-white opacity-80" />
                </div>
              </div>
            </div>
            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {sliderSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition ${
                    current === idx ? "bg-white" : "bg-white/40"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                8+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Top Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                20+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Active Coupons
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                50%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Max Savings
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Happy Users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Marquee */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl text-gray-300 md:text-4xl font-bold mb-4">
              Top Brands
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover amazing deals from Bangladesh's most trusted e-commerce
              platforms
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <Marquee pauseOnHover gradient={false} speed={50} className="py-8">
            {couponsData.map((brand) => (
              <Link
                key={brand._id}
                to={`/brand/${brand._id}`}
                className="mx-6 group flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-center mt-3 font-medium text-gray-300 group-hover:text-blue-600 transition-colors">
                  {brand.brand_name}
                </p>
              </Link>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Brands on Sale */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              🔥 Brands on Sale
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Limited time offers from your favorite brands. Don't miss out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleOnBrands.map((brand, index) => (
              <Card
                key={brand._id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={brand.brand_logo}
                        alt={brand.brand_name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-blue-600 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent transition-colors">
                          {brand.brand_name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-500">
                            {brand.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="destructive" className="animate-pulse">
                      Sale On!
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {brand.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium text-blue-600">
                        {brand.coupons.length}
                      </span>{" "}
                      Coupons Available
                    </div>
                    <Badge>{brand.category}</Badge>
                  </div>

                  <Button className="w-full" variant="coupon" asChild>
                    <Link
                      to={`/brand/${brand._id}`}
                      className="flex items-center justify-center"
                    >
                      View Coupons
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl text-gray-300 md:text-4xl font-bold mb-4">
              Why Choose Discount PRO?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The smartest way to save money on your online shopping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-blue-500 font-bold mb-2">
                Instant Savings
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Copy coupon codes instantly and start saving on your purchases
                right away.
              </p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-yellow-400 font-bold mb-2">
                Best Deals
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Curated collection of the most valuable deals from top brands in
                Bangladesh.
              </p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-gradient-to-r from-green-500 to-teal-400 p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-green-500 font-bold mb-2">
                Trusted Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join thousands of satisfied users who save money daily with our
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community and never miss a great deal again. Sign up for
              free today!
            </p>
            <Button
              size="xl"
              className="bg-gradient-to-r from-yellow-400 to-orange-500"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
