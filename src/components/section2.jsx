import RedButton from "./red-button.jsx";

export default function Section2(){
    return (
        <div className={"p-8 bg-[url('/web-m100-fund-bg2.jpg')] bg-cover bg-center text-white text-lg"}>
            <h2 className={"text-3xl mb-6"}>M100 Fund</h2>
            <div className={"mb-6"}>
                God gave FGA the Antioch Church Vision and in recent times He has continued to lead us by keeping us
                close to His heartbeat through the M100 mission. This God-given M100 mission is a commandment to spread
                the gospel, blessing the nation by raising 10, 000 disciples and building 100 churches.
            </div>
            <div className={"mb-6"}>
                To fulfill this M100 mission, we need to have greater love that would fuel the greater passion to do God’s work. We have initiated the M100 FUND that looks to support this mission and all the groundwork required to advance the gospel.
            </div>
            <div className={"mb-6"}>
                If you’d like to give towards the M100 fund, here are the details:
            </div>

            <img src="/FGAKL-Malaysia-National-QRcode.jpg" alt="tng-qrcode"/>
            <div className={"my-6 text-xl"}>
                <div>Note:</div>
                <div>1. Available for banks & e-wallets listed.</div>
                <div>2. Use the QR scanner on your e-wallet/banking app.</div>
            </div>
            <img src="/Msia-National-QR-Participating-Banks-1536x864.png" alt="banks"/>
        </div>
    )
}