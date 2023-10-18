function BannerImage() {
    return (
        <div className="w-full h-[300px] relative">
            <img src="/banner-image.jpg" alt="A man lifting a barbell from the floor" className="w-full h-full object-cover"/>
            <p className="absolute bottom-7 left-7 text-white font-extrabold text-[6vw]">EAT SLEEP LIFT REPEAT</p>
        </div>
    );
}

export default BannerImage;