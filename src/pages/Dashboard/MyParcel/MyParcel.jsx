import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyParcel = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey:['myParcels', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`)
            return res.data
        }
    })

    return (
        <div>
            <h2>This is My parcel page: {data?.length}</h2>
            
        </div>
    );
};

export default MyParcel;