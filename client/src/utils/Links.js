import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Profile from "../pages/dashboard/Profile";

export const links = [
    {
        id: 1,
        text: "stats",
        path: "/",
        icon: <IoBarChartSharp></IoBarChartSharp>
    },
    {
        id: 2,
        text: "all-jobs",
        path: "all-jobs",
        icon: <MdQueryStats></MdQueryStats>
    },
    {
        id: 3,
        text: "add-job",
        path: "add-job",
        icon: <FaWpforms></FaWpforms>
    },
    {
        id: 4,
        text: "profile",
        path: "profile",
        icon: <Profile></Profile>
    }
]
