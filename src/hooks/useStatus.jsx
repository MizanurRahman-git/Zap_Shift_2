import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStatus = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {isLoading, data:rider=[]} = useQuery({
        queryKey:["Rider_Status", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders/${user?.email}`)
            return res.data;
        }
    })
    return {rider, isLoading};
};

export default useStatus;