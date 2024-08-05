import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={"bg-[#3A3A3C] text-white text-sm"} >
            <div className={" p-6"}>
                <div className={"text-[#777777] font-bold my-4"}>CONTACT US</div>
                <table>
                    <tbody>
                    <tr>
                        <td className={"w-[40%] font-bold"}>Address</td>

                        <td>Lot 689, Taman Goodwood,
                            Jalan Kuchai Lama,
                            Off Jalan Kelang Lama,
                            58200 Kuala Lumpur, Malaysia.
                        </td>

                    </tr>
                    <tr>
                        <td className={"font-bold"}>Telephone</td>
                        <td>
                            <a href="tel:+60379814755">603-7981 4755</a>
                        </td>

                    </tr>
                    <tr>
                        <td className={"font-bold"}>Email</td>
                        <td>
                            <a href="mailto:fga@fga.com.my">fga@fga.com.my</a>
                        </td>
                    </tr>
                    </tbody>

                </table>
                <div>
                    <div className={"text-[#777777] font-bold my-4"}>OTHER SITES</div>
                    <ul>
                        <li>Vacancies</li>
                        <li>ETHNE</li>
                        <li>
                            <a href={"https://www.fgacyc.com/"}>FGA CYC</a>
                        </li>
                    </ul>
                </div>


                <div >
                    <div className={"text-[#777777] font-bold my-4"}>CONNECT WITH US</div>
                    <div className={"flex text-white"}>
                        <FaFacebookF className={"w-5 h-5 mr-4"}/>
                        <FaYoutube className={"w-5 h-5 mr-4"}/>
                        <FaInstagram className={"w-5 h-5 mr-4"}/>
                    </div>
                </div>
            </div>

            <div className={"bg-[#1F1F1F] text-white text-sm text-center p-3"}>
                Full Gospel Assembly. All Rights Reserved.
            </div>
        </footer>
    )
}