import { FaQuoteLeft } from "react-icons/fa";


const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: testimonial, user_email } = review;
  return (
    <div className="flex items-center justify-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-md rounded-2xl">
        <div className="card-body p-8">
          {/* Quote icon */}
          <FaQuoteLeft className="text-4xl text-cyan-100 mb-2" />

          {/* Quote text */}
          <p className="text-slate-600 text-lg leading-relaxed">
           {testimonial}
          </p>

          {/* Dashed divider */}
          <div className="border-t-2 border-dashed border-cyan-100 my-6" />

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="avatar placeholder">
              <div className="bg-teal-900 text-neutral-content rounded-full w-14">
                <img src={user_photoURL} alt="" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">
                {userName}
              </h3>
              <p className="text-slate-400 text-sm">{user_email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
