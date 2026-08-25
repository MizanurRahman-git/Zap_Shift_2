import { useForm } from "react-hook-form";

const Rider = () => {
  const { register, handleSubmit } = useForm();

  const handleRiderSubmit = (data) => {
    
    console.log(data);
  };
  return (
    <div className="my-7">
      <h2 className="font-extrabold text-[56px] text-[#03373D]">Be a Rider</h2>
      <p className="text-[#606060]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal <br /> packages to business shipments — we deliver
        on time, every time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 border-t-2 border-gray-300">
        {/* form section */}
        <div>
          {/* form */}
          <h2 className="font-extrabold text-[28px] text-[#03373D]">
            Tell us about yourself
          </h2>
          <form onSubmit={handleSubmit(handleRiderSubmit)}>
            <div className="mt-3">
              <fieldset className="fieldset">
                {/* name field */}
                <label className="label text-black font-semibold">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                  {...register("riderName", { required: true })}
                />
                {/* License Number field */}
                <label className="label text-black font-semibold">
                  Driving License Number
                </label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Driving License Number"
                  {...register("licenseNumber", { required: true })}
                />
                {/* email */}
                <label className="label text-black font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Your Email"
                  {...register("riderEmail", { required: true })}
                />

                {/* your region */}
                <label className="label text-black font-semibold">
                  Your Region
                </label>
                <select
                  defaultValue="Your Region"
                  className="select w-full"
                  {...register("riderRegion", { required: true })}
                >
                  <option disabled={true}>Your Region</option>
                  <option>Dhaka</option>
                  <option>Rangpur</option>
                  <option>sylet</option>
                </select>

                {/* your district*/}
                <label className="label text-black font-semibold">
                  Your District
                </label>
                <select
                  defaultValue="Your District"
                  className="select w-full"
                  {...register("riderDistrict", { required: true })}
                >
                  <option disabled={true}>Your District</option>
                  <option>Dhaka</option>
                  <option>Rangpur</option>
                  <option>sylet</option>
                </select>

                {/* NID No */}
                <label className="label text-black font-semibold">NID No</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="NID"
                  {...register("nidNumber", {required: true})}
                />

                {/* Phone No */}
                <label className="label text-black font-semibold">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Phone Number"
                  {...register("phoneNumber", {required: true})}
                />

                {/* Bike Brand Model and Year */}
                <label className="label text-black font-semibold">
                  Bike Brand Model and Year
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Bike Brand Model and Year"
                  {...register("bikeModel&year", {required: true})}
                />

                {/* Bike Registration Number */}
                <label className="label text-black font-semibold">
                  Bike Registration Number
                </label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Bike Registration Number"
                  {...register("bikeRegistrationNumber", {required: true})}
                />

                {/* Tell us about yourself */}
                <label className="label text-black font-semibold">
                  Tell us about yourself
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Tell us about yourself"
                  {...register("riderAbouts", {required: true})}
                />

                <button className="btn btn-neutral mt-4 bg-primary text-black border-0">
                  Submit
                </button>
              </fieldset>
            </div>
          </form>
        </div>
        <div>
          {/* image */}
          <p>image swction</p>
        </div>
      </div>
    </div>
  );
};

export default Rider;
