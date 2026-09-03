import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {isLoading, data : userRole = []} = useQuery({
        queryKey:["user-role", user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/${user.email}/role`)
            return res.data;
        }
    })
    return {userRole, isLoading};
};

export default useRole;