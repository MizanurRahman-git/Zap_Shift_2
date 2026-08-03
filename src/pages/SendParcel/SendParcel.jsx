import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold">Send A Parcel</h2>
      <form className="my-5" onSubmit={handleSubmit(handleSendParcel)}>

        {/* Parcel Type */}
        <div className="space-x-6">
          <label className="label">
            <input
              type="radio"
              value="document"
              className="radio text-green-500"
              defaultChecked
              {...register("parcelType")}
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              className="radio text-green-500"
              {...register("parcelType")}
            />
            Non-Document
          </label>
        </div>

        {/* Parcel Info:{name, Weight} */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Your Parcel Name"
              {...register("parcelName")}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight{"(KG)"}</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Your Parcel Weight"
              {...register("parcelweight")}
            />
          </fieldset>
        </div>

        {/* Sender and Receiver Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Sender Details */}
          <div>
            <h3 className="text-lg font-bold">Sender Details</h3>
            <fieldset className="fieldset">
              <label className="label">Sender Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Sender Name"
                {...register("senderName")}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Address"
                {...register("senderAddress")}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender Phone No:</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Phone No"
                {...register("senderPhoneNo")}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Pickup Instruction</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Instructions"
                {...register("pickupIntruction")}
              />
            </fieldset>
          </div>

          {/* Receiver Details */}
          <div>
            <h3 className="text-lg font-bold">Receiver Details</h3>
            <fieldset className="fieldset">
              <label className="label">Receiver Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Receiver Name"
                {...register("receiverName")}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Address</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Address"
                {...register("receiverAddress")}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Receiver Phone No:</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Phone No"
                {...register("receiverPhoneNo")}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Delivery Instruction</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Instructions"
                {...register("deliveryIntruction")}
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn bg-primary text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
