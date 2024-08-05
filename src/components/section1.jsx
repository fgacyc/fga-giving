import RedButton from "./red-button.jsx";

export default function Section1(){
    return (
        <div className={"p-8 bg-[url('/hive.jpg')] bg-cover bg-center text-white text-lg"}>
            <h2 className={"text-3xl mb-6"}>Tithes and Offering</h2>
            <div className={"mb-6"}>
                In FGA, we believe in giving. Whether it’s of our talents, our time or a portion of what He has blessed us with. We believe in giving as a natural expression of our love and worship unto Him.
            </div>
            <div className={"mb-6"}>
                We give because God first loved us, and He gave us life, and life to the fullest!
            </div>
            <div className={"mb-6"}>
                Your generosity enables lives to be touched; help people experience a life-changing relationship with God. We, who freely received, freely give.
            </div>
            <div className={"mb-6 text-xl"}>
                You can now bank in your tithes and offerings to our Maybank account:
                Full Gospel Assembly Berhad
            </div>
            <RedButton content={"0-14011-230146"}/>
            <div className={"my-6 text-xl"} >
                or transfer using our new Duitnow QR code.
                The new QR code works for most e-wallets including Touch ‘n Go.
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