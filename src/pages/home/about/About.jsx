

const About = () => {
  return (
    <>
      <section className="container mx-auto px-6 ">
        <div className="flex justify-center items-center gap-6">
          <div className="w-full lg:w-[50%] flex justify-center ">
            <img
              className="w-full object-cover"
              src="/images/about/about01.png"
              alt="about"
            />
          </div>
          <div className="w-full lg:w-[50%] space-y-4">
          <button className="text-primary bg-primary/10 font-medium py-1 px-2 rounded">About Us</button>
            <h3 className="text-5xl font-Rubik font-medium">About Fresh Harvest</h3>
            <p className="max-w-lg text-base font-Questrial text-[#4A4A52]">Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
            <button className="text-[#FF6A1A] font-semibold border border-[#FF6A1A] py-1 px-3 rounded">Read More</button>
          </div>

        </div>
      </section>

    </>
  )
}

export default About