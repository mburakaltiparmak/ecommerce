import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

const RatingStars = ({ rating }) => {
  const filledStars = Math.floor(rating); // Tam dolu yıldız sayısı
  const hasHalfStar = rating % 1 !== 0; // Yarı dolu yıldız var mı?
  const totalStars = 5; // Toplam yıldız sayısı
  const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0); // Boş yıldız sayısı

  const renderStars = (count, type) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      if (type === "filled") {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{ color: "#FFD43B" }}
            className="hover:text-[#FFD43B]"
          />
        );
      } else if (type === "half") {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfStroke}
            style={{ color: "#FFD43B" }}
            className="hover:text-[#FFD43B]"
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="hover:text-[#FFD43B] text-[#d9d9d9]"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex gap-4">
      <div className="flex">
        {/* Dolu Yıldızlar */}
        {renderStars(filledStars, "filled")}
        {/* Yarı Dolu Yıldız */}
        {hasHalfStar && renderStars(1, "half")}
        {/* Boş Yıldızlar */}
        {renderStars(emptyStars, "empty")}
      </div>
    </div>
  );
};

export default RatingStars;
